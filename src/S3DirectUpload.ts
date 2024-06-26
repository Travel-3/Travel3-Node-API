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

export const directS3Upload = async (
    file: Blob,
    params: Params
): Promise<any> => {
    const formData = new FormData();
    formData.append('acl', 'public-read');
    formData.append('key', params.key);
    formData.append('Content-Type', params['Content-Type']);
    formData.append('policy', params.policy);
    formData.append('x-amz-credential', params['x-amz-credential']);
    formData.append('x-amz-algorithm', params['x-amz-algorithm']);
    formData.append('x-amz-date', params['x-amz-date']);
    formData.append('x-amz-signature', params['x-amz-signature']);
    formData.append('file', file);
    return await axios.post(
        'https://s3.ap-northeast-1.amazonaws.com/travel3.storage',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
};
