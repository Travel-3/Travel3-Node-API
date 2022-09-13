/* eslint-disable no-undef */
import Travel3 from '@travel3/travel3-api';
import dotenv from 'dotenv';
dotenv.config();

Travel3.Context.initialize({
    apiKey: 'YOUR_API_KEY',
    apiBaseUrl: 'https://travel-3-api.herokuapp.com',
    errorCallback: (error) => {
        // eslint-disable-next-line no-console, no-undef
        console.log('Error: ', error.data);
    }
});

(async () => {
    const result = await Travel3.Auth.login({
        email: '1997roylee@gmail.com',
        password: '12345678',
        grant_type: 'password',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        identifier_type: 'email'
    });

    const { access_token, token_type, expires_in, refresh_token } = result;

    const events = await Travel3.Admin.Event.list({
        access_token: access_token
    });

    console.log(events);
})();
