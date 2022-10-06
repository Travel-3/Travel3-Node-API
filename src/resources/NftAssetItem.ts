import { ApiResource } from '../ApiResource';

export const NftAssetItem = ApiResource.extend({
    path: '/api/v1/nft_asset_items',
    show: ApiResource.method({
        method: 'GET',
        path: '/{nft_asset_item_id}'
    })
    // list: ApiResource.method({
    //     method: 'GET',
    //     path: '/{wallet_address}'
    // })
});
