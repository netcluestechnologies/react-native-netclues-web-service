# react-native-netclues-web-service

Axios API calls made easier with a customized React Native package. Its user-friendly interface simplifies HTTP requests, responses, and failures, making API integration a breeze and freeing you up to concentrate on developing features for your app rather than network request complications.

## Installation

Using npm:

```sh
npm install react-native-netclues-web-service
```

or using yarn:

```sh
yarn add  react-native-netclues-web-service
```

## Configuration

Before making any API calls, you need to configure the package with your base URL and optional authentication credentials. Create a configuration file (e.g., config.ts) in your React Native project:

```js
// config.ts
import { Config } from 'react-native-netclues-web-service';

export const CONFIG: Config = {
    BASE_URL: '', // Base url of your API
    auth: {
        username: '', // Basic auth username
        password: '', // Basic auth password
    }
};

```
Then, initialize the configuration once in your application:

```js
import { setConfig } from 'react-native-netclues-web-service';
import { CONFIG } from './config';  // Adjust the import path as needed

// Set the configuration once
setConfig(CONFIG);

```
## Usage

To use the postServiceCallWithBasicAuth function, you can import it and call it with the necessary parameters. The function allows for dynamic headers and optional authentication.

```js
import { postServiceCallWithBasicAuth } from 'react-native-netclues-web-service';

postServiceCallWithBasicAuth(
   endpoint,  // Endpoint for the API
   params,  // Params (optional)
   headers,  // Headers (optional)
   authConfig,  // Authentication (optional)
   response => console.log('Success:', response.data),
   error => console.log('Error:', error.message)
);

```

## API

**postServiceCallWithBasicAuth** Makes a POST request to the specified endpoint with optional parameters, headers, and authentication.

# Parameters:

* **endpoint (string):** The API endpoint to which the request will be made.
* **params (object, optional):** The parameters to be sent with the POST request.
* **headers (object, optional):** Any custom headers to be included with the request.
* **auth (object, optional):** Authentication credentials ({ username: string, password: string }).
* **onSuccessCallBack (function, optional):** Callback function to handle successful response.
* **onFailureCallBack (function, optional):** Callback function to handle errors.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

This project is licensed under the MIT License.

---
