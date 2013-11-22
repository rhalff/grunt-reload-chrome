# grunt-config [![Build Status](https://secure.travis-ci.org/rhalff/grunt-reload-chrome.png?branch=master)](http://travis-ci.org/rhalff/grunt-reload-chrome)

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
}
```

With `match` you specify the title to match, it can be a regular expression or just an exact string. The tab must already be opened within your browser.

If you specify an `url`, the location will be set to that exact url. If you
specify nothing the url will be replaced with itself causing it to reload the page.

## Release History
---

 * 2013-11-22   v0.1.0   Initial version.
