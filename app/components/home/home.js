require('./styles/home.css');

angular.module('gett.components.home', [])
    .directive('gettHome', gettHome);

function gettHome() {
    return {
        restrict: 'E',
        template: require('./templates/home.jade'),
        link: function(scope, elem, attr) {
            scope.signin = function(data) {
                console.log(data);
            };
        }
    }
}