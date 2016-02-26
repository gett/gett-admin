require('./styles/user.css');

angular.module('gett.components.users.user', [])
    .directive('gettUser', gettUser);

function gettUser() {
    return {
        restrict: 'E',
        template: require('./templates/user.jade'),
        link: function(scope, elem, attr) {
            scope.selectedUserStats = getStats(scope.selectedUser);
            scope.settings = {
                email: scope.selectedUser.email,
                fullname: scope.selectedUser.fullname,
                type: scope.selectedUser.type,
                expires: scope.selectedUser.payment.expires != 0 ? new Date(scope.selectedUser.payment.expires * 1000) : undefined
            };
            scope.saveSettings = function(settings) {
                console.log(settings);
            };

            // Tables orders
            scope.tempPayments = [ // TODO: hardcoded
                {
                    id: 'GET111111-1111-111111',
                    when: 1456322378000,
                    expires: 1556322378000,
                    amount: '25$',
                    product: 'Premium+ Annual'
                },
                {
                    id: 'KEE111111-1111-111112',
                    when: 1456322378000,
                    expires: 1756322378000,
                    amount: '25$',
                    product: 'Premium+ Monthly'
                },
                {
                    id: 'KEE111111-1111-111111',
                    when: 1456322378000,
                    expires: 1656322378000,
                    amount: '25$',
                    product: 'Premium Annual'
                }
            ];
            scope.sharesOrderCriteria = 'id';
            scope.reverseSharesOrder = false;
            scope.sharesOrder = function(orderBy) {
                if(scope.sharesOrderCriteria == orderBy)
                    scope.reverseSharesOrder = !scope.reverseSharesOrder;
                scope.sharesOrderCriteria = orderBy;
            };
            scope.reversePaymentsOrder = false;
            scope.paymentsOrder = function() {
                scope.reversePaymentsOrder = !scope.reversePaymentsOrder;
            };
        }
    }
}

function getStats(user) {
    var totalFiles = 0;
    user.shares.forEach(function(share) {
        totalFiles += share.fileseed || 0;
    });
    return {
        totalFiles: totalFiles,
        usedStoragePercentage : Math.round(user.storage.used / (user.storage.extrastorage || 0 + user.storage.storage) * 100),
        dailyTrafficPercentage : Math.round((user.dailytraffic / user.limits.traffic) * 100)
    };
}