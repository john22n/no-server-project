angular.module('netTube').service('youtubeService', function ($http) {

    this.search = function (search) {
        return $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyAuKx2isTGEPyTlujGAAcPwKPp-4p8fxvI',
                type: 'video',
                maxResults: '6',
                part: 'id,snippet',
                q: search
            }

        })
            .then(function (response) {
                console.log(response);
                return response;
            }).catch(function (err) {
                console.log('error:', err);
                return err
            })
    }

    this.defaultVideos = function () {
        return $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyAuKx2isTGEPyTlujGAAcPwKPp-4p8fxvI',
                type: 'video',
                maxResults: '12',
                part: 'id, snippet',
                q: 'cieon movie trailers'
                //channelId: 'movieclipsTRAILERS'
            }
        }).then(function (response) {
            console.log(response);
            return response;
        })
    }

    this.browseSearch = function (search) {

        return $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyAuKx2isTGEPyTlujGAAcPwKPp-4p8fxvI',
                type: 'video',
                maxResults: '12',
                part: 'id, snippet',
                q: search
            }
        })
            .then(function (response) {
                return response;

            }).catch(function (err) {
                return err;
            })
    }


});