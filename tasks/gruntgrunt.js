'use strict';

var path = require('path');
var chalk = require('chalk');
var spawn = require('child_process').spawn;

var isWindows = process.platform === 'win32';

module.exports = function (grunt) {
    grunt.registerMultiTask('grunt', 'Spawn Grunt tasks in other Gruntfiles easily from a Grunt task', function () {
        var done = this.async();
        var data = this.data;

        var options = this.options({
            grunt: (isWindows ? 'grunt.cmd' : 'grunt')
        })

        if (typeof data.task === 'string') data.tasks = [data.task];
        if (typeof data.tasks === 'string') data.tasks = [data.tasks];

        if (!data.gruntfile) grunt.fatal('Gruntfile path missing');
        if (!data.tasks) data.tasks = ['default'];

        grunt.log.writeln('Spawning %s task(s) in %s', chalk.underline(chalk.blue(data.tasks.join(' '))), chalk.yellow(data.gruntfile));

        // var args = data.tasks.concat(['--gruntfile', data.gruntfile]);
        var cwd = path.dirname(data.gruntfile);

        var child = spawn(options.grunt, data.tasks, {
            stdio: 'inherit',
            cwd: cwd,
            env: process.env
        });

        child.on('close', function (code) {
            done(code === 0);
        });
    });
};
