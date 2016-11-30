var plato = require('plato');
 
var files = [
  'index.js'
];
 
var outputDir = './plato_output';
// null options for this example
var options = {
  title: 'No title'
};
 
var callback = function (report){
// once done the analysis,
// execute this
console.log("Plato done")
};
 
plato.inspect(files, outputDir, options, callback);