gett.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


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
                    template: '<gett-user></gett-user>',
                    resolve: {
                        selectedUser: ['$stateParams', 'usersService', function ($stateParams, usersService) {
                            return usersService.getUser($stateParams.userid)
                                .then(function (response) {
                                    return response.user;
                                })
                                .catch(function (err) {
                                    console.error(err);
                                    return false;
                                });
                        }],
                        products: ['usersService', function(usersService) {
                            return usersService.getProductsList()
                                .then(function(response) {
                                    return response.products;
                                })
                                .catch(function(err) {
                                    console.error(err);
                                    return false;
                                })
                        }]
                    },
                    controller: ['$scope', 'selectedUser', 'products', function ($scope, selectedUser, products) {
                        $scope.selectedUser = selectedUser;
                        $scope.products = products;
                    }]
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
    $urlRouterProvider.otherwise('/home');

}]);