(function() {
  // This file was generate from a template using t2c
 // Source file : examples/surnames.t2c 
 // ;
  var template;

  template = function(ctx) {
    var output, surname, surnames, _i, _len, _results;
    output = '';
    surnames = ['Jordaan', 'Evert'];
    _results = [];
    for (_i = 0, _len = surnames.length; _i < _len; _i++) {
      surname = surnames[_i];
      _results.push(output += "Hallo from  " + ctx.name);
    }
    return _results;
  };

  module.exports = template;

}).call(this);
