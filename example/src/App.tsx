import { useState } from 'react';
import Travel3 from '@travel3/travel3-api';

Travel3.Context.initialize({
  apiKey: 'YOUR_API_KEY',
  apiBaseUrl: 'http://localhost:3000',
  errorCallback: (error: { data: any; }) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Error: ', error.data);
  }
});

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    const result = await Travel3.Auth.login({
      email: '1997roylee@gmail.com',
      password: process.env.REACT_APP_PASSWORD,
      grant_type: 'password',
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      identifier_type: 'email'
    });

    const { access_token } = result;

    const metadata = await Travel3.Image.getMedia({
      filename: (file as any).name,
      type: (file as any).type,
      access_token
    });

    console.log(metadata.fields)

    Travel3.directS3Upload(
      file as unknown as Blob,
      metadata.fields
    );
  }

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);

  }

  return (
    <div className="App">

      <input type="file"
        onChange={handleFileChange}
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"></input>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
