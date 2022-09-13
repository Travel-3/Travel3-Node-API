# Travel3-Node-API

- [Travel3-Node-API](#travel3-node-api)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
    - [Authentication](#authentication)
      - [Login](#login)
    - [Admin](#admin)
      - [Event](#event)
        - [Get All Events](#get-all-events)
        - [Get Event By Id](#get-event-by-id)
        - [Create Event](#create-event)

## Installation

```bash
npm install --save @travel3/travel3-api
```

## Getting Started

```javascript
Travel3.Context.initialize({
    apiKey: 'YOUR_API_KEY',
    apiBaseUrl: 'https://travel-3-api.herokuapp.com',
    errorCallback: (error) => {
        // eslint-disable-next-line no-console, no-undef
        console.log('Error: ', error.data);
    }
});
```

### Authentication

#### Login

```javascript
import Travel3 from '@travel3/travel3-api';
import dotenv from 'dotenv';
dotenv.config();

await Travel3.Auth.login({
    email: '1997roylee@gmail.com',
    password: '12345678',
    grant_type: 'password',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    identifier_type: 'email'
});
```

### Admin

#### Event

##### Get All Events

```javascript
import Travel3 from '@travel3/travel3-api';

const events = await Travel3.Admin.Event.list();
```

##### Get Event By Id

```javascript
import Travel3 from '@travel3/travel3-api';

const event = await Travel3.Admin.Event.show({
    eventId: 'cdf58f57-618c-41e3-9cd2-21d4c3691002'
});
```

##### Create Event

```javascript
import Travel3 from '@travel3/travel3-api';

const event = await Travel3.Admin.Event.create({
    event_type_id: '7bbec334-db09-4d04-acea-09df4a7b0963',
    nft_collection_id: '2c196aa2-1939-4200-95ef-ffdae46d981d',
    name: '(Sample) MGM Cotai Starbucks Coffee Workshop',
    timezone: 'Asia/Hong_Kong',
    slug: 'mgm-cotai-starbucks-coffee-workshop',
    started_at: '2022-08-01 04:44:17',
    scheduled_to_end_at: '2022-09-30 04:44:17',
    description: 'Hello world',
    language: 'Chinese',
    venue_attributes: {
        name: 'MGM Cotai',
        address: '4HW9+78V, Av. da Nave Desportiva, Macao',
        latitude: 22.145734,
        longitude: 113.568012,
        city: 'Macau SAR',
        state: 'Macau SAR',
        country: 'Macau SAR'
    },
    images_attributes: [
        {
            src: 'https://cdn.pixabay.com/photo/2016/03/26/23/23/starbucks-1281880__480.jpg'
        }
    ]
});
```
