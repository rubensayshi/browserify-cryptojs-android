var createHash = require('create-hash');
var CryptoJS = require('crypto-js');

var message = 'synchronous write';
var messageHex = "73796e6368726f6e6f7573207772697465";

console.log(message, (new Buffer(message, 'utf8')).toString('hex'));

// crypto
true && (function() {
    console.log(' == crypto == ');

    var digest = require('crypto').createHash('sha256').update(message, 'utf8').digest('hex');

    console.log(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest.toString('hex'));
    // alert(digest.toString('hex'));

    console.log(digest.toString('base64'));
    // alert(digest.toString('base64'));
})();

// crypto from buffer (from hex)
true && (function() {
    console.log(' == crypto from buffer == ');

    var digest = require('crypto').createHash('sha256').update(new Buffer(messageHex, 'hex')).digest('hex');

    console.log(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest.toString('hex'));
    // alert(digest.toString('hex'));

    console.log(digest.toString('base64'));
    // alert(digest.toString('base64'));
})();

// sha256 using createHash
true && (function() {
    console.log(' == createHash == ');
    var hash = createHash('sha256');
    hash.update(message, 'utf8', 'utf8');

    var digest = hash.digest();

    console.log(digest.toString('hex') == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest.toString('hex') == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest.toString('hex'));
    // alert(digest.toString('hex'));

    console.log((new Buffer(digest, 'hex').toString('base64')));
    // alert((new Buffer(digest, 'hex').toString('base64')));
})();

// sha256 using createHash, directly from digest
true && (function() {
    console.log(' == createHash == ');
    var hash = createHash('sha256');
    hash.update(message, 'utf8', 'utf8');

    var digest = hash.digest('hex');

    console.log(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");
    // alert(digest == "1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370");

    console.log(digest);
    // alert(digest);

    console.log((new Buffer(digest, 'hex').toString('base64')));
    // alert((new Buffer(digest, 'hex').toString('base64')));
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
