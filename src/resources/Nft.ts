import { ApiResource } from '../ApiResource';

export const Nft = ApiResource.extend({
    path: '/api/v1/accounts/me/nft_asset_items',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
