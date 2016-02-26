gett.service('usersService', ['$q', '$resource', function($q, $resource) {

    var getUsersRes = $resource(config.API + '/admin/getUsers', {}, {
        getUsers: {
            method: 'POST'
        }
    });

    var getUserRes = $resource(config.API + '/admin/getUser/:userid', {}, {
        getUser: {
            method: 'GET'
        }
    });

    var getProductsListRes = $resource(config.API + '/admin/getProductsList', {}, {
        getProducts: {
            method: 'GET'
        }
    });

    this.getUsers = function(email) {
        return $q(function(resolve, reject) {
            getUsersRes.getUsers({email: email}, function(users) {
                resolve(users);
            }, function(err) {
                reject(err);
            });
        });
    };

    this.getUser = function(userid) {
        return $q(function(resolve, reject) {
            getUserRes.getUser({userid: userid}, {}, function(user) {
                resolve(user);
            }, function(err) {
                reject(err);
            })
        });
    };

    this.getProductsList = function() {
        return $q(function(resolve, reject) {
            getProductsListRes.getProducts({}, function(products) {
                resolve(products);
            }, function(err) {
                reject(err);
            });
        });
    };

}]);