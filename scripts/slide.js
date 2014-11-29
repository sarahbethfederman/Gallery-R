// slide module

var buttonModule = require('./buttons.js');

var Slide = function() {
    var Slide = function(container, overlay, video) {           // constructor takes a JSON object
        this.posterUrl = video['posterUrl'];
        this.bioPic = video['bioPic'];
        this.bioCopy = video['bioCopy'];

        if (video['videoUrl']) {
            this.videoUrl = video['videoUrl'];
        }
    };


    Slide.prototype.cycleIn = function() {              // start this slide
        // set up the video

        // set up the video control buttons

        // set up the header
    };

    Slide.prototype.cycleOut = function(callback) {     // end & move this slide out
        // stop the video

        // remove the header

        // animate everything out

        // if there's a callback, execute it
        if (callback) {
            callback();
        }
    };

    Slide.prototype.hideExtras = function() {           // hide the overlay content
        // fade out the overlay div
    };

    return Slide;
}();


module.exports = Slide;