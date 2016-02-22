gett = angular.module('gett', [
    'ui.router',
    'ngMaterial',
    'gett.components.menu',
    'gett.components.home',
    'gett.components.users',
    'gett.components.payments',
    'gett.components.sharesFiles'
]);

require('../node_modules/angular-material/angular-material.min.css'); // TODO: include this by webpack
require('./public/css/base.css');
require('./configs/local'); // TODO: require configs via mode
require('./router');

// Components
require('./components/main/menu');
require('./components/home/home');
require('./components/users/users');
require('./components/payments/payments');
require('./components/shares-files/shares-files');