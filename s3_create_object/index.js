'use strict';

console.log('------------');
console.log('AWS Buckets list name');
console.log('------------');

let aws = require('aws-sdk');
let uuid = require('node-uuid');
let s3 = new aws.S3();

// バケット名を取得する
s3.listBuckets(function(err, data) {
  if(!err) {
    for (var bucket in data['Buckets']) {
      console.log('------------');
      console.log(data['Buckets'][bucket]['Name']);
      console.log('------------');
    }
  }
});
