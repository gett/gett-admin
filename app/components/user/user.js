require('./styles/user.css');

angular.module('gett.components.users.user', [])
    .directive('gettUser', ['$state', gettUser]);

function gettUser($state) {
    return {
        restrict: 'E',
        template: require('./templates/user.jade'),
        link: function(scope, elem, attr) {
            scope.tempShares = [
                {
                    "userid":"user-C9sNYRhf68ZWRQk93RuFksZbHYUU8XFcSlSq3-",
                    "created":1455303463,
                    "sharename":"5X6Hv0Y2",
                    "sizeCache":2732210,
                    "fileseed":1,
                    "downloads":0,
                    "files": [],
                    "readystate":"remote",
                    "createdAt":"2016-02-12T18:57:43.031Z",
                    "updatedAt":"2016-02-12T18:57:46.263Z",
                    "id":"56be2b274bf47b0362b476a0",
                    "owner":
                    {
                        "fullname":"t1",
                        "anon":false
                    }
                },
                {"userid":"user-V3PYXOH2JClKYiafHAjTVY4N8Z6Jg1fvOoP29Pig-","created":1455210470,"sharename":"2LytozX2","sizeCache":166873647,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-11T17:07:50.941Z","updatedAt":"2016-02-11T17:07:51.981Z","id":"56bcbfe6fcb1562e75109b9c","files":[{"created":1455210471,"createdAt":"2016-02-11T17:07:51.976Z","downloads":82,"fileid":"0","filename":"Карты с новыми привязками в gif часть 3.zip","readystate":"uploading","share":{"userid":"user-V3PYXOH2JClKYiafHAjTVY4N8Z6Jg1fvOoP29Pig-","created":1455210470,"sharename":"2LytozX2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-11T17:07:50.941Z","updatedAt":"2016-02-11T17:07:50.941Z","id":"56bcbfe6fcb1562e75109b9c"},"sharename":"2LytozX2","size":166873647,"type":"application/zip","updatedAt":"2016-02-24T13:37:00.182Z","id":"56bcbfe7393ca9ee78fb4125"}],"owner":{"fullname":"Alex Digger"}},
                {"userid":"user-V3PYXOH2JClKYiafHAjTVY4N8Z6Jg1fvOoP29Pig-","created":1455210470,"sharename":"2LytozX2","sizeCache":166873647,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-11T17:07:50.941Z","updatedAt":"2016-02-11T17:07:51.981Z","id":"56bcbfe6fcb1562e75109b9c","files":[{"created":1455210471,"createdAt":"2016-02-11T17:07:51.976Z","downloads":82,"fileid":"0","filename":"Карты с новыми привязками в gif часть 3.zipКарты с новыми привязками в gif часть 3.zip","readystate":"uploading","share":{"userid":"user-V3PYXOH2JClKYiafHAjTVY4N8Z6Jg1fvOoP29Pig-","created":1455210470,"sharename":"2LytozX2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-11T17:07:50.941Z","updatedAt":"2016-02-11T17:07:50.941Z","id":"56bcbfe6fcb1562e75109b9c"},"sharename":"2LytozX2","size":166873647,"type":"application/zip","updatedAt":"2016-02-24T13:37:00.182Z","id":"56bcbfe7393ca9ee78fb4125"}],"owner":{"fullname":"Alex Digger"}},
                {
                    "userid":"user-C9sNYRhf68ZWRQk93RuFksZbHYUU8XFcSlSq3-",
                    "created":1455303463,
                    "sharename":"5X6Hv0Y2",
                    "sizeCache":2732210,
                    "fileseed":1,
                    "downloads":0,
                    "files": [],
                    "readystate":"remote",
                    "createdAt":"2016-02-12T18:57:43.031Z",
                    "updatedAt":"2016-02-12T18:57:46.263Z",
                    "id":"56be2b274bf47b0362b476a0",
                    "owner":
                    {
                        "fullname":"t1",
                        "anon":false
                    }
                },
                {"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323305,"sharename":"1tWRyHY2","sizeCache":2171590,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:15:05.387Z","updatedAt":"2016-02-24T14:15:06.779Z","id":"56cdbae959638ea312782798","files":[{"created":1456323305,"createdAt":"2016-02-24T14:15:05.675Z","downloads":0,"fileid":"0","filename":"space-09(copy).jpg","readystate":"ready","share":{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323305,"sharename":"1tWRyHY2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:15:05.387Z","updatedAt":"2016-02-24T14:15:05.387Z","id":"56cdbae959638ea312782798"},"sharename":"1tWRyHY2","size":2171590,"type":"image/jpeg","updatedAt":"2016-02-24T14:15:06.773Z","id":"56cdbae90c5578b01243d320"}]},{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323301,"sharename":"3KDRyHY2","sizeCache":1804567,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:15:01.904Z","updatedAt":"2016-02-24T14:15:03.438Z","id":"56cdbae52606e5193e813754","files":[{"created":1456323302,"createdAt":"2016-02-24T14:15:02.352Z","downloads":0,"fileid":"0","filename":"output_0FJwBz (copy).gif","readystate":"ready","share":{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323301,"sharename":"3KDRyHY2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:15:01.904Z","updatedAt":"2016-02-24T14:15:01.904Z","id":"56cdbae52606e5193e813754"},"sharename":"3KDRyHY2","size":1804567,"type":"image/gif","updatedAt":"2016-02-24T14:15:03.432Z","id":"56cdbae659638ea312782796"}]},{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323298,"sharename":"6ieJyHY2","sizeCache":108360,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:14:58.653Z","updatedAt":"2016-02-24T14:14:59.529Z","id":"56cdbae259638ea312782793","files":[{"created":1456323298,"createdAt":"2016-02-24T14:14:58.912Z","downloads":0,"fileid":"0","filename":"thumbnail.jpg","readystate":"ready","share":{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323298,"sharename":"6ieJyHY2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:14:58.653Z","updatedAt":"2016-02-24T14:14:58.653Z","id":"56cdbae259638ea312782793"},"sharename":"6ieJyHY2","size":108360,"type":"image/jpeg","updatedAt":"2016-02-24T14:14:59.522Z","id":"56cdbae22606e5193e813753"}]},{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323295,"sharename":"8mfCyHY2","sizeCache":718247,"fileseed":1,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:14:55.695Z","updatedAt":"2016-02-24T14:14:57.420Z","id":"56cdbadf2606e5193e813750","files":[{"created":1456323296,"createdAt":"2016-02-24T14:14:56.233Z","downloads":0,"fileid":"0","filename":"0 - Cover [Monzajer Ft. Hatam, Godaar, 30na].jpg","readystate":"ready","share":{"userid":"user-ozjs2IDTkaoYuL8ycdRyWMbqb11yycpscJdZ2-","created":1456323295,"sharename":"8mfCyHY2","sizeCache":0,"fileseed":0,"downloads":0,"readystate":"remote","createdAt":"2016-02-24T14:14:55.695Z","updatedAt":"2016-02-24T14:14:55.695Z","id":"56cdbadf2606e5193e813750"},"sharename":"8mfCyHY2","size":718247,"type":"image/jpeg","updatedAt":"2016-02-24T14:14:57.412Z","id":"56cdbae059638ea31278278e"}]}
            ];
            scope.tempPayments = [
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
            scope.accountTypes = [
                'Anon',
                'Free',
                'Premium',
                'Premium+',
                'Business'
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