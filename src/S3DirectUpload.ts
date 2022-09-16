import axios from 'axios';

export interface Params {
    key: string;
    policy: string;
    'Content-Type': string;
    'x-amz-credential': string;
    'x-amz-algorithm': string;
    'x-amz-date': string;
    'x-amz-signature': string;
}

export const directS3Upload = (file: File, params: Params) =>
    axios.post('https://s3.ap-northeast-1.amazonaws.com/travel3.storage', {
        ...params,
        file
    });
