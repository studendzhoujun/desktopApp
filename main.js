/*
 * @Author: zhouJun 
 * @Date: 2018-05-09 16:27:09 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-05-09 16:28:12
 */

'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');


var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 360
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});

