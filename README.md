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

## Correct Signature
Chrome / FireFox / Android >= 4.4
```
GXbCcMHqF6FCEBTGRazDJmFY4fCExg5nFeyKYl/0kvk=
```

## Android 4.2
```
qEOkAKvuTACzZFsAlIQjAKr4wQCs300A3z6qAiYHoAA=
```

## Android 4.3
```
qEOkAKvuTACzZFsAlIQjAKr4wQCs300A3z6qAiYHoAA=
```

