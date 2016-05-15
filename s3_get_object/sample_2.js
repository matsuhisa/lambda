'use strict';

let aws = require('aws-sdk');
let s3 = new aws.S3();
let im = require('imagemagick');

exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event, null, 2));
  console.log(JSON.stringify(context, null, 2));

  const HEIGHT = 300;
  const WIDTH =  300;
  const bucket = event.Records[0].s3.bucket.name;
  const file = event.Records[0].s3.object.key;

  if(bucket == "static-rails") {
    const file_info = file.split(".");
    const out_put_file_name = file_info[0] + "_thumbnail." + file_info[1];
    im.convert([file, '-resize', WIDTH+'x'+HEIGHT, out_put_file_name], function(err, stdout){
      if (err) throw err;
      console.log('------------');
      console.log('stdout:', stdout);
      console.log('------------');
    });
  }else{
    console.log('------------');
    console.log(bucket);
    console.log(file);
    console.log('------------');
  }
};
