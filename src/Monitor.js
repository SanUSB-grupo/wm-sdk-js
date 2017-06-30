var axios = require('axios')

export default class Monitor {

    /**
     * Creates a Monitor instance capable of communicate with a Wireless Monitor
     * server located at the url you specify.
     * @param  {String} [url='http://localhost:8000'] URL of the server
     * @param  {String} api_key                This value specifies the user. Must be a UUID.
     * @param  {String} monitor_key            This value specifies the device. Must be a UUID.
     * @return {undefined}
     */
    constructor({
        url = 'http://localhost:8000',
        api_key,
        monitor_key
    }) {
        this.api_key = api_key
        this.monitor_key = monitor_key
        this.url = url
    }

    /**
     * Authentication method, use as the initial process.
     * @return {Promise}
     */
    auth() {
        return axios.post(`${this.url}/api/authenticate`, {
            api_key: this.api_key,
            monitor_key: this.monitor_key
        }).then((response) => {
            if (response.status === 200 && response.data.token) {
                this.token = response.data.token
            }
            return response
        })
    }

    /**
     * Sends a payload to the server.
     * @param  {Object} [payload={}] [description]
     * @return {Promise}
     */
    send(payload = {}) {
        try {
            this._checkToken()
            return axios.post(`${this.url}/api/send`, {
                data: JSON.stringify(payload)
            }, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
        } catch (err) {
            return Promise.reject(err);
        }
    }

    /**
     * After an amount of specific time or number of requests, you need
     * to refresh your token.
     * @return {Promise}
     */
    refreshToken() {
        try {
            this._checkToken()
            return axios.get(`${this.url}/api/refresh-token`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }).then((response) => {
                if (response.status === 200 && response.data.token) {
                    this.token = response.data.token
                }
                return response
            })
        } catch (err) {
            return Promise.reject(err);
        }
    }

    _checkToken() {
        if (!this.token) {
            throw new Error('Token not defined. You need to call auth method first.');
        }
    }
}
