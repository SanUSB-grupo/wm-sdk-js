import moxios from 'moxios'
import sinon from 'sinon'
import { equal, ok } from 'assert'
import Monitor from '../'

const options = {
    api_key: 'fa3076b3-ddb3-421f-a0ed-303a8dd04fb8',
    monitor_key: 'e98fb37c-e79c-4a80-ac7f-b8fbdb82d48b',
    url: 'http://wireless-monitor.local'
}

describe('Wireless Monitor API', () => {
    let onFulfilled
    let onRejected

    beforeEach(() => {
        moxios.install()
        onFulfilled = sinon.spy()
        onRejected = sinon.spy()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('should authenticate', (done) => {
        moxios.stubRequest(`${options.url}/api/authenticate`, {
            status: 200,
            response: {
                token: 'your-secret-token'
            }
        })

        var monitor = new Monitor(options)
        monitor.auth().then(onFulfilled)

        moxios.wait(function () {
            equal(onFulfilled.getCall(0).args[0].data.token, 'your-secret-token')
            equal(monitor.token, 'your-secret-token')
            done()
        })
    })

    it('should send data', (done) => {
        const data = {
            value: 25
        }
        moxios.stubRequest(`${options.url}/api/send`, {
            status: 200,
            response: {
                data
            }
        })
        var monitor = new Monitor(options)
        monitor.token = 'your-secret-token'
        monitor.send(data).then(onFulfilled);

        moxios.wait(function () {
            equal(onFulfilled.getCall(0).args[0].data.data.value, 25)
            done()
        })
    })

    it('should refresh the token', (done) => {
        moxios.stubRequest(`${options.url}/api/refresh-token`, {
            status: 200,
            response: {
                token: 'another-secret-token'
            }
        })
        var monitor = new Monitor(options)
        monitor.token = 'your-secret-token'
        monitor.refreshToken().then(onFulfilled);

        moxios.wait(function () {
            equal(onFulfilled.getCall(0).args[0].data.token, 'another-secret-token')
            equal(monitor.token, 'another-secret-token')
            done()
        })
    })

    it('should throw exception when send without token', (done) => {
        var monitor = new Monitor(options)
        monitor.send().catch(onRejected)
        moxios.wait(function () {
            ok(onRejected.getCall(0).args[0].message.startsWith('Token not defined'))
            done()
        })
    })

    it('should throw exception when refresh without token', (done) => {
        var monitor = new Monitor(options)
        monitor.refreshToken().catch(onRejected)
        moxios.wait(function () {
            ok(onRejected.getCall(0).args[0].message.startsWith('Token not defined'))
            done()
        })
    })
})
