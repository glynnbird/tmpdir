const TMP_DIR = process.env.TMP_DIR || '/tmp'
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const createTmpDirectory = () => {
  // generate random string
  const dir = crypto.randomBytes(16).toString('hex')

  // make the directory
  const p = path.join(TMP_DIR, dir)
  fs.mkdirSync(p)

  return p
}

const removeTmpDirectory = (dir) => {
  // make sure this is a temporary directory
  if (!dir.startsWith(TMP_DIR)) {
    throw new Error('not a temp directory')
  }
  // rm -rf <dir>
  fs.rmdirSync(dir, { recursive: true })
}

module.exports = {
  createTmpDirectory,
  removeTmpDirectory
}
