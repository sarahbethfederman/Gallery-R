/**
 * Created by Sarah on 11/20/14.
 * Main js file
 * uses Browserify for requiring modules (instead of requireJS)
 */

var firebase = require('./dataLoader.js');
var videoLoader = require('./videoLoader.js');
var $ = require('jquery');

$(document).ready(function() {
  console.log("inited!");
  console.log("with watchify!");
  //console.log(firebase);
});



