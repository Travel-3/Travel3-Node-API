import { ApiResource } from '../ApiResource';

export const Account = ApiResource.extend({
    path: '/api/v1/accounts',
    getMe: ApiResource.method({
        method: 'GET',
        path: '/me'
    })
});
