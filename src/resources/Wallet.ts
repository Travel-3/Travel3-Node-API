import { ApiResource } from '../ApiResource';

export const Wallet = ApiResource.extend({
    path: '/api/v1/wallets',
    generateUUID: ApiResource.method({
        method: 'POST',
        path: '/uuid_generator'
    }),
    create: ApiResource.method({
        method: 'POST',
        path: ''
    })
});
