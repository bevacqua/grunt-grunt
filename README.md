# Grunt-Grunt Run tasks in other Gruntfiles

Execute Grunt tasks in other Gruntfiles easily from a Grunt task.

## Download

Get it from npm.

```js
npm i grunt-grunt --save-dev
```

## Usage

Configure as multi-target. If no `tasks` are provided, the default task is executed.

```js
grunt.initConfig({
    grunt: {
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

## License

MIT
