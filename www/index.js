var createHmac = require('create-hmac');

var key = "0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b";
var data = "4869205468657265";

var hmac = createHmac("sha256", key);
hmac.update(data);

var signature = hmac.digest('base64');

console.log(signature);
alert(signature);
