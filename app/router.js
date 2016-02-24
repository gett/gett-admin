gett.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('main', {
            template: require('./components/main/templates/main.jade')
        })
        .state('main.home', {
            url: '/home',
            views: {
                'pageLeft': {
                    template: '<gett-menu></gett-menu>'
                },
                'pageRight': {
                    template: '<gett-home></gett-home>'
                }
            }
        })
        .state('main.users', {
            url: '/users',
            views: {
                'pageLeft': {
                    template: '<gett-menu></gett-menu>'
                },
                'pageRight': {
                    template: '<gett-users></gett-users>'
                }
            }
        })
        .state('main.user', {
            url: '/users/:userid',
            views: {
                'pageLeft': {
                    template: '<gett-menu></gett-menu>'
                },
                'pageRight': {
                    template: '<gett-user></gett-user>'
                }
            }
        })
        .state('main.payments', {
            url: '/payments',
            views: {
                'pageLeft': {
                    template: '<gett-menu></gett-menu>'
                },
                'pageRight': {
                    template: '<gett-payments></gett-payments>'
                }
            }
        })
        .state('main.sharesFiles', {
            url: '/shares-files',
            views: {
                'pageLeft': {
                    template: '<gett-menu></gett-menu>'
                },
                'pageRight': {
                    template: '<gett-shares-files></gett-shares-files>'
                }
            }
        });

}]);