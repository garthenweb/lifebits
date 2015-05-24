'use strict';

var fs      = require('fs');
var express = require('express');
var https   = require('https');
var app     = express();
var request = require('request');
var locals  = require('./config/locals');

var LIFELOG_CREATE_TOKEN = 'https://platform.lifelog.sonymobile.com/oauth/2/token';
var LIFELOG_GET_ACTIVITIES = 'https://platform.lifelog.sonymobile.com/v1/users/me/activities';

var token = null;
var tokenCode  = null;

app.use(express.static(__dirname + '/.tmp/public'));

app.get('/login', function(req, res) {
  tokenCode = req.query.code;

  request.post(LIFELOG_CREATE_TOKEN, {
    form: {
      client_id: locals.SONY_LIFELOG_CLIENT_ID,
      client_secret: locals.SONY_LIFELOG_SECRET,
      grant_type: 'authorization_code',
      code: tokenCode
    }
  }, function(err, resp, body) {
    if(err) {
      res.end(err);
      return;
    }

    token = JSON.parse(body);
    var file = __dirname + '/public/index.html';
    fs.readFile(file, { encoding: 'utf8' }, function(err, data) {
      if(err) {
        return console.error(err);
      }
      res.end(data);
    });
  });
});


function getAuthHeader() {
  // console.log(token.access_token);
  return {
    'Authorization': 'Bearer ' + token.access_token
  };
}


app.get('/v1/users/me/activities', function(req, res) {
  request.get({
    url: LIFELOG_GET_ACTIVITIES,
    headers: getAuthHeader()
  }, function(err, resp, body) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });
});


app.use(function(req, res) {
  var file = __dirname + '/public/index.html';
  fs.readFile(file, { encoding: 'utf8'}, function(err, data) {
    res.setHeader('Content-Length', data.length);
    res.send(data);
  });
});


// start server
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
  ca: fs.readFileSync('ca.crt')
}, app).listen(8080);
