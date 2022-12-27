/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse, Method } from 'axios';

import { ApiResource } from './ApiResource';

function findCallback(...args: any[]): (response: any) => any | undefined {
    const callback =
        typeof args[arguments.length - 1] === 'function'
            ? args.pop()
            : undefined;

    return callback;
}

function findAccessToken(...args: any[]): string | undefined {
    if (
        typeof args[0] === 'object' &&
        Object.hasOwnProperty.call(args[0], 'accessToken')
    ) {
        const accessToken = args[0].accessToken;
        delete args[0].accessToken;
        return accessToken;
    }

    return undefined;
}

function extractUrlParams(path: string): string[] {
    const params = path.match(/\{\w+\}/g);
    if (params === null) {
        return [];
    }

    return params.map((param) => param.replace(/[{}]/g, ''));
}

interface OverrideOptions {
    data?: any;
    params?: any;
    headers?: any;
}

function getRequestOptions(
    method: Method,
    urlParams: string[] = [],
    args: any,
    options: OverrideOptions = {}
): {
    method: Method;
    data: any;
    params: any;
    urlData: any;
    headers: any;
} {
    const _method = method.toLowerCase() ?? 'get';
    const headers = options.headers ?? {};
    let data = options.data ?? {};
    let params = options.params ?? {};

    const urlData = urlParams.reduce((urldata: any, _params: string) => {
        if (
            Object.hasOwnProperty.call(args, _params) &&
            (typeof args[_params] === 'string' ||
                typeof args[_params] === 'number')
        ) {
            urldata[_params] = args[_params] as string;
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete args[_params];
        }
        return urldata;
    }, {});

    if (_method === 'get') {
        params = { ...params, ...args };
    } else {
        data = { ...data, ...args };
    }

    return {
        method: _method as Method,
        data,
        params,
        urlData,
        headers
    };
}

function makeRequest(
    _this: ApiResource,
    path: string,
    urlParams: string[],
    args: any,
    spec: ApiMethodSpec,
    accessToken: string | undefined
) {
    return async () => {
        const { options, method } = spec;
        const requestOptions = getRequestOptions(
            method,
            urlParams,
            args[0],
            options
        );

        const newPath = Object.entries(requestOptions.urlData).reduce(
            (_path: string, [key, value]) => {
                return _path.replace(`{${key}}`, value as string);
            },
            path
        );

        return await _this.request(
            requestOptions.method,
            newPath,
            requestOptions.data,
            requestOptions.params,
            requestOptions.headers,
            accessToken
        );
    };
}

async function executeRequest(
    request: () => Promise<AxiosResponse<any, any>>,
    callback: (response: any) => any | undefined
): Promise<any> {
    const response = await request();
    return callback !== undefined ? callback(response.data) : response.data;
}

export interface ApiMethodSpec {
    method: Method;
    path: string;
    fullPath?: string;
    options?: any;
}

export const ApiMethod = (
    spec: ApiMethodSpec
): ((...args: any) => Promise<any>) => {
    // 封裝request
    const { fullPath, path } = spec;

    return async function (this: any, ...args: any) {
        const callback = findCallback(...args);
        const accessToken = findAccessToken(...args);
        // const accessToken = Object.hasOwnProperty.call(args[0], 'accessToken')
        const newPath = this.createResourcePathWithSymbols(this.path, path);
        const urlParams = extractUrlParams(fullPath ?? newPath);
        // console.log('urlParams', urlParams)
        const response = await executeRequest(
            makeRequest(this, newPath, urlParams, args, spec, accessToken),
            callback
        );

        return response;
    };
};
