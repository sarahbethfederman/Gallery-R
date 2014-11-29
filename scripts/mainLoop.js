// Main loop

var Slide = require('./slide.js');  // Slide module
var dataLoader = require('./dataLoader.js');

var loop = {
    'videoData': undefined,
    'slides': [],
    'currentSlide': undefined,
    'init': function() {
        var self = this;

        // get the video data
        // when loaded, create the slides
        self.videoData = dataLoader.getData(self.createSlides);

        self.currentSlide = 0;
    },
    'createSlides': function() {
        // create a slide for each video
        for (video in this.videoData) {
            if (this.videoData.hasOwnProperty(video)) {     // don't iterate over prototype chain
                var slide = new Slide(video);
                this.slides.push(slide);
            }
        }
    },
    'startLoop': function() {
        slides[currentSlide].cycleIn();
    },

    'next': function(target) {
        if (target) {   // to do: check for typeof number
            slides[target].cycleIn();
        } else {
            slides[this.currentSlide].cycleIn();
        }
    }
};

module.exports = loop;