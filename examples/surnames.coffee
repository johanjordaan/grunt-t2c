`// This file was generate from a template using t2c
 // Source file : examples/surnames.t2c 
 // `
template = (ctx) ->
  output = ''
  surnames = ['Jordaan','Evert']
  for surname in surnames 
    output += "Hallo from  #{ctx.name}"
module.exports = template