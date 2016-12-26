// (function() {
//     'use strict';
//     var WebApp = angular.module('WebApp', ['firebase']);
//     WebApp.controller('ContactController', ContactController);

//     /** ngInject */
//     function ContactController() {
//         var defaultApp = firebase.initializeApp(defaultAppConfig);

//         console.log(defaultApp.name); // "[DEFAULT]"
//         // var ref = firebase.database().ref().child("data");
//         // // download the data into a local object
//         // var syncObject = $firebaseObject(ref);
//         // // synchronize the object with a three-way data binding
//         // // click on `index.html` above to see it used in the DOM!
//         // syncObject.$bindTo($scope, "data");


//         var vm = this;
//         vm.blogPost = {

//         }
//         vm.contactDetails = [{
//             "login": "dattatrey93",
//             "avatar_url": "https://avatars.githubusercontent.com/u/13445492?v=3",
//             "url": "https://api.github.com/users/dattatrey93",
//             "followers_url": "https://api.github.com/users/dattatrey93/followers",
//             "following_url": "https://api.github.com/users/dattatrey93/following{/other_user}",
//             "organizations_url": "https://api.github.com/users/dattatrey93/orgs",
//             "repos_url": "https://api.github.com/users/dattatrey93/repos",
//             "events_url": "https://api.github.com/users/dattatrey93/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/dattatrey93/received_events",
//             "type": "User",
//             "name": "Narottam Dattatrey",
//             "company": null,
//             "blog": null,
//             "location": "Bangalore",
//             "email": "dattatrey93@gmail.com",
//             "hireable": true,
//             "bio": "love to code",
//             "public_repos": 9,
//             "public_gists": 0,
//             "followers": 4,
//             "following": 4
//         }, {
//             "login": "mangalaman93",
//             "avatar_url": "https://avatars.githubusercontent.com/u/2542340?v=3",

//             "url": "https://api.github.com/users/mangalaman93",

//             "followers_url": "https://api.github.com/users/mangalaman93/followers",
//             "following_url": "https://api.github.com/users/mangalaman93/following{/other_user}",

//             "repos_url": "https://api.github.com/users/mangalaman93/repos",
//             "type": "User",
//             "name": "Aman Mangal",
//             "company": "Georgia Tech",
//             "blog": "http://amanmangal.me/",
//             "location": "Atlanta",
//             "email": "mangalaman93@gmail.com",
//             "hireable": true,
//             "bio": null,
//             "public_repos": 51,
//             "public_gists": 10,
//             "followers": 19,
//             "following": 32,

//         }, {
//             "login": "amanmangal",
//             "avatar_url": "https://avatars.githubusercontent.com/u/4545503?v=3",
//             "url": "https://api.github.com/users/amanmangal",
//             "followers_url": "https://api.github.com/users/amanmangal/followers",
//             "following_url": "https://api.github.com/users/amanmangal/following{/other_user}",
//             "repos_url": "https://api.github.com/users/amanmangal/repos",
//             "name": "Aman Mangal",
//             "company": "Chronus Corporation",
//             "blog": "www.cse.iitb.ac.in/~amanmangal",
//             "location": "Chennai",
//             "email": "aman.mangal@chronus.com",
//             "hireable": null,
//             "bio": null,
//             "followers": 0,
//             "following": 0,
//         }, {
//             "login": "ashish",
//             "avatar_url": "https://avatars.githubusercontent.com/u/35478?v=3",
//             "url": "https://api.github.com/users/ashish",
//             "subscriptions_url": "https://api.github.com/users/ashish/subscriptions",
//             "organizations_url": "https://api.github.com/users/ashish/orgs",
//             "repos_url": "https://api.github.com/users/ashish/repos",
//             "events_url": "https://api.github.com/users/ashish/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/ashish/received_events",
//             "type": "User",
//             "name": 'mohit',
//             "company": null,
//             "blog": null,
//             "location": null,
//             "email": null,
//             "hireable": null,
//             "bio": null,
//             "followers": 3,
//             "following": 0,
//         }];

