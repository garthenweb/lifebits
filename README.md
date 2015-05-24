# lifebits

To get the app running install NodeJS, execute `npm install`, `bower install` and `grunt`.
This will spawn a webserver, you can access it on https://localhost:8080.

Befor starting the server you need to add the file `config/locals.js` and insert your lifelog api keys:

``` javascript
module.exports = {
 SONY_LIFELOG_CLIENT_ID: '1234556',
 SONY_LIFELOG_SECRET: 'my_private_secret'
};
```
