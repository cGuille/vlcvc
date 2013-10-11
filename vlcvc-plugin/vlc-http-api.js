(function ($) {
    'use strict';

    if (!$) {
        console.error('error: jQuery could not be found');
        return;
    }

    window.VLCVC = window.VLCVC || {};
    var exports = window.VLCVC.HTTP = {};

    exports.playPause = playPause;

    function playPause(callback) {
        throw new Error('Not implemented yet');
    }
}(window.jQuery));
