import { ApiResource } from '../ApiResource';

export const Account = ApiResource.extend({
    path: '/api/v1/accounts',
    getMe: ApiResource.method({
        method: 'GET',
        path: '/me'
    }),
    updateMe: ApiResource.method({
        method: 'PUT',
        path: '/me'
    }),
    updatePassword: ApiResource.method({
        method: 'PUT',
        path: '/me/password'
    })
});
