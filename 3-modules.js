// CommonJS, every file is module (by deafault)
// Modules - Encapsulated code (only share minimum)
const n = require('./4-modules');
const sayHi = require('./5-utils');
const data = require('./6-altFlavor')
require('./7-mind-grenade')
sayHi('Marian')
sayHi(n.dad)
sayHi(n.me)
