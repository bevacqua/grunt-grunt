# Grunt-Grunt Run tasks in other Gruntfiles

> Execute Grunt tasks in other Gruntfiles easily from a Grunt task.

## Install

Get it from npm.

```js
npm i grunt-grunt --save-dev
```

Use [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) to load your Grunt plugins.

```js
npm i load-grunt-tasks --save-dev
```

Then, rather than all the calls to `grunt.loadNpmTask()`, use this one liner.

```
require('load-grunt-tasks')(grunt);
```

Never forget to register a Grunt plugin again!

## Usage

Configure as multi-target. If no `tasks` are provided, the default task is executed.

```js
grunt.initConfig({
    grunt: {
        options: {
            grunt: path.resolve('node_modules/.bin/grunt')
        },
        lintsome: {
            gruntfile: 'node_modules/some/Gruntfile.js',
            task: 'jshint'
        }
    }
});
```

Also allows multiple task targets.

```js
grunt.initConfig({
    grunt: {
        buildsome: {
            gruntfile: 'node_modules/some/Gruntfile.js',
            tasks: ['jshint:client', 'build']
        }
    }
});
```

Run it!

```shell
grunt grunt:lintsome
```

## Options

### grunt

Type: `string`  
Default: `grunt`

Lets you override the default location of the grunt command.

## License

MIT
