# grunt-reload-chrome [![Build Status](https://secure.travis-ci.org/rhalff/grunt-reload-chrome.png?branch=master)](http://travis-ci.org/rhalff/grunt-reload-chrome)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-reload-chrome --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-reload-chrome');
```

## Reload Chrome task
_Run this task with the `grunt reload` command._

Task targets and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

This grunt tasks makes use of the [chrome-remote-interface][1] package.

So first Chrome needs to be started with the `--remote-debugging-port=<port>` option to
enable the [Remote Debugging Protocol][2], for example:

    google-chrome --remote-debugging-port=9222

### Usage Examples

```js
 reload: {
  homepage: {
    options: {
      url: 'http://localhost:5000/'
      match: /Chi/
    }
  },
  current: {
    options: {
      match: /Chi/
    }
  },
  eval: {
    options: {
      host: '192.168.1.23',
      port: 1024,
      match: /Chi/,
      scriptEvaluateOnLoad: 'alert("hi!")'
    }
  }
}
```

With `match` you specify the title to match, it can be a regular expression or just an exact string. The tab must already be opened within your browser.

If you specify an `url` the location will be set to that exact url, specify nothing and the current page will be reloaded.

`host` and `port` can be used if your remote debugging port is something else than the default of `9222`.

If you feel adventurous you can also use the `scriptEvaluateOnLoad` option to run a script each time the tab is reloaded, which might come in handy to automate stuff even more.

> Note: The detected tab **will not** reload if it has DevTools opened at the moment of reload.

Resources
---------

- [Chrome Remote Interface][1]
- [Chrome Developer Tools: Remote Debugging Protocol v1.0][2]

[1]: https://github.com/cyrus-and/chrome-remote-interface
[2]: https://developers.google.com/chrome-developer-tools/docs/protocol/1.0/

## Release History
---

 * 2013-12-01   v0.1.4   Fix RegExp matching
 * 2013-11-23   v0.1.3   expose scriptEvaluateOnLoad & proper tagging.
 * 2013-11-23   v0.1.2   Forgot.
 * 2013-11-23   v0.1.1   Forgot.
 * 2013-11-22   v0.1.0   Initial version.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rhalff/grunt-reload-chrome/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

