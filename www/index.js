/* // sha256 seems fine
var createHash = require('create-hash');
var hash = createHash('sha256');
hash.update('synchronous write'); //optional encoding parameter

var digest = hash.digest();

console.log(digest);
console.log(digest.toString('hex'));
// alert(digest.toString('hex'));

console.log(digest.toString('base64'));
// alert(digest.toString('base64'));
//*/

///* // hmac?
var createHmac = require('create-hash');

var key = "0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b";
var data = "4869205468657265";

var hmac = createHmac("sha256", key);
hmac.update(data);

var digest = hmac.digest();

console.log(digest);
console.log(digest.toString('hex'));
// alert(digest.toString('hex'));

console.log(digest.toString('base64'));
// alert(digest.toString('base64'));
//*/
