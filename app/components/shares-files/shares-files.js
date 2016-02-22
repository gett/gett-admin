angular.module('gett.components.sharesFiles', [])
    .directive('gettSharesFiles', gettSharesFiles);

function gettSharesFiles() {
    return {
        restrict: 'E',
        template: require('./templates/shares-files.jade'),
        link: function(scope, elem, attr) {
            scope.test = 'shares-files page';
        }
    }
}