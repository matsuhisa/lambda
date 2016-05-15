'use strict';

let aws = require('aws-sdk');
let s3 = new aws.S3();
let im = require('imagemagick');

//
exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2));
  console.log(JSON.stringify(context, null, 2));

  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log('------------');
  console.log(bucket);
  console.log(key);
  console.log('------------');
};
