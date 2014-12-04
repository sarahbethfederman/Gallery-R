/**
 * Created by Sarah on 11/29/14.
 */
"use strict";

var buttons = require('./buttons.js');

var slideNav = {
    'names': [],
    'slides': [],
    'currentSlide': undefined,
    'navContainer': undefined,
    'init': function(data, callback) {
        var self = this;

        for (var key in data) {
           if (data.hasOwnProperty(key)) {
               self.names.push(key);
           }
        }

        self.names.forEach(function(element, index, array) {
            var li = document.createElement("li");
            li.classList.add('slide');
            li.setAttribute("data-target-video", index);
            li.innerHTML = array[index];

            self.slides.push(li);

            self.navContainer.appendChild(li);

            buttons.makeButton(li, function() {
                var target = li.getAttribute('data-target-video');
                callback(target);
            });
        });

        self.initEvents();
    },
    'initEvents': function() {
        var self = this;
        var viewAll = document.querySelector('.view-all');
        var overlay = document.createElement('div');
        overlay.classList.add("overlay");

        buttons.makeButton(viewAll, function() {
            self.navContainer.classList.toggle('viewing-all');

            if (self.navContainer.classList.contains('viewing-all')) {
                viewAll.innerHTML = "Close";
            } else {
                viewAll.innerHTML = "View all videos";
            }
        });

    },
    'move': function(target, currentSlide) {
        var self = this;
        var slide = self.navContainer.querySelector('.slide');   // first instance of slide
        var translatePx = slide.offsetWidth * target / 2;

        if (target - currentSlide > 0) {    // positive means moving forward
            translatePx = -translatePx;
        }
        self.navContainer.style.transform = 'translate(' + translatePx +'px,' + -1 * (slide.offsetHeight / 2) + 'px)';
    }
};

module.exports = slideNav;