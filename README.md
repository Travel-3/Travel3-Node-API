# Travel3-Node-API

- [Travel3-Node-API](#travel3-node-api)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Resources](#resources)
    - [Authentication](#authentication)
      - [Sign Up On Web](#sign-up-on-web)
        - [First Step](#first-step)
        - [Second Step](#second-step)
      - [Login](#login)
    - [Event](#event)
      - [List Going Events](#list-going-events)
      - [Participate Event](#participate-event)
      - [List Featured Events](#list-featured-events)
    - [Event Category](#event-category)
      - [List Event Categories](#list-event-categories)
    - [Event Type](#event-type)
      - [List Event Types](#list-event-types)
    - [Account](#account)
      - [Get Profile](#get-profile)
    - [Nft](#nft)
      - [List NFT](#list-nft)
    - [Nft Asset Item](#nft-asset-item)
      - [Show NFT Asset Item](#show-nft-asset-item)
    - [Admin](#admin)
      - [Event](#event-1)
        - [Get All Events](#get-all-events)
        - [Get Event By Id](#get-event-by-id)
        - [Create Event](#create-event)
    - [Direct Upload Image](#direct-upload-image)
    - [Delete Image](#delete-image)
    - [Nft](#nft-1)
      - [List NFT](#list-nft-1)
    - [Balance](#balance)
      - [Get Balance](#get-balance)
    - [Daily Check-in](#daily-check-in)
      - [1. Get Mystery List](#1-get-mystery-list)
      - [2. Attend](#2-attend)
    - [Product](#product)
      - [1. List Product](#1-list-product)
      - [2. Show Product](#2-show-product)
    - [Organization](#organization)
      - [Event](#event-2)
        - [Get All Events](#get-all-events-1)
        - [Get Event By Id](#get-event-by-id-1)
        - [Create Event](#create-event-1)
        - [Update Event By Event ID](#update-event-by-event-id)
        - [List Participants By Event ID](#list-participants-by-event-id)

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

## Resources

### Authentication

#### Sign Up On Web

##### First Step

Send the pre-register request to the server. This request will return a user id. You need to save this id for the next step.

```javascript
import Travel3 from '@travel3/travel3-api';

await Travel3.Auth.preRegister({
    email: '1997roylee@gmail.com',
    client_id: process.env.CLIENT_ID,
    identifier_type: 'email'
});
```

-   Example Response

```json
{
    "status": "ok",
    "data": {
        "user": {
            "id": "d5a84e54-9921-434b-9b1e-1c3b4a4754e7",
            "email": "1997roylee@gmail.com",
            "first_name": "",
            "last_name": "",
            "phone_number": null,
            "country_code": null,
            "created_at": "2022-10-04T14:20:07.819Z",
            "updated_at": "2022-10-04T14:20:07.819Z"
        }
    }
}
```

##### Second Step

Send the register request to the server. This request will return a access token. You need to save this access token for the next step.

```javascript
import Travel3 from '@travel3/travel3-api';

await Travel3.Auth.register({
    user_id: 'd5a84e54-9921-434b-9b1e-1c3b4a4754e7',
    password: '12345678',
    password_confirmation: '12345678',
    nickname: 'roylee',
    client_id: process.env.CLIENT_ID
});
```

-   Example Response

```json
{
    "status": "ok",
    "data": {
        "user": {
            "id": "d5a84e54-9921-434b-9b1e-1c3b4a4754e7",
            "email": "1997roylee@gmail.com",
            "nickname": "12345s6asd",
            "first_name": "",
            "last_name": ""
        },
        "access_token": {
            "access_token": "HNtA_G3VXfTlquk-ic9xio4904zQlqB2SuzLsxbgsd4",
            "token_type": "bearer",
            "expires_in": 172800,
            "refresh_token": "V1zu59f2aDzYNOcJOZg3noHHM-YuHRbsUd4HIE0M1Ug",
            "created_at": "2022-10-04T14:20:52.532Z"
        }
    }
}
```

-   3. Third you need to send the wallet uuid generate request to the server. This request will return a client_secret, nonce and token. You need to save this uuid for the next step.

```javascript
import Travel3 from '@travel3/travel3-api';

await Travel3.Wallet.generateUUID();
```

<!--
- 4. Final you need to send the wallet create request to the server. This request will return a wallet address.

```javascript

``` -->

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

### Event

#### List Going Events

```javascript
import Travel3 from '@travel3/travel3-api';

const events = await Travel3.Event.listGoing({
    page: 0
});
```

#### Participate Event

```javascript
import Travel3 from '@travel3/travel3-api';

await Travel3.Event.participate({
    event_id: '1'
});
```

#### List Featured Events

```javascript
import Travel3 from '@travel3/travel3-api'

const events = await Travel3.Event.listFeatured()
```

### Event Category

#### List Event Categories

```javascript
import Travel3 from '@travel3/travel3-api';

const eventTypes = await Travel3.EventCategory.list();
```

### Event Type

#### List Event Types

```javascript
import Travel3 from '@travel3/travel3-api';

const eventTypes = await Travel3.EventType.list();
```

### Account

#### Get Profile

```javascript
import Travel3 from '@travel3/travel3-api';

const nfts = await Travel3.Account.getMe();
```

### Nft

#### List NFT

```javascript
import Travel3 from '@travel3/travel3-api';

const nfts = await Travel3.Nft.list();
```

### Nft Asset Item

#### Show NFT Asset Item

```javascript
import Travel3 from '@travel3/travel3-api';

const nftAssetItem = await Travel3.NftAssetItem.show({
    nft_asset_item_id: '1'
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
    event_id: 'cdf58f57-618c-41e3-9cd2-21d4c3691002'
});
```

##### Create Event

You have to retrieve event type id by using `Travel3.EventType.list()` before you create an event.

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

### Direct Upload Image

1. Get the image metadata from travel3 api

```javascript
const metadata = await Travel3.Image.getMedia({
    filename: '123.png',
    type: 'image/png',
    access_token
});
```

2. Upload the image to the url

```javascript
await Travel3.directS3Upload(file, metadata.fields);
```

### Delete Image

```javascript
import Travel3 from '@travel3/travel3-api';

await Travel3.Image.delete({
    media_id: "aaaa-bbbb-cccc-dddd"
});
```

### Nft

#### List NFT

```javascript
import Travel3 from '@travel3/travel3-api';

const nfts = await Travel3.Nft.list();
```

### Balance

#### Get Balance

```javascript
import Travel3 from '@travel3/travel3-api';

const balance = await Travel3.Balance.show();
```

### Daily Check-in

#### 1. Get Mystery List

```javascript
import Travel3 from '@travel3/travel3-api';

const mysteries = await Travel3.MyStery.list();
```

#### 2. Attend

```javascript
import Travel3 from '@travel3/travel3-api';

const attend = await Travel3.Attend.create({
    loyalty_reward_id: '3a0e038b-eb07-43df-8bfb-7c9e86bb9515'
});
```

### Product

#### 1. List Product

```javascript
import Travel3 from '@travel3/travel3-api';

const productList = await Travel3.Product.list();
```

#### 2. Show Product

```javascript
import Travel3 from '@travel3/travel3-api';

const product = await Travel3.Product.show({
    productId: 7987297517852
});
```

### Organization

#### Event

##### Get All Events

```javascript
import Travel3 from '@travel3/travel3-api';

const events = await Travel3.Organization.Event.list();
```

##### Get Event By Id

```javascript
import Travel3 from '@travel3/travel3-api';

const event = await Travel3.Organization.Event.show({
    event_id: 'cdf58f57-618c-41e3-9cd2-21d4c3691002'
});
```

##### Create Event

You have to retrieve event type id by using `Travel3.EventType.list()` before you create an event.

```javascript
import Travel3 from '@travel3/travel3-api';

const event = await Travel3.Organization.Event.create({
    event_type_id: '7bbec334-db09-4d04-acea-09df4a7b0963',
    event_category_id: '7bbec334-db09-4d04-acea-09df4a7b0963',
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

##### Update Event By Event ID

```javascript
import Travel3 from '@travel3/travel3-api';

Travel3.Organization.Event.update({
    event_id: 'cdf58f57-618c-41e3-9cd2-21d4c3691002',
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

##### List Participants By Event ID

```javascript
import Travel3 from '@travel3/travel3-api';

const participants = await Travel3.Organization.Event.listParticipants({
    event_id: 'cdf58f57-618c-41e3-9cd2-21d4c3691002'
});
```
