angular.module('cltre').factory('passwordsService', function () {

    var service = {

        model: {

            "category": "password",
            "title": "Strong Passwords",
            "description": "Use strong passwords to stay secure",
            "illustration": "",
            "content": [
                {
                    "type": "text",
                    "title": "Strong Passwords",
                    "text": "Secure passwords are hard to guess",
                    "illustration": "",
                    "sortOrder": 1
                },
                {
                    "type": "text",
                    "title": "Strong Passwords",
                    "text": "Build a strong password using a sentence. ",
                    "illustration": "",
                    "sortOrder": 2
                },
                {
                    "type": "text",
                    "title": "Strong Passwords",
                    "text": "Add symbols, capital letters and numbers to increase the complexity.",
                    "illustration": "",
                    "sortOrder": 3
                },
                {
                    "type": "text",
                    "title": "Strong Passwords",
                    "text": "Never share your password. Not even with security people or support staff.",
                    "illustration": "",
                    "sortOrder": 4
                },
                {
                    "type": "assessment",
                    "title": "Strong Passwords",
                    "question": "A Strong Password is easy to remember",
                    "answers": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "illustration": "",
                    "sortOrder": 5
                }
            ]

        }

    };

    return service;
});
