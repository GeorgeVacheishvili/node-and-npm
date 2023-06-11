var validator = require('validator');

console.log(validator.isEmail('test@test.com'))
console.log(validator.isEmail('gio@gio.com'))
console.log(validator.isEmail('My name is giorgi'))
console.log(validator.isEmail('abcDE123'))
