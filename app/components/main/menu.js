require('./styles/menu.css');

angular.module('gett.components.menu', [])
    .directive('gettMenu', gettMenu);

function gettMenu() {
    return {
        restrict: 'E',
        template: require('./templates/menu.jade'),
        link: function(scope, elem, attr) {}
    }
}