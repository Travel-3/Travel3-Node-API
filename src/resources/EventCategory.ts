import { ApiResource } from '../ApiResource';

export const EventCategory = ApiResource.extend({
    path: '/api/v1/event_categories',
    list: ApiResource.method({
        method: 'GET',
        path: ''
    })
});
