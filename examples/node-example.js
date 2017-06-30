/*
 * Execute:
 *      npm run build
 * Configure your api_key, monitor_key and url.
 * Then to run example:
 *      node examples/node-example.js
 */
var Monitor = require('../dist/wireless-monitor.cjs.js')

const monitor = new Monitor({
    api_key: '<YOUR_API_KEY>',
    monitor_key: '<YOUR_MONITOR_KEY>',
    url: 'http://localhost:8000'
})

monitor.auth().then((response) => {
    return monitor.send({value: 25})
}).then((response) => {
    console.log(response.status)
    console.log(response.data)
}).catch((error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.status)
        console.log(error.response.data)
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
    }
    console.log(error.config)
})
