var path = require('path');

module.exports = {
    cache: true,
    entry: {
        app: './app/app.js',
        vendor: [
            'angular',
            'angular-material',
            'angular-ui-router',
            'angular-resource'
        ]
    },
    output: {
        path: path.join(__dirname, './app/build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.jade$/, loader: 'jade'}
        ]
    }
};