import { ApiResource } from '../ApiResource';

export const Balance = ApiResource.extend({
    path: '/api/v1/balance',
    show: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
