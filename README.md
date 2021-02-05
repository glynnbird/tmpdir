# tmpdir

Creates and deletes temporary directories.

## Installation

```sh
npm install --save https://github.com/glynnbird/tmpdir
```

## Usage

```js
const tmpdir = require('tmpdir')
const path = require('path')
const fs = require('fs')

// make temporary directory
const tempPath = tmpdir.createTmpDirectory()

// write some temporary files
const p = path.join(tempPath, 'myfile.txt')
fs.writeFileSync(p, 'Hello World')

// tidy up
tmpdir.removeTmpDirectory()
```
