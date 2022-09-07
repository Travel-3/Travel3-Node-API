import Travel3 from '@travel3/travel3-api';

Travel3.Context.initialize({
    apiKey: 'YOUR_API_KEY',
    apiSecret: 'YOUR_API_SECRET',
    errorCallback: (error) => {
        // eslint-disable-next-line no-console, no-undef
        console.log('Error: ', error.data);
    }
});

(async () => {
    // const result = await Travel3.Auth.lookup({
    //     email: '1997roylee@gmail.com'
    // });
    const result = await Travel3.Auth.login({
        email: '1997roylee@gmail.com'
    });
    // eslint-disable-next-line no-console, no-undef
    console.log(result);
})();
