angular.module('netTube').directive('navDirective', function () {
    return {
        templateUrl: 'navbar/navView.html',
        restrict: 'E',
        scope: {
            // lesson : '=',
            // dayAlert: '&'
        },
        link: function (scope, element, attributes) {


        },
        controller: function ($scope, youtubeService) {

        }
    }

});