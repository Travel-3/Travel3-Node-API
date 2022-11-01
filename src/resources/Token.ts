import { ApiResource } from '../ApiResource';

export const Token = ApiResource.extend({
    path: '/api/v1/tokens',
    refreshMeta: ApiResource.method({
        method: 'POST',
        path: '/{token_id}/meta/refresh.json'
    })
});
