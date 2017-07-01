# Wireless Monitor SDK for JavaScript

[![Build Status](https://travis-ci.org/SanUSB-grupo/wm-sdk-js.svg?branch=master)](https://travis-ci.org/SanUSB-grupo/wm-sdk-js)

This package is a SDK (Software Development Kit) for JavaScript
(Browser and NodeJS) to use with
[Wireless Monitor](https://github.com/SanUSB-grupo/wireless-monitor/) app.

The SDK API is based on Promises. Read more about that at:

* <https://github.com/mzabriskie/axios>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

## Installation

```bash
npm install --save wireless-monitor
```

## Usage

```js
var Monitor = require('wireless-monitor')

const monitor = new Monitor({
    api_key: 'fa3076b3-ddb3-421f-a0ed-303a8dd04fb8',
    monitor_key: 'e98fb37c-e79c-4a80-ac7f-b8fbdb82d48b',
    url: 'http://localhost:8000'
})

monitor.auth()
    .then((response) => {
        return monitor.send({value: 25})
    })
    .then((response) => {
        console.log(response.data)
        console.log(response.status)
    })
    .catch((error) => {
        console.error(error)
    })
```

## Documentation API

<https://SanUSB-grupo.github.io/wm-sdk-js/en/api.html>