//         console.log(firebase);
//     };

// })();







// var favMovies = new Firebase('https://idata-63d87.firebaseio.com');

// function saveToList(event) {
//     if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
//         var movieName = document.getElementById('movieName').value.trim();
//         if (movieName.length > 0) {
//             saveToFB(movieName);
//         }
//         document.getElementById('movieName').value = '';
//         return false;
//     }
// };

// function saveToFB(movieName) {
//     // this will save data to Firebase
//     favMovies.push({
//         name: movieName
//     });
// };

// function refreshUI(list) {
//     var lis = '';
//     for (var i = 0; i < list.length; i++) {
//         lis += '<li data-key="' + list[i].key + '">' + list[i].name + ' [' + genLinks(list[i].key, list[i].name) + ']</li>';
//     };
//     document.getElementById('favMovies').innerHTML = lis;
// };

// function genLinks(key, mvName) {
//     var links = '';
//     links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
//     links += '<a href="javascript:del(\'' + key + '\',\'' + mvName + '\')">Delete</a>';
//     return links;
// };

// function edit(key, mvName) {
//     var movieName = prompt("Update the movie name", mvName); // to keep things simple and old skool :D
//     if (movieName && movieName.length > 0) {
//         // build the FB endpoint to the item in movies collection
//         var updateMovieRef = buildEndPoint(key);
//         updateMovieRef.update({
//             name: movieName
//         });
//     }
// }

// function del(key, mvName) {
//     var response = confirm("Are certain about removing \"" + mvName + "\" from the list?");
//     if (response == true) {
//         // build the FB endpoint to the item in movies collection
//         var deleteMovieRef = buildEndPoint(key);
//         deleteMovieRef.remove();
//     }
// }

// function buildEndPoint(key) {
//     return new Firebase('https://idata-63d87.firebaseio.com/movies/' + key);
// }
// // this will get fired on inital load as well as when ever there is a change in the data
// favMovies.on("value", function(snapshot) {
//     var data = snapshot.val();
//     var list = [];
//     for (var key in data) {
//         if (data.hasOwnProperty(key)) {
//             name = data[key].name ? data[key].name : '';
//             if (name.trim().length > 0) {
//                 list.push({
//                     name: name,
//                     key: key
//                 })
//             }
//         }
//     }
//     // refresh the UI
//     refreshUI(list);
// });

var movieFire = angular.module("WebApp", ["firebase"]);

function MainController($scope, $firebase) {
    $scope.favMovies = $firebase(new Firebase('https://idata-63d87.firebaseio.com'));
    $scope.movies = [];
    $scope.favMovies.$on('value', function() {
        $scope.movies = [];
        var mvs = $scope.favMovies.$getIndex();
        for (var i = 0; i < mvs.length; i++) {
            $scope.movies.push({
                name: $scope.favMovies[mvs[i]].name,
                key: mvs[i]
            });
        };
    });
    $scope.saveToList = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var mvName = $scope.mvName.trim();
            if (mvName.length > 0) {
                $scope.favMovies.$add({
                    name: mvName
                });
                movieName.value = ''; //movieName is the ID of  input box - Angular rocks!
            }
        }
    }
    $scope.edit = function(index) {
        var mv = $scope.movies[index];
        var newName = prompt("Update the movie name", mv.name); // to keep things simple and old skool :D
        if (newName && newName.length > 0) {
            // build the FB endpoint to the item in movies collection
            var updateMovieRef = buildEndPoint(mv.key, $firebase);
            updateMovieRef.$set({
                name: newName
            });
        }
    }
    $scope.del = function(index) {
        var mv = $scope.movies[index];
        var response = confirm("Are certain about removing \"" + mv.name + "\" from the list?");
        if (response == true) {
            // build the FB endpoint to the item in movies collection
            var deleteMovieRef = buildEndPoint(mv.key, $firebase);
            deleteMovieRef.$remove();
        }
    }
}

function buildEndPoint(key, $firebase) {
    return $firebase(new Firebase('https://idata-63d87.firebaseio.com/movies/' + key));
}
