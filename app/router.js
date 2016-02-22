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
                    template: require('./components/main/templates/page-left.jade')
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
                    template: require('./components/main/templates/page-left.jade')
                },
                'pageRight': {
                    template: '<gett-users></gett-users>'
                }
            }
        })
        .state('main.payments', {
            url: '/payments',
            views: {
                'pageLeft': {
                    template: require('./components/main/templates/page-left.jade')
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
                    template: require('./components/main/templates/page-left.jade')
                },
                'pageRight': {
                    template: '<gett-shares-files></gett-shares-files>'
                }
            }
        });

}]);