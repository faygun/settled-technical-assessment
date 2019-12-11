# Settled tech assessment

This project included Node.js, Express.js and mock site.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app.<br>
Open [http://localhost:5000/api/listView](http://localhost:5000/api/listView) to check it as post request in the postman or something like that.

### `npm run token`
You need a token to call this api. That is why, you can see token in the terminal. Also, header value for token is: <br>
"x-auth-token"

### `NOTE`
You can import settled.postman_collection.json file to see request's template for local and remote.

remote address for getting token = https://settled-api.herokuapp.com/api/getToken<br>
remote address = https://settled-api.herokuapp.com/api/listView<br>
local address =  http://localhost:5000/api/listView