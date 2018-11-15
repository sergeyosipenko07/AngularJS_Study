(function () {
    'use strict';
    angular.module('app')
        .value('model', {
            "user": "Sergey",
            "userPhoto": "images/VZ.jpg",
            "items": [
                {"action": "Estimate", "done": false},
                {"action": "Create", "done": false},
                {"action": "Edit", "done": false},
                {"action": "Delete", "done": true}

            ],
        });
}) ();
