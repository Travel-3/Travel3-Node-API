import { ApiResource } from '../ApiResource';

export const Event = ApiResource.extend({
    path: '/api/v1/events',
    create: ApiResource.method({
        method: 'POST',
        path: ''
    }),
    list: ApiResource.method({
        method: 'GET',
        path: ''
    }),
    show: ApiResource.method({
        method: 'GET',
        path: '/{event_id}'
    }),
    update: ApiResource.method({
        method: 'PATCH',
        path: '/{event_id}'
    }),
    participate: ApiResource.method({
        method: 'POST',
        path: '/{event_id}/participate'
    })
});
