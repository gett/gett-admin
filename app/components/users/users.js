require('./styles/users.css');

angular.module('gett.components.users', [])
    .directive('gettUsers', gettUsers);

function gettUsers() {
    return {
        restrict: 'E',
        template: require('./templates/users.jade'),
        link: function(scope, elem, attr) {
            scope.user = {
                email: 't1@t1.com'
            };
            scope.tempUsers = [
                {
                    email: 't1@t1.com',
                    type: 'Free',
                    expires: 0,
                    shares: '50',
                    usedstorage: 2732210,
                    userid: 'user-C9sNYRhf68ZWRQk93RuFksZbHYUU8XFcSlSq3-'
                },
                {
                    email: 't2@t2.comt2@t2.comt2@t2.com',
                    type: 'Premium+',
                    expires: 1456322494000,
                    shares: '500',
                    usedstorage: 12732210,
                    userid: 'user-C9sNYRhf68ZWRQk93RuFksZbHYUU8XFcSlSq4-'
                },
                {
                    email: 't2@t2.com',
                    type: 'Free',
                    expires: 1556322494000,
                    shares: '100',
                    usedstorage: 22732210,
                    userid: 'user-C9sNYRhf68ZWRQk93RuFksZbHYUU8XFcSlSq5-'
                }
            ];
            scope.options = ['first', 'second', 'third option'];
            scope.searchUser = function(data) {
                console.log(data);
            };
            scope.orderByEmail = function() {
                scope.orderEmail = !scope.orderEmail;
            };
        }
    }
}