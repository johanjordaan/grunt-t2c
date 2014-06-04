//
// grunt-t2c
// https://github.com/johanjordaan/grunt-t2c
//
// Copyright (c) 2014 Johan Jordaan
// Licensed under the MIT license.

var t2c;

t2c = require('t2c');

module.exports = function(grunt) {
  return grunt.registerMultiTask('t2c', 'Grunt t2c(text2code) plugin.', function() {

    var options = this.options({
      output_language : "coffee"
    });

    var files = [];
    console.log(options);
    return this.files.forEach(function(f) {
      var new_src, src;
      src = grunt.file.read(f.src[0]);
      new_src = t2c.compile(src, f.src[0], options);
      grunt.file.write(f.dest, new_src);
      return grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
