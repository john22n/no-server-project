angular.module("netTube").directive("browseDirective", function () {
    return {
        templateUrl: 'browsePage/browseView.html',
        restrict: 'E',
        scope: {},
        link: function (scope, element, attrs) {

        },

        controller: function ($scope, youtubeService) {
            $scope.search = function (query) {
                youtubeService.browseSearch(query).then(function (response) {
                    $scope.searchResults = response.data.items.map(function (cur) {
                        return {
                            id: cur.id.videoId,
                            image: cur.snippet.thumbnails.high.url,
                            title: cur.snippet.title
                        }
                    });
                })
            }
        }
    }
})
