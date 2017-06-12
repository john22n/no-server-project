angular.module("netTube").directive("videoViewDirective", function () {
    return {
        templateUrl: "viewVideo/viewVideoView.html",
        restrict: 'E',
        scope: {},
        link: function (scope, element, attrs) {

        },

        controller: function ($scope, $stateParams, ngYoutubeEmbedService) {
            // controller: function($scope, $stateParams, $sce) {

            $scope.videoId = $stateParams.videoId;
            var youtubeWatchLink = 'https://www.youtube.com/watch?v=';
            $scope.video = youtubeWatchLink + $scope.videoId;


            //experimenting still doenst work
            $scope.playVideo = function () {
                var player = ngYoutubeEmbedService.getPlayerById($stateParams.videoId);
                console.log("player", player)
                console.log("PlayVideo,", player.playVideo)
                player.playVideo()

            };
            $scope.showVideoInfo = function () {
                var player = ngYoutubeEmbedService.getPlayerById($stateParams.videoId);
                player.showVideoInfo();
            };
            $scope.stateChanged = function (e) {
                console.log(e);
            }

        }

    }
});