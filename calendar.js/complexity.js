var plato = require('plato');
 
var files = [
  'lib/calendar.js'
];
 
var outputDir = './report';
// null options for this example
var options = {
  title: 'Report for calendar'
};
 
var callback = function (report){
// once done the analysis,
// execute this
};
 
plato.inspect(files, outputDir, options, callback);