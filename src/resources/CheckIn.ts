import { ApiResource } from '../ApiResource';

export const CheckIn = ApiResource.extend({
    path: '/api/v1/checkins',
    create: ApiResource.method({
        method: 'POST',
        path: ''
    }),
    mint: ApiResource.method({
        method: 'POST',
        path: '/{checkin_id}/mints'
    })
});
