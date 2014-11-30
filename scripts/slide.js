// slide module

var buttonModule = require('./buttons.js');
var videoModule = require('./video.js');

var Slide = function() {
    var Slide = function(videoData, container, contentContainer) {           // videoData is JSON object
        this.posterUrl = videoData['posterUrl'];
        this.bioPic = videoData['bioPic'];
        this.bioCopy = videoData['bioCopy'];
        this.interviewee = videoData['interviewee'];
        this.interviewer = videoData['interviewer'];
        this.container = container;
        this.contentContainer = contentContainer;
        this.videoEl = container.querySelector('.video-loop');

        if (videoData['videoUrl']) {
            this.videoUrl = videoData['videoUrl'];
        }
    };


    Slide.prototype.cycleIn = function() {              // start this slide
        // set up the video
        if (this.videoUrl) {
            this.videoEl.src = this.videoUrl;                  // if there is a video, play it
            this.videoEl.play();
        } else {
            console.log("poster");
            console.log(this.container);
            this.videoEl.removeAttribute('src');               // else, display the poster
            //this.videoEl.duration = 45;
            this.videoEl.poster = this.posterUrl;
        }

        // set up the header
        this.createHeader();
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

    Slide.prototype.createHeader = function() {
        var header = this.contentContainer.querySelector('header');

        // set the bio picture
        header.querySelector('.bio__pic').src = this.bioPic;

        // set the bio copy
        header.querySelector('.bio__copy').innerHTML = this.bioCopy;
    }

    return Slide;
}();


module.exports = Slide;