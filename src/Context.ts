interface ContextParams {
    apiKey: string;
    apiBaseUrl: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorCallback: (error: any) => void;
    // apiSecret: string
}

const Context = {
    API_KEY: '',
    API_BASE_URL: '',
    initialize(params: ContextParams) {
        this.API_KEY = params.apiKey;
        this.API_BASE_URL = params.apiBaseUrl;
        this.errorCallback = params.errorCallback;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorCallback: (error: any) => {
        // eslint-disable-next-line no-console
        console.warn(error);
    }
};

export { Context, ContextParams };
