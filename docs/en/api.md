## Modules

<dl>
<dt><a href="#module_wireless-monitor">wireless-monitor</a></dt>
<dd><p>Wireless Monitor class</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Monitor">Monitor</a></dt>
<dd><p>Class representing your Monitor</p>
</dd>
</dl>

<a name="module_wireless-monitor"></a>

## wireless-monitor
Wireless Monitor class

<a name="Monitor"></a>

## Monitor
Class representing your Monitor

**Kind**: global class  

* [Monitor](#Monitor)
    * [new Monitor([url], api_key, monitor_key)](#new_Monitor_new)
    * [.auth()](#Monitor+auth) ⇒ <code>Promise</code>
    * [.send([payload])](#Monitor+send) ⇒ <code>Promise</code>
    * [.refreshToken()](#Monitor+refreshToken) ⇒ <code>Promise</code>

<a name="new_Monitor_new"></a>

### new Monitor([url], api_key, monitor_key)
Creates a Monitor instance capable of communicate with a Wireless Monitor
server located at the url you specify.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [url] | <code>String</code> | <code>http://localhost:8000</code> | URL of the server |
| api_key | <code>String</code> |  | This value specifies the user. Must be in UUID format. |
| monitor_key | <code>String</code> |  | This value specifies the device. Must be in UUID format. |

<a name="Monitor+auth"></a>

### monitor.auth() ⇒ <code>Promise</code>
Authentication method, use as the initial process.

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  
<a name="Monitor+send"></a>

### monitor.send([payload]) ⇒ <code>Promise</code>
Sends a payload to the server.

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [payload] | <code>Object</code> | <code>{}</code> | Object representing the data you wish to send |

<a name="Monitor+refreshToken"></a>

### monitor.refreshToken() ⇒ <code>Promise</code>
After an amount of specific time or number of requests, you need
to refresh your token.

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  
