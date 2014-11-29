// Main loop

var Slide = require('./slide.js');  // Slide module

var loop = {
    'videoData': undefined,
    'slides': [],
    'init': function(data) {
        this.videoData = data;

        // create a slide for each video
        for (video in this.videoData) {
            var slide = new Slide();
            this.slides.push(slide);
        }
    },
    'startLoop': function() {
        // hide the intro container



    },

    'next': function() {

    }
};

module.exports = loop;