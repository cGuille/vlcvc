VLCVC
=====

Add speech recognition to the VLC web interface, in order to command VLC with your voice.

Early stage of development.

Two modules to implement :

### VLC HTTP API
Check out [that file](https://github.com/cGuille/vlcvc/blob/master/vlcvc-plugin/vlc-http-api.js). It is a JS API to send HTTP requests on the VLC HTTP interface. Command such as "play/pause", "stop" etc. need to be implemented.

### The [vlcvc](https://github.com/cGuille/vlcvc/blob/master/vlcvc-plugin/vlcvc.js) program. Listen for audio commands with [annyang](https://github.com/TalAter/annyang), then run a corresponding function that call the VLC HTTP API.

If VLC is installed on a Ubuntu-like distribution, you can install this plugin by running the following commands from the project directory:
```bash
npm install
sudo ./install.bash
```

use
```bash
sudo ./uninstall.bash
```
to uninstall.
