var https = require('https');
var http = require('http');
var bl = require('bl');
var express = require('express');
var bodyParser = require('body-parser');

function keyValue(key,value){
  this.key = key;
  this.val = value;
}

function constructURL(path, params)
{
  var result = path;
  var isFirstParam = true;

  for(var p in params){
    if(isFirstParam){
      result+='?'
      isFirstParam = false;
    }
    else result+='&';

    result+=params[p].key +'='+params[p].val;

  }

  return result;

}

var CODE = '115da4d7081245eaad7ceaf8f2a460e6';
var PORT = 8080;
var CLIENT_ID = '9fd67b7f64924217afc90b81fb7ef7fb';
var REDIRECT_URI = 'https://nodejs.org/about/';
var RESPONSE_TYPE_VAL = 'code';

var UrlPath = '/oauth/authorize/';
var UrlParams = [new keyValue('client_id',CLIENT_ID),
                 new keyValue('redirect_uri',REDIRECT_URI),
                 new keyValue('response_type',RESPONSE_TYPE_VAL)];

var constructedUrlPath = constructURL(UrlPath,UrlParams);
console.log(constructedUrlPath);

// https module

var options = {
  hostname: 'api.instagram.com',
  path: constructedUrlPath,
  method: 'GET',
};

var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
