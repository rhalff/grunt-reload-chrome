/*
 * grunt-reload-chrome
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Rob Halff
 * Licensed under the MIT license.
 */

'use strict';

var Chrome = require('chrome-remote-interface');

module.exports = function(grunt) {

  function chrome(options, done) {

    var current_url, i;

    var conf = {
      host: options.host,
      port: options.port,
      chooseTab: function (tabs) {

        for(i = 0; i < tabs.length; i++) {
          if(options.match.test(tabs[i].title)) {
            current_url = tabs[i].url;
            return i;
          }
        }

        grunt.log.error();
        grunt.fail.warn('Failed to match tab ' + options.match);
        done(false);
      }
    };

    Chrome(conf, function (chrome) {

      chrome.on('Page.loadEventFired', function() {
        grunt.log.ok();
        chrome.close();
        done();
      });

      chrome.Network.enable();
      chrome.Page.enable();
      chrome.Page.navigate({ 'url': current_url || options.url });

    }).on('error', function () {

      grunt.log.error();
      grunt.fail.warn('Cannot connect to Chrome');

      done(false);

    });

  }

  grunt.registerMultiTask('reload', 'Reload chrome.', function() {

    var done = this.async();

    var options = this.options({
      url: undefined,
      match: undefined,
      port: 9222,
      host: 'localhost'
    });

    if(!options.match) {
      grunt.fail.warn('You need to specify a title to match');
      return false;
    }

    grunt.verbose.writeflags(options, 'Options');
    chrome(options, done);

  });

};
