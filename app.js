angular.module('netTube', ['ui.router', 'ngYoutubeEmbed'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/')

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-directive></home-directive>'

            })
            .state('play', {
                url: '/play/:videoId',
                template: '<video-view-directive></video-view-directive>'

            })

            .state('browse', {
                url: '/browse',
                template: '<browse-directive></browse-directive>'
            })


    });