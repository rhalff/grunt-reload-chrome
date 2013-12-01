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

    var current_url, i, m, title;

    var conf = {
      host: options.host,
      port: options.port,
      chooseTab: function (tabs) {

        for(i = 0; i < tabs.length; i++) {

          title = tabs[i].title;
          m = options.match instanceof RegExp ?
            options.match.test(title) :
            options.match === title;

          if(m) {
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

      if(options.url) {
        chrome.Page.navigate({ url: options.url });
      } else {

        var opts = {};
        opts.ignoreCache = !!options.ignoreCache;
        if(options.scriptToEvaluateOnLoad) {
          opts.scriptToEvaluateOnLoad = options.scriptToEvaluateOnLoad
        }
        chrome.Page.reload(opts);
      }

    }).on('error', function (err) {

      grunt.fail.warn(err);

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
