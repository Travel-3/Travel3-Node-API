// import { useState } from 'react';
import Travel3 from '@travel3/travel3-api';

Travel3.Context.initialize({
  apiKey: 'YOUR_API_KEY',
  apiBaseUrl: process.env.REACT_APP_API_ENDPOINT ?? "http://localhost:3000",
  errorCallback: (error: { data: any; }) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Error: ', error.data);
  }
});

function App() {
  // const [file, setFile] = useState(null);

  const handleLogin = async () => {

    const result = await Travel3.Auth.login({
      email: '1997roylee@gmail.com',
      password: process.env.REACT_APP_PASSWORD,
      grant_type: 'password',
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      identifier_type: 'email'
    });

    const { access_token } = result;

    console.log('access_token', access_token)
  }

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
