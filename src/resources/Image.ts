import { ApiResource } from '../ApiResource';

export const Image = ApiResource.extend({
    path: '/api/v1/media/upload',
    getMedia: ApiResource.method({
        method: 'GET',
        path: ''
        // params: {
        //     filename: '',
        //     type: ''
        // }
    })
});
