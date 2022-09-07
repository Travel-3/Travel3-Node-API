import { AxiosResponse, Method } from 'axios';

import { ApiResource } from './ApiResource';

function findCallback(...args: any[]): (response: any) => void | undefined {
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
    if (!params) {
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
) {
    const _method = method.toLowerCase() || 'get';
    const headers = options.headers || {};
    let data = options.data || {};
    let params = options.params || {};

    const urlData = urlParams.reduce((urldata: any, _params: string) => {
        if (
            Object.hasOwnProperty.call(args, _params) &&
            (typeof args[_params] === 'string' ||
                typeof args[_params] === 'number')
        ) {
            urldata[_params] = args[_params] as string;
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
    return () => {
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

        return _this.request(
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
    callback: (response: any) => void | undefined
) {
    const response = await request();
    return callback ? callback(response.data) : response.data;
    // try {
    //     const response = await request()

    //     return {
    //         success: true,
    //         data: callback ? callback(response.data) : response.data,
    //     }
    // } catch (error: any) {
    //     console.warn(error, error.response)
    //     return {
    //         success: false,
    //         error: error.response,
    //     }
    // }
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
        const urlParams = extractUrlParams(fullPath || newPath);
        // console.log('urlParams', urlParams)
        const response = await executeRequest(
            makeRequest(this, newPath, urlParams, args, spec, accessToken),
            callback
        );

        return response;
    };
};
