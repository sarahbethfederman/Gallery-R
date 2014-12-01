// slide module
"use strict";

var buttonModule = require('./buttons.js');
var videoModule = require('./video.js');

var Slide = function() {
    var Slide = function(videoData, container, contentContainer) {           // videoData is JSON object
        this.fillerUrl = "assets/videos/filler.mp4";                    // path to filler video
        this.posterUrl = videoData['posterUrl'];                        // path to poster URL
        this.bioPic = videoData['bioPic'];                              // path the bio avatar
        this.bioCopy = videoData['bioCopy'];                            // biography text/html string
        this.interviewee = videoData['interviewee'];                    // name of interviewee
        this.interviewer = videoData['interviewer'];                    // who interviewed them
        this.container = container;                                     // video container div
        this.contentContainer = contentContainer;                       // content container div
        this.videoEl = container.querySelector('.video-loop');          // <video> element

        if (videoData['videoUrl']) {
            this.videoUrl = videoData['videoUrl'];
        }
    };


    Slide.prototype.cycleIn = function() {              // start this slide
        // if there is a video, play it
        if (this.videoUrl) {
            this.videoEl.src = this.videoUrl;
            this.videoEl.style.opacity = '.7';
            this.videoEl.style.width = '100%';
            this.videoEl.classList.add('blur');
            this.videoEl.play();
        } else {
            // else, dim and play the filler
            this.videoEl.src = this.fillerUrl;
            this.videoEl.style.opacity = '.2';
            this.videoEl.style.width = 'auto';
            this.videoEl.classList.add('blur');
            this.videoEl.play();

        }

        // set up the header
        this.createHeader();
    };

    Slide.prototype.cycleOut = function(callback) {     // end & move this slide out
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
        if (this.bioPic) {
            header.querySelector('.bio__pic').classList.remove('hide');
            header.querySelector('.bio__pic').classList.add('fade-in');
            header.querySelector('.bio__pic').src = this.bioPic;

        } else {
            header.querySelector('.bio__pic').classList.remove('fade-in');
            header.querySelector('.bio__pic').classList.add('hide');
        }

        // set the bio title
        header.querySelector('.bio__title').innerHTML = this.interviewee;

        // set the bio copy
        header.querySelector('.bio__copy').innerHTML = this.bioCopy;
    };

    return Slide;
}();


module.exports = Slide;