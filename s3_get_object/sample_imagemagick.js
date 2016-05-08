// node sample.js foo.jpg bar.jpg

'use strict';

if(process.argv.length < 4){
  console.log('missing argment');
  return;
}

console.log('------------');
console.log('sample use imageMagick');
console.log('------------');

let im = require('imageMagick')
let in_put_file_name = process.argv[2]
let out_put_file_name = process.argv[3]

const HEIGHT = 300;
const WIDTH =  300;

im.convert([in_put_file_name, '-resize', WIDTH+'x'+HEIGHT, out_put_file_name], function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});
