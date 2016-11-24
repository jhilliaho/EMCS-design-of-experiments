var plato = require('plato');
 
var files = [
  'index.js',
  'columnify.js',
  'utils.js'
];
 
var outputDir = './report';
// null options for this example
var options = {
  title: 'Report for columnify'
};
 
var callback = function (report){
// once done the analysis,
// execute this
};
 
plato.inspect(files, outputDir, options, callback);