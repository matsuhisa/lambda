# node.js で画像ファイルをリサイズする

```
npm install
```

```
node sample.js foo.jpg bar.jpg
```

## 試した環境

* Mac OS X 10.11
* imageMagick を用意済み
 * `brew install imageMagick`

## package.json

* gm だけでいいはず
* aws-sdk や async は他で追加

```json
{
  "dependencies": {
      "aws-sdk": ">= 2.0.9",
      "gm": ">= 1.9.0",
      "async": ">= 1.0.0"
  }
}
```

## sample.js

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
