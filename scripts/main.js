/**
 * Created by Sarah on 11/20/14.
 * Main js file
 * uses Browserify for requiring modules (instead of requireJS)
 */

var $ = require('jquery');

var controller = {
  'dataLoader': require('./dataLoader.js'),
  'videoLoader': require('./videoLoader.js'),
  'initVideos': function(data) {
    // initialize the video loader
    this.videoLoader.init(data);
  },
  'init': function() {
    console.log("inited!");
    var self = this;

    // load the data w/ dataLoader module (from Firebase)
    self.dataLoader.getData(function(data) {
      // when done, initialize the videoLoader with the data
      self.initVideos(data);
    });
  }
};

$(document).ready(function() {
  controller.init();
});



