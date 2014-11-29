// Loads the intro sequence

var mainLoop = require('./mainLoop.js');
var buttons = require('./buttons.js');
var videoModule = require('./video.js');

var introLoader = {
    'init': function(container, video, progressBar, skipBtn) {
        var self = this;

        // set up the skip button
        buttons.makeButton(skipBtn, self.endIntro);

        // loader animation
        video.addEventListener('progress', function () {
            videoModule.loaderStart(container);
        });

        video.addEventListener('canplay', function () {
            videoModule.loaderEnd(container);
        });

        // progress bar length corresponds to timeupdate function
        video.addEventListener('timeupdate', function() {
            videoModule.progressBar(video, progressBar);
        });

        // when the video ends
        video.addEventListener('ended', self.endIntro);
    },
    'endIntro': function() {
        // fade out the whole intro container

        // then start the main loop
    }
};

module.exports = introLoader;