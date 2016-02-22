angular.module('gett.components.payments', [])
    .directive('gettPayments', gettPayments);

function gettPayments() {
    return {
        restrict: 'E',
        template: require('./templates/payments.jade'),
        link: function(scope, elem, attr) {
            scope.test = 'payments page';
        }
    }
}