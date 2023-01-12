import { ApiResource } from '../ApiResource';

export const Image = ApiResource.extend({
    path: '/api/v1/media',
    getMedia: ApiResource.method({
        method: 'GET',
        path: '/upload'
    }),
    delete: ApiResource.method({
        method: 'DELETE',
        path: '/{media_id}'
    })
});
