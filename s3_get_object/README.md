# node.js で画像ファイルをリサイズする

node.js で、imageMagick を使う方法は2つあります。
1つは`gm`。もう1つは`imageMagick`です。

## 試した環境

* Mac OS X 10.11
* node.js 4.3.2
* imageMagick を用意済み
 * `brew install imageMagick`

## package.json

aws-sdk や async は他で使うため

```json
{
  "dependencies": {
    "aws-sdk": ">= 2.0.9",
    "gm": ">= 1.9.0",
    "imagemagick": ">= 0.0.1",
    "async": ">= 1.0.0"
  }
}
```

## gm を利用する場合

```
npm install
```

```
node sample.js foo.jpg bar.jpg
```

### sample.js

```javascript
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

```

## imageMagick を利用する場合


```
node sample_imagemagick.js foo.jpg bar.jpg
```

### sample_imagemagick.js

```javascript
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
```
