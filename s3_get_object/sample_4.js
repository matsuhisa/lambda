'use strict';

let aws = require('aws-sdk');
let s3 = new aws.S3();
let im = require('imagemagick');

exports.handler = (event, context, callback) => {
  const HEIGHT = 300;
  const WIDTH =  300;

  const bucketName = event.Records[0].s3.bucket.name;
  const file = event.Records[0].s3.object.key;

  if(bucketName == "static-rails") {
    const file_info = file.split(".");
    const out_put_file_name = file_info[0] + "_thumbnail." + file_info[1];
    im.convert([file, '-resize', WIDTH+'x'+HEIGHT, out_put_file_name], function(err, stdout){

      const contentType = 'image/jpeg';
      const params = {Bucket: bucketName, Key: keyName, Body: new Buffer(stdout, 'binary'), ContentType: contentType};

      s3.putObject(params, function(err, data) {
        if (err)
          console.log('S3 : error : ' + err)
        else
          console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });

    });
  }else{
    console.log('------------');
    console.log(bucket);
    console.log(file);
    console.log('------------');
  }
};
