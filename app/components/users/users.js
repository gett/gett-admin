require('./styles/users.css');

angular.module('gett.components.users', [])
    .directive('gettUsers', ['usersService', gettUsers]);

function gettUsers(usersService) {
    return {
        restrict: 'E',
        template: require('./templates/users.jade'),
        link: function(scope, elem, attr) {
            scope.user = { // TODO: hardcoded
                email: 't1@t1.com'
            };
            scope.searchOptions = [ // TODO: hardcoded
                'first',
                'second',
                'third option'
            ];
            scope.users = null;
            scope.clearSearchData = function() {
                scope.searchData = null;
                scope.statusMessage = '';
            };
            scope.clearTable = function() {
                scope.users = null;
            };
            scope.searchUser = function(data) {
                if(!data)
                    return;
                if(data && !data.email)
                    return;
                scope.showProgressCilcular = true;
                scope.statusMessage = '';
                usersService.getUsers(data.email)
                    .then(function(response) {
                        scope.users = response.users;
                        if(!response.users.length)
                            scope.statusMessage = 'Users not found';
                        scope.showProgressCilcular = false;
                    })
                    .catch(function(err) {
                        console.error(err);
                        scope.statusMessage = 'Something went wrong, watch console log';
                        scope.showProgressCilcular = false;
                    });
            };
            scope.orderByEmail = function() {
                scope.orderEmail = !scope.orderEmail;
            };
        }
    }
}