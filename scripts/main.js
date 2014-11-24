/**
 * Created by Sarah on 11/20/14.
 * Main js file
 * uses Browserify for requiring modules (instead of requireJS)
 */

var dataLoader = require('./dataLoader.js');
var videoLoader = require('./videoLoader.js');
var $ = require('jquery');

$(document).ready(function() {
  console.log("inited!");

  var vidData;

  dataLoader.getData(function(data) {
    // once the data has loaded, assign it to vidData
    vidData = data;
    // initialize the videoloader with the loaded data
    videoLoader.init(vidData);
  });

});



