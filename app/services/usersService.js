gett.service('usersService', ['$q', '$resource', function($q, $resource) {

    var getUsersRes = $resource(config.API + '/admin/getUsers', {}, {
        getUsers: {
            method: 'POST'
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

}]);