import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Context } from './Context';

import { API_BASE_URL, API_VERSION } from './version';

const DEFAULT_HEADERS = {};

export class ApiClient {
    public basePath = API_BASE_URL;
    public version: string = API_VERSION;
    instance: AxiosInstance;

    constructor() {
        this.instance = this.createAxiosInstance();
    }

    public buildApiEndpoint = (): string => {
        return `${this.basePath}/api`;
    };

    private createAxiosInstance = () => {
        const baseURL = this.buildApiEndpoint();
        const config: AxiosRequestConfig = {
            baseURL,
            headers: DEFAULT_HEADERS
        };

        const instance: AxiosInstance = axios.create(config);

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                // if (error.response.status === 401) {
                //     // logout()
                // }
                Context.errorCallback(error.response);
                return Promise.reject(error.response);
            }
        );

        return instance;
    };
}
