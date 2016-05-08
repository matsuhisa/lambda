// node sample.js foo.jpg bar.jpg

'use strict';

if(process.argv.length < 4){
  console.log('missing argment');
  return;
}

console.log('------------');
console.log('sample use gm');
console.log('------------');

let gm = require('gm').subClass({imageMagick: true});
let in_put_file_name = process.argv[2]
let out_put_file_name = process.argv[3]

const HEIGHT = 300;
const WIDTH =  300;

gm(in_put_file_name).resize(HEIGHT, WIDTH).write(out_put_file_name, function (err) {
  if (!err) console.log(in_put_file_name + " -> " + out_put_file_name);
});
