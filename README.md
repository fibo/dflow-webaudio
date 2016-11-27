# dflow-webaudio

> sounds good

Provides [WebAudio] related functions to [dflow].

## funcs

```javascript
const funcs = require('dflow-webaudio').funcs
```

### audioContext

It returns a single *AudioContext*. It is implemented as a singleton, so the function can be called
many times but will return always the same context.

### getSoundFile

Retrieves a sound file from a URL and loads it. See [supported media formats][supported-media-formats].

[WebAudio]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API "WebAudio"
[dflow]: http://g14n.info/dflow "dflow"
[supported-media-formats]: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats
