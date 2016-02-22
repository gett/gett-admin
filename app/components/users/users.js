angular.module('gett.components.users', [])
    .directive('gettUsers', gettUsers);

function gettUsers() {
    return {
        restrict: 'E',
        template: require('./templates/users.jade'),
        link: function(scope, elem, attr) {
            scope.test = 'users page';
        }
    }
}