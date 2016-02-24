require('./styles/header.css');

angular.module('gett.components.header', [])
    .directive('gettHeader', gettHeader);

function gettHeader() {
    return {
        restrict: 'E',
        template: require('./templates/header.jade'),
        link: function(scope, elem, attr) {}
    }
}