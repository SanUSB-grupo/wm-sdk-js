# Wireless Monitor SDK para JavaScript

Este pacote é um SDK (Software Development Kit) para JavaScript
(Navegador e NodeJS) para usar com o aplicativo
[Wireless Monitor](https://github.com/SanUSB-grupo/wireless-monitor/).

A API do SDK é baseada em Promises. Leia mais sobre o assunto em:

* <https://github.com/mzabriskie/axios>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

## Instalação

```bash
npm install --save wireless-monitor
```

## Exemplo de uso

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
