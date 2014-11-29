/**
 * Collection of video events
 * Created by Sarah on 11/28/14.
 */


var video = {
    'progressBar': function(video, progressBar) {
        // get the percentage of video played
        var percentage = (video.currentTime / video.duration) * 100;

        // set the progress bar value
        progressBar.value = percentage;
    },
    'loaderStart': function(root) {
        // create the loader div
        var loader = document.createElement('div');
        loader.classList.add('loader');

        // fill it with the loader SVG
        loader.innerHTML = '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="80px" height="80px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg>';
        root.appendChild(loader);
        console.log(loader);
    },
    'loaderEnd': function(root) {
        var loader = root.querySelector('.loader');

        // fade out the loader
        loader.classList.add('fade-out');

        // remove it from the DOM
        // FIX: FIRES TOO SOON
        // root.removeChild(loader);
    }
};

module.exports = video;