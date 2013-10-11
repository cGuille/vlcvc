#!/usr/bin/env bash

VLC_HTTP_DIRECTORY="/usr/share/vlc/lua/http/"
VLC_INDEX_FILE="$VLC_HTTP_DIRECTORY/index.html"
VLC_INDEX_BACKUP_FILE="$VLC_INDEX_FILE.bak"
VLC_JS_VLCVC_RELATIVE_DIRECTORY="js/plugins/vlcvc"
VLC_JS_VLCVC_DIRECTORY="$VLC_HTTP_DIRECTORY/$VLC_JS_VLCVC_RELATIVE_DIRECTORY"
VLCVC_PLUGIN_DIRECTORY="vlcvc-plugin"

FS_ERROR_MSG="You may need to be root in order to perform this action…"

# Back up the index.html file we'll change
if [ ! -f "$VLC_INDEX_BACKUP_FILE" ]; then
    cp "$VLC_INDEX_FILE" "$VLC_INDEX_BACKUP_FILE"
    if [[ "$?" != "0" ]]; then
        echo "$FS_ERROR_MSG"
        exit 1
    fi
fi

# Create the plugins/vlcvc directory
if [ ! -f "$VLC_JS_VLCVC_DIRECTORY" ]; then
    mkdir -p "$VLC_JS_VLCVC_DIRECTORY"
    if [[ "$?" != "0" ]]; then
        echo "$FS_ERROR_MSG"
        exit 1
    fi
fi

cp "$VLCVC_PLUGIN_DIRECTORY"/* "$VLC_JS_VLCVC_DIRECTORY"

node "./process-install.js" "$VLC_INDEX_FILE" "$VLC_JS_VLCVC_RELATIVE_DIRECTORY"
