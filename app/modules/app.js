angular.module('APP', ['ui.router', 'oc.lazyLoad'])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(false);
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/feed');
        $stateProvider
            .state('feed', {
                url: '/feed',
                templateUrl: 'modules/feed/feed.template.html',
                controller: "feedCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'feedModule',
                                files: ['modules/feed/feed.module.js']
                            }
                        )
                    }
                }
            })
            .state('timeline', {
                url: '/timeline',
                templateUrl: 'modules/timeline/timeline.template.html',
                controller: "timelineCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'timelineModule',
                                files: ['modules/timeline/timeline.module.js']
                            }
                        )
                    }
                }
            })
    }])
