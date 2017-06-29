# Wireless Monitor SDK for JavaScript

This package is a SDK (Software Development Kit) for JavaScript for
[Wireless Monitor](https://github.com/SanUSB-grupo/wireless-monitor/) app.

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
        console.log(response)
    })
```
