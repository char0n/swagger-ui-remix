// polyfill can be removed with Node.js >= 20
const { File } = require('node:buffer')

globalThis.File  = globalThis.File ?? File