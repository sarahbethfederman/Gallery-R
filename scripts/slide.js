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
        this.header = contentContainer.querySelector('header');

        if (videoData['videoUrl']) {
            this.videoUrl = videoData['videoUrl'];
        }
    };


    Slide.prototype.cycleIn = function() {              // start this slide

        // set up the header
        this.createHeader();

        //// animate stuff in
        //this.contentContainer.classList.remove('fade-out');
        //this.contentContainer.classList.add('fade-in');

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

    };

    Slide.prototype.cycleOut = function(callback) {     // end & move this slide out
        //// animate everything out
        //this.contentContainer.classList.remove('fade-in');
        //this.contentContainer.classList.add('fade-out');

        // if there's a callback, execute it
        if (callback) {
            callback();
        }
    };

    Slide.prototype.createHeader = function() {
        // set the bio picture
        if (this.bioPic) {
            this.header.querySelector('.bio__pic').classList.add('show');
            this.header.querySelector('.bio__pic').classList.remove('hide');
            this.header.querySelector('.bio__pic').src = this.bioPic;
        } else {
            this.header.querySelector('.bio__pic').classList.remove('show');
            this.header.querySelector('.bio__pic').classList.add('hide');
        }

        // set the bio title
        this.header.querySelector('.bio__title').innerHTML = this.interviewee;

        // set the bio copy
        this.header.querySelector('.bio__copy').innerHTML = this.bioCopy;
    };

    return Slide;
}();


module.exports = Slide;