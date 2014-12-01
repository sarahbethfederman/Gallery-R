/**
 * Created by Sarah on 11/29/14.
 */
"use strict";

var slideNav = {
    'names': [],
    'navContainer': undefined,
    'init': function(data) {
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
        });
    },
    'move': function(offset) {

    }
};

module.exports = slideNav;