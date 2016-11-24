var plato = require('plato');
 
var files = [
  'lib/index.js',
  'lib/utils.js'
];
 
var outputDir = './report';
// null options for this example
var options = {
  title: 'Report for cli-table'
};
 
var callback = function (report){
// once done the analysis,
// execute this
};
 
plato.inspect(files, outputDir, options, callback);