import { ApiResource } from '../ApiResource';

export const Product = ApiResource.extend({
    path: '/api/v1/products',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    }),
    show: ApiResource.method({
        method: 'GET',
        path: '/{productId}'
    })
});
