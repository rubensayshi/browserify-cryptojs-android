# Build
```
npm install -g cordova;
npm install;

# cd node_modules/sjcl && ./configure --with-sha512 --with-hmac --with-pbkdf2 --with-bitArray && make && cd ../..;

browserify www/index.js -o www/build.js;
```

# Run in Browser
```
./node_modules/serve/bin/serve ./www
```

# Run Cordova IOS
```
cordova run ios
```

# Run Cordova Android
```
cordova run android
```

## Correct SHA256 of 'synchronous write'
```
1e0a06bb7cb5399c5389c14ff182b748834f9aedbcfd5bb467e12bdde24a5370
HgoGu3y1OZxTicFP8YK3SINPmu28/Vu0Z+Er3eJKU3A=
```

## Correct Signature
Chrome / FireFox / Android >= 4.4
```
72a60b59de459f00054cde9d9ce5ae00ff4ae400b0190d001971a66eafec2e00
cqYLWd5FnwAFTN6dnOWuAP9K5ACwGQ0AGXGmbq/sLgA=
```

## Android 4.2
```
72a60b59de459f00054cde9d9ce5ae00ff4ae400b0190d001971a66eafec2e00
cqYLWd5FnwAFTN6dnOWuAP9K5ACwGQ0AGXGmbq/sLgA=
```
