# twitch-chat_app
A Messenger App built in React and Node.js using getStream.io.

### To Start This Project

### sign up to getstream.io

You need to [sign up](https://bit.ly/getstream-free) to getstream.io to get your secret, your key and your id.


### go into the client directory

In a new tab, go into the client directory. We will need to install the packages neccesary to run the frontend.

### `npm i`

Install all the packages you need by running the command in your terminal.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### go into the server directory

In a new tab, go into the server directory. We will need to install the packages neccesary to run the backend.

### create a `.env` file

Create a .env file with the following code and your personal keys, secrets and ids, in the root of your project.

```
API_KEY={your_key}
API_SECRET={your_secret}
APP_ID={your_id}
```

### `npm run start:backend`

This will start the server on [http://localhost:8000](http://localhost:8000).

The page will reload if you make edits.\
You will also see any lint errors in the console.
