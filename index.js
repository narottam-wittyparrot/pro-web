(function() {
    'use strict';
    var WebApp = angular.module('WebApp', ['firebase']);
    WebApp.controller('ContactController', ContactController);

    /** ngInject */
    function ContactController() {
        var defaultApp = firebase.initializeApp(defaultAppConfig);

        console.log(defaultApp.name); // "[DEFAULT]"
        // var ref = firebase.database().ref().child("data");
        // // download the data into a local object
        // var syncObject = $firebaseObject(ref);
        // // synchronize the object with a three-way data binding
        // // click on `index.html` above to see it used in the DOM!
        // syncObject.$bindTo($scope, "data");


        var vm = this;
        vm.blogPost = {

        }
        vm.contactDetails = [{
            "login": "dattatrey93",
            "avatar_url": "https://avatars.githubusercontent.com/u/13445492?v=3",
            "url": "https://api.github.com/users/dattatrey93",
            "followers_url": "https://api.github.com/users/dattatrey93/followers",
            "following_url": "https://api.github.com/users/dattatrey93/following{/other_user}",
            "organizations_url": "https://api.github.com/users/dattatrey93/orgs",
            "repos_url": "https://api.github.com/users/dattatrey93/repos",
            "events_url": "https://api.github.com/users/dattatrey93/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dattatrey93/received_events",
            "type": "User",
            "name": "Narottam Dattatrey",
            "company": null,
            "blog": null,
            "location": "Bangalore",
            "email": "dattatrey93@gmail.com",
            "hireable": true,
            "bio": "love to code",
            "public_repos": 9,
            "public_gists": 0,
            "followers": 4,
            "following": 4
        }, {
            "login": "mangalaman93",
            "avatar_url": "https://avatars.githubusercontent.com/u/2542340?v=3",

            "url": "https://api.github.com/users/mangalaman93",

            "followers_url": "https://api.github.com/users/mangalaman93/followers",
            "following_url": "https://api.github.com/users/mangalaman93/following{/other_user}",

            "repos_url": "https://api.github.com/users/mangalaman93/repos",
            "type": "User",
            "name": "Aman Mangal",
            "company": "Georgia Tech",
            "blog": "http://amanmangal.me/",
            "location": "Atlanta",
            "email": "mangalaman93@gmail.com",
            "hireable": true,
            "bio": null,
            "public_repos": 51,
            "public_gists": 10,
            "followers": 19,
            "following": 32,

        }, {
            "login": "amanmangal",
            "avatar_url": "https://avatars.githubusercontent.com/u/4545503?v=3",
            "url": "https://api.github.com/users/amanmangal",
            "followers_url": "https://api.github.com/users/amanmangal/followers",
            "following_url": "https://api.github.com/users/amanmangal/following{/other_user}",
            "repos_url": "https://api.github.com/users/amanmangal/repos",
            "name": "Aman Mangal",
            "company": "Chronus Corporation",
            "blog": "www.cse.iitb.ac.in/~amanmangal",
            "location": "Chennai",
            "email": "aman.mangal@chronus.com",
            "hireable": null,
            "bio": null,
            "followers": 0,
            "following": 0,
        }, {
            "login": "ashish",
            "avatar_url": "https://avatars.githubusercontent.com/u/35478?v=3",
            "url": "https://api.github.com/users/ashish",
            "subscriptions_url": "https://api.github.com/users/ashish/subscriptions",
            "organizations_url": "https://api.github.com/users/ashish/orgs",
            "repos_url": "https://api.github.com/users/ashish/repos",
            "events_url": "https://api.github.com/users/ashish/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ashish/received_events",
            "type": "User",
            "name": 'mohit',
            "company": null,
            "blog": null,
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "followers": 3,
            "following": 0,
        }];

        console.log(firebase);
    };

})();
