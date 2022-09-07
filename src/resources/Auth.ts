import { ApiResource } from '../ApiResource';

export const Auth = ApiResource.extend({
    path: '',
    lookup: ApiResource.method({
        method: 'POST',
        path: '/lookup.json'
    }),
    preRegister: ApiResource.method({
        method: 'POST',
        path: '/pre_registration.json'
    }),
    register: ApiResource.method({
        method: 'POST',
        path: '/registration.json'
    }),
    confirm: ApiResource.method({
        method: 'POST',
        path: '/confirmation.json'
    }),
    login: ApiResource.method({
        method: 'POST',
        path: '/token.json'
    }),
    forgetPassword: ApiResource.method({
        method: 'POST',
        path: '/password/forget.json'
    }),
    resetPasswordByToken: ApiResource.method({
        method: 'PATCH',
        path: '/password.json'
    })
});
