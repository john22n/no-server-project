angular.module('netTube').directive('homeDirective', function () {
    return {
        templateUrl: 'homePage/homeView.html',
        restrict: 'E',
        scope: {},
        link: function (scope, element, attributes) {

        },
        controller: function ($scope, youtubeService) {

            $scope.search = function (query) {
                youtubeService.search(query).then(function (response) {
                    $scope.searchResults = response.data.items;
                })
            };

            //Preset Vidoes on home screen

            youtubeService.defaultVideos().then(function (response) {
                $scope.defaultVideos = response.data.items.map(function (cur) {
                    return {
                        id: cur.id.videoId,
                        image: cur.snippet.thumbnails.high.url,
                        title: cur.snippet.title
                    }
                });
            })
        }
    }
})