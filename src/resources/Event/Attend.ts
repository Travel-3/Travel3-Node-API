import { ApiResource } from '../../ApiResource';

export const Attend = ApiResource.extend({
    path: '/api/v1/events/attend',
    create: ApiResource.method({
        method: 'post',
        path: ''
    })
});
