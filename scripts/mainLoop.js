// Main loop

var Slide = require('./slide.js');  // Slide module
var dataLoader = require('./dataLoader.js');
var videoModule = require('./video.js');

var loop = {
    'videoData': undefined,
    'slides': [],
    'currentSlide': undefined,
    'videoContainer': undefined,
    'contentContainer': undefined,
    'init': function() {
        var self = this,
            video = self.videoContainer.querySelector('video'),
            progressBar = self.videoContainer.querySelector('progress');

        // display the video
        self.videoContainer.style.display = "block";

        // display the content
        self.contentContainer.style.display = "block";

        self.initEvents(video, progressBar);

        // get the video data. When loaded, create the slides
        dataLoader.getData(self.createSlides.bind(this));
    },
    'createSlides': function(vidData) {
        this.videoData = vidData;

        // create a slide for each video
        for (video in this.videoData) {
            if (this.videoData.hasOwnProperty(video)) {
                var slide = new Slide(this.videoData[video], this.videoContainer, this.contentContainer);
                slide.key = video;  // store the access key as the json object name
                this.slides.push(slide);
            }
        }

        // start looping
        this.startLoop();
    },
    'initEvents': function(video, progressBar) {
        // loader animation
        var self = this;

        video.addEventListener('loadstart', function () {
            videoModule.loaderStart(self.videoContainer);
            console.log("loader started");
        });

        video.addEventListener('loadeddata', function () {
            videoModule.loaderEnd(self.videoContainer);
            console.log("loader ended");
        });

        // progress bar length corresponds to timeupdate function
        video.addEventListener('timeupdate', function() {
            videoModule.progressBar(video, progressBar);
        });

        // once the video has ended, loop to the next one
        video.addEventListener('ended', function() {
            self.next();
        });
    },
    'startLoop': function() {
        // set the currentSlide to the beginning
        this.currentSlide = 0;

        // cycle the current slide in
        this.next();
    },
    'next': function(target) {
        console.log(this.currentSlide);

        // once at the end, wrap around to loop
        if (this.currentSlide > this.slides.length-1) {
            this.currentSlide = 0;
        }

        if (target) {                               // if navigating to a specific slide  TO DO: check for typeof number
            this.slides[target].cycleIn();
            // set current slide to the target
            this.currentSlide = this.slides[target];
        } else {                                        // else, go to the next slide
            this.slides[this.currentSlide].cycleIn();
        }

        // iterate to next slide
        this.currentSlide++;
    }
};

module.exports = loop;