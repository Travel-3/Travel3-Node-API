import { ApiResource } from '../ApiResource';

export const MyStery = ApiResource.extend({
    path: '/api/v1/mysteries',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
