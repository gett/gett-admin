gett = angular.module('gett', [
    'ui.router',
    'gett.components.home',
    'gett.components.users',
    'gett.components.payments',
    'gett.components.sharesFiles'

]);

require('./public/css/style.css');
require('./router');

// Components
require('./components/home/home');
require('./components/users/users');
require('./components/payments/payments');
require('./components/shares-files/shares-files');