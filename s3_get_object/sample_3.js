'use strict';

let aws = require('aws-sdk');
let s3 = new aws.S3();
let uuid = require('node-uuid');
let im = require('imagemagick');
let fs = require('fs');

if(process.argv.length < 3){
  console.log('missing argment');return;
}

const bucketName = 'static-rails';
const keyName = uuid.v4() + '.jpg';
const in_put_file_name = process.argv[2];

const HEIGHT = 300;
const WIDTH =  300;

im.convert([in_put_file_name, '-resize', WIDTH+'x'+HEIGHT, keyName], function(err, stdout){
  if(err) {
    console.log();
  }else {
    console.log('stdout:', err);
    console.log('stdout:', stdout);

    const contentType = 'image/jpeg';
    const params = {Bucket: bucketName, Key: keyName, Body: new Buffer(stdout, 'binary'), ContentType: contentType};

    s3.putObject(params, function(err, data) {
      if (err)
        console.log('S3 : error : ' + err)
      else
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    });
  }
});

// im.convert([in_put_file_name, '-resize', WIDTH+'x'+HEIGHT, keyName], function(err, stdout){
//   if(err) {
//     console.log();
//   }else {
//     console.log('stdout:', err);
//     console.log('stdout:', stdout);
//     const contentType = 'image/jpeg';
//     const params = {Bucket: bucketName, Key: keyName, Body: new Buffer(stdout, 'binary'), ContentType: contentType};
//
//     s3.putObject(params, function(err, data) {
//       if (err)
//         console.log('S3 : error : ' + err)
//       else
//         console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//     });
//   }
// });
