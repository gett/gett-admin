angular.module('gett.components.main', [])
    .directive('gettMain', gettMain);

function gettMain() {
    return {
        restrict: 'E',
        template: require('./templates/main.jade'),
        link: function(scope, elem, attr) {}
    }
}