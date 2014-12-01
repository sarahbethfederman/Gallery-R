/**
 * Created by Sarah on 11/29/14.
 */
"use strict";

var buttons = require('./buttons.js');

var slideNav = {
    'names': [],
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

            self.navContainer.appendChild(li);

            buttons.makeButton(li, function() {
                var target = li.getAttribute('data-target-video');
                callback(target);
            });
        });

        self.initEvents();
    },
    'initEvents': function() {
        this.names.forEach(function(element) {

        });
    },
    'move': function(offset) {

    }
};

module.exports = slideNav;