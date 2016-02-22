var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var httpServer = require('http-server');

gulp.task('build', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('build', err);
        gutil.log('[build]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('serve', ['http-dev-server'], function() {
    gulp.start('webpack:build');
});

gulp.task('http-dev-server', function() {
    var port = 8080;
    var server = httpServer.createServer({root: './app'});
    server.listen(port, '0.0.0.0', function() {
        console.log('Listening on port ' + port);
    });
});

gulp.task('webpack:build', function(callback) {
    var compiler = webpack(webpackConfig);
    compiler.watch({ // watch options:
        aggregateTimeout: 300, // wait so long for more changes
        poll: true // use polling instead of native watchers
        // pass a number to set the polling interval
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
    });

});
