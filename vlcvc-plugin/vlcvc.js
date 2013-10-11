(function (annyang, httpCommands) {
    'use strict';

    if (!annyang) {
        console.log('Speech recognition does not seem to be supported in your browser.');
        return;
    }

    if (!httpCommands) {
        throw new Error('failed to include the VLC HTTP API module');
    }

    var commands = {
        'play': playPause,
        'pause': playPause
    };

    function playPause() {
        // Call httpCommands.playPause(callback);
        console.log('play/pause command');
    }

    annyang.init(commands);
    annyang.start();
}(window.annyang, window.VLCVC.HTTP));
