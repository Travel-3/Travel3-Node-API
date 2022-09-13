import { ApiResource } from '../ApiResource';

export const EventType = ApiResource.extend({
    path: '/api/v1/event_types',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
