'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('build', [
		'clean',
		'concat',
		'copy'
	]);

	grunt.task.renameTask('watch', '_watch');
	grunt.registerTask('watch', [
		'build',
		'develop',
		'_watch:dev'
	]);

	var path = {
		bower: 'bower_components',
		client: 'src/client',
		server: 'src/server',
		dist: {
			base: 'dist',
			server: 'dist/server',
			'static': 'dist/static'
		}
	};

	grunt.config.merge({
		clean: {
			options: {
				force: true
			},
			dist: {
				files: [{
					dot: true,
					src: [path.dist.base]
				}]
			}
		},
		concat: {
			js: {
				src: [
					path.client + '/core/app.js',
					path.client + '/**/*.js'
				],
				dest: path.dist.static + '/js/angular-workshop.js'
			},
			css: {
				src: [
					path.client + '/**/*.css'
				],
				dest: path.dist.static + '/css/angular-workshop.css'
			},
			// Bower components
			bowerJS: {
				src: [
					path.bower + '/angular/angular.js',
					path.bower + '/jquery/jquery.js',
					path.bower + '/bootstrap/dist/js/bootstrap.js'
				],
				dest: path.dist.static + '/js/bower.js'
			},
			bowerCSS: {
				src: [
					path.bower + '/bootstrap/dist/css/bootstrap.css'
				],
				dest: path.dist.static + '/css/bower.css'
			}
		},
		copy: {
			options: {
				mode: true
			},
			server: {
				expand: true,
				cwd: path.server + '/',
				src: '**/*',
				dest: path.dist.base + '/server/'
			},
			templates: {
				expand: true,
				cwd: path.client,
				src: '**/*.html',
				dest: path.dist.static + '/templates/'
			}
		},
		develop: {
			server: {
				file: path.dist.server + '/server.js'
			}
		},
		_watch: {
			dev: {
				options: {
					nospawn: true
				},
				files: [
					'src/**/*'
				],
				tasks: ['build', 'develop']
			}
		}
	});
};