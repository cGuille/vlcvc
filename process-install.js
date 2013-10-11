#!/usr/bin/env node

(function () {
    'use strict';

    if (4 !== process.argv.length) {
        throw new Error('args error');
    }

    var VLC_INDEX_FILE = process.argv[2],
        VLC_JS_VLCVC_DIRECTORY = process.argv[3];

    // Ordered list of files to inject as JS script from the vlcvc directory
    var JS_FILES_TO_INJECT = [
        'annyang.min.js',
        'vlc-http-api.js',
        'vlcvc.js'
    ].map(function (fileName) {
        return VLC_JS_VLCVC_DIRECTORY + '/' + fileName;
    });

    try {
        var fs = require('fs'),
            cheerio = require('cheerio');
    } catch (error) {
        console.error(error.message);
        console.error('Did you run `npm install`?');
        process.exit(1);
    }

    var indexHtml = fs.readFileSync(VLC_INDEX_FILE),
        $ = cheerio.load(indexHtml.toString());

    var headElt = $('head');

    JS_FILES_TO_INJECT.forEach(function (filePath) {
        headElt.append('<script src="' + filePath + '"></script>');
    });

    fs.writeFileSync(VLC_INDEX_FILE, $.html());
}());
