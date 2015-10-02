var createHash = require('create-hash');
var CryptoJS = require('crypto-js');

var message = 'synchronous write';

// sha256 using createHash
true && (function() {
    console.log(' == createHash == ');
    var hash = createHash('sha256');
    hash.update(message); //optional encoding parameter

    var digest = hash.digest();

    console.log(digest.toString('hex') == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest.toString('hex') == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest.toString('hex'));
    // alert(digest.toString('hex'));

    console.log(digest.toString('base64'));
    // alert(digest.toString('base64'));
})();

// sha256 using CryptoJS
true && (function() {
    console.log(' == CryptoJS == ');
    var digest = CryptoJS.SHA256(message);

    console.log(digest.toString() == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest.toString() == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest.toString());
    // alert(digest.toString());

    console.log((new Buffer(digest.toString(), 'hex')).toString('base64'));
// alert((new Buffer(digest.toString(), 'hex')).toString('base64'));
})();
