/**
 * Created by Sarah on 11/24/14.
 */

var videoLoader =  {
    'urls': [],
    'currentVideo': undefined,
    "video": document.querySelector('video'),
    "source": document.querySelector('video source'),
    "progress": document.querySelector('progress'),
    'init': function(data) {
        var self = this;

        // set current video to 0
        self.currentVideo = 0;

        // start the progress bar
        self.progressBar();

        //  store the urls for all of the loaded videos
        for (vid in data) {
            if (data.hasOwnProperty(vid)) {     // protect against prototype chain search
                self.urls.push(data[vid]['videoUrl']);
                console.log(data[vid]['videoUrl']);
            }
        }

        // when the video ends, start the loop
        self.video.addEventListener('ended', self.loop.bind(self), false);
    },
    'progressBar': function() {
        var self = this;

        // progress bar length corresponds to timeupdate function
        self.video.addEventListener('timeupdate', function() {

            // get the percentage of video played
            var percentage = (self.video.currentTime / self.video.duration) * 100;

            // set the progress bar value
            self.progress.value = percentage;
        });
    },
    'loop': function() {
        // TO DO: ADD LOADER EVENT
        var self = this;
        console.log("looped");

        // change the source of the video to the next url
        self.video.src = self.urls[self.currentVideo];

        // increment the current video
        self.currentVideo++;

        // when it hits the ends of the array, reset
        if (self.currentVideo > self.urls.length) {
            self.currentVideo = 0;
        }
    }
};

module.exports = videoLoader;