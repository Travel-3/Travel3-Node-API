import { ApiResource } from '../ApiResource';

export const Nft = ApiResource.extend({
    path: '/api/v1/nfts/:wallet_address',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
