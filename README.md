# grunt-t2c ![Travis CI Status](https://api.travis-ci.org/johanjordaan/grunt-t2c.svg?branch=master "Travis CI Status")

> Grunt t2c(text2code) plugin.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-t2c --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-t2c');
```

## The "t2c" task

### Overview
In your project's Gruntfile, add a section named `t2c` to the data object passed into `grunt.initConfig()`.

```coffee
grunt.initConfig
  t2c:
    options: 
      output_language:'coffee'  
    build:
      expand: true,
      cwd: './examples',
      src: ['**/*.t2c'],
      dest: './examples',
      ext: '.coffee'
      extDot : 'last'   
        
```

### Options

#### options.output_language
Type: `String`
Default value: `coffee`

This specifies the languege you want the template code in. Supported values are:
* coffee


### Usage Examples


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

