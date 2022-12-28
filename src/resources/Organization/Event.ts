import { ApiResource } from '../../ApiResource';

export const Event = ApiResource.extend({
    path: '/api/v1/organizations/events',
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
    listParticipants: ApiResource.method({
        method: 'GET',
        path: '/{event_id}/participants'
    })
});
