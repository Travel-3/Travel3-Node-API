import { ApiResource } from '../ApiResource';

export const Nft = ApiResource.extend({
    path: '/api/v1/nfts',
    list: ApiResource.method({
        method: 'GET',
        path: '/{wallet_address}'
    })
});
