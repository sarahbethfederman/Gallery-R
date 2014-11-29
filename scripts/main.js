/**
 * Created by Sarah on 11/20/14.
 * Main js file
 * uses Browserify for requiring modules (instead of requireJS)
 */

var controller = {
  'dataLoader': require('./dataLoader.js'),
  'buttons': require('./buttons.js'),
  'introLoader': require('./introLoader.js'),
  'mainLoop': require('./mainLoop.js'),
  'init': function() {
    console.log("inited!");
    var self = this;

    var introVid = document.querySelector('[rel="js-intro-vid"'),
        introProgress = document.querySelector('[rel="js-intro-progress"'),
        skipBtn = document.querySelector('[rel="js-skip-intro"'),
        introContainer = document.querySelector('.intro-container');

    // start the intro sequence
    self.introLoader.init(introContainer, introVid, introProgress, skipBtn);

    // Load the data from Firebase
    self.dataLoader.getData(function(data) {
      // when done loading, set up the mainLoop
    });

  }
};


document.addEventListener("DOMContentLoaded", function(event) {
  controller.init();
});
