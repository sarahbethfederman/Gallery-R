/**
 * Created by Sarah on 11/20/14.
 * Main js file
 * uses Browserify for requiring modules (instead of requireJS like on the last project)
 */

var main = {
  'dataLoader': require('./dataLoader.js'),
  'buttons': require('./buttons.js'),
  'introLoader': require('./introLoader.js'),
  'mainLoop': require('./mainLoop.js'),
  'slideNav': require('./slideNav.js'),
  'init': function() {
    console.log("inited!");
    var self = this;

    // HOOK UP DOM
    var introVid = document.querySelector('[rel="js-intro-vid"'),
        introProgress = document.querySelector('[rel="js-intro-progress"'),
        skipBtn = document.querySelector('[rel="js-skip-intro"'),
        introContainer = document.querySelector('.intro-container');

    self.slideNav.navContainer = document.querySelector('slide-container');
    self.mainLoop.videoContainer = document.querySelector('.video-container');
    self.mainLoop.contentContainer = document.querySelector('.content-container');

    // START THE INTRO
    self.introLoader.init(introContainer, introVid, introProgress, skipBtn);

    // PRELOAD DATA from Firebase
    self.dataLoader.loadData();
  }
};

// init on document ready
document.addEventListener("DOMContentLoaded", function(event) {
  main.init();
});
