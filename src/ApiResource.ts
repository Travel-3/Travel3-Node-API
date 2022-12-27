import {
    // AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    Method
} from 'axios';
import extend from 'extend';

import { ApiClient } from './ApiClient';
import * as ApiMethod from './ApiMethod';

// const client = new ApiClient();

export class ApiResource {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    // client: ApiClient;
    // instance: AxiosInstance;
    createResourcePathWithSymbols = (
        basePath: string,
        pathWithSymbols: string
    ): string => {
        return `${[basePath, pathWithSymbols].join('')}`;
    };

    public request = async (
        method: Method,
        path: string,
        data?: any,
        params?: any,
        headers?: any,
        accessToken?: string
    ): Promise<AxiosResponse> => {
        const client = new ApiClient();
        const config: AxiosRequestConfig = {
            method,
            url: path
        };
        if (Object.values(data).length > 0) {
            config.data = data;
        }
        if (Object.values(params).length > 0) {
            config.params = params;
        }
        if (accessToken !== undefined || Object.values(headers).length > 0) {
            config.headers = this._makeHeaders(accessToken, headers);
        }

        return await client.instance.request(config);
    };

    public static extend(resource: any): any {
        return extend({}, new ApiResource(), resource);
    }

    public static method = ApiMethod.ApiMethod;

    private readonly _makeHeaders = (
        accessToken: string | undefined,
        headers?: any
    ): any => {
        const defaultHeaders = {
            Authorization:
                accessToken !== undefined ? `Bearer ${accessToken}` : '',
            Accept: 'application/json'
        };
        return {
            ...headers,
            ...defaultHeaders
        };
    };
}
