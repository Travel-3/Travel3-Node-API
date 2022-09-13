/* eslint-disable @typescript-eslint/no-explicit-any */
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
    constructor() {
        // this.client = new ApiClient();
        // this.instance = this.client.instance;
    }

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
        if (accessToken || Object.values(headers).length > 0) {
            config.headers = this._makeHeaders(accessToken, headers);
        }

        return client.instance.request(config);
    };

    public static extend(resource: any) {
        return extend({}, new ApiResource(), resource);
    }

    public static method = ApiMethod.ApiMethod;

    private _makeHeaders = (accessToken: string | undefined, headers?: any) => {
        const defaultHeaders = {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
            Accept: 'application/json'
        };
        return {
            ...headers,
            ...defaultHeaders
        };
    };
}
