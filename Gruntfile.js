module.exports = function(grunt) {

	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/* \n * <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;\n */'
		},
		concat:{
			app:{
				src:['app/*/*.js','app/**/*.js'],
				dest:"dist/js/app.js"
			},
			libs:{

				src:[
					'libs/angular.min.js','libs/angular-ui-router.min.js','libs/jquery-2.1.1.js',
                    'libs/angular-css-injector.js',  'libs/angulartics.js','libs/angulartics-ga.js',
                    'libs/angular-youtube-embed.js',
                    'libs/scrollReveal.js',
                    'libs/smoothScroll.js',
					'libs/svg4everybody.js','libs/mandrill.js',
					'scripts/**/*.js'
				],
				dest:"dist/js/libs.js"

			}
		},
		jshint: {
			files: ['app/**/*.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				forin: true,
				browser: true,
				devel: true, //TODO: Remove this in production.
				globals: {
					angular:true,
					mandrill:true,
					BackOffice:true,
					Home:true,
					exports: true,
					module: false,
					can: true,
					$: true,
                    mw:true,
					Modernizr: true,
					Helpers: true,
					FayeClient:true,
					Clients:true,
					Models: true,
					Controllers: true,
					Directives:true,
					Services:true,
                    Components: true,
					ActiveXObject: true,
					flowplayer: true,
					BrowserDetect: true,
					Zenbox: true,
					FB: true,
					MaintenanceScreen:true,
					getActualDateTimeFormat: true,//, //recordar quitar esto...
					formatAMPM: true,
					Faye: true,
					_gaq: true,
					ga:true,
					qq: true,
					kWidget: true,
					respond: true,
					unload: true,
					YT: true,
					onYouTubeIframeAPIReady: true,
					jwplayer: true,
					yourls: true,
					escape: true,
					preload: true,
					demand: true,
					moment: true,
					ga: true,
					AmCharts: true
				},
			}
		},
		watch: {
		      files: ['app/**/*.js'],
    		  tasks: ['jshint', 'concat'],
    		  options:{
    		  	interrupt:true,
				livereload: true,
    		  	globals: {
    		  		GlobalPortal:true,
    		  		Home:true,
					exports: true,
					module: false,
					can: true,
					$: true,
					Modernizr: true,
					Helpers: true,
					Models: true,
					Controllers: true,
                    Components: true,
					ActiveXObject: true,
					flowplayer: true,
					BrowserDetect: true,
					Zenbox: true,
					FB: true,
					MaintenanceScreen:true,
					getActualDateTimeFormat: true,//, //recordar quitar esto...
					formatAMPM: true,
					Faye: true,
					_gaq: true,
					ga:true,
					qq: true,
					kWidget: true,
					respond: true,
					Pixastic: true,
					YT: true,
					onYouTubeIframeAPIReady: true,
					jwplayer: true,
					yourls: true,
					escape: true,
					ZeroClipboard: true,
					demand: true,
					moment: true,
					ga: true
				}
    		  }
		},
		cssmin: {
		  minify: {
		   	expand:true,
		   	src:['assets/css/**/*css'],
		   	dest:'min/css/',
		   	ext:'.min.css'
		  }
		},
		uglify: {
			options: {
				compress: {
					drop_console: true,
                    evaluate: false,
                    properties: false,
                    unused: false
				},
				 mangle: false
			},
			build:{
				files:[{
					expand: true,
					src:'dist/js/*.js',
					dest:'dist/js',
					rename: function(dest, src) { return dest + '/' + src.replace('dist/js/', '');  }
				}]
			}
		},
		qunit:{
			files:['index.html']
		},
		connect: {
		    watch: {
		      	options: {
		        	port: 8000,
		        	base: '.',
		        	middleware:function(connect,options,middlewares){
		        		middlewares.unshift(function(req,res,next){
		        			var stub_endpoints=grunt.file.readJSON('endpoints.json');
		        			var prob_endpoint=req.url.split('?')[0];
		        			if(stub_endpoints[req.url]){
		        				console.log("endpoint : ",req.url);
		        				res.end(grunt.file.read(stub_endpoints[req.url]));
		        			}else if(stub_endpoints[prob_endpoint]){
		        				console.log("endpoint : ",req.url);
		        				res.end(grunt.file.read(stub_endpoints[prob_endpoint]));
		        			}else{
		        				return next();
		        			}
		        		});
		        		return middlewares;
		        	}
		      }
		    }
		},
        strip: {
			dist: {
				src: 'dist/js/*.js'
			},
            options: {
                inline : true,
                nodes : ['console.log','console.warn','console.trace','window.console.log']
            }
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ['app/**/*.html'],
						dest: 'dist/views/',
						filter: 'isFile',
						rename: function(dest, src) {
							var srcc = src.replace('app', '');
							srcc = srcc.replace('views', '');
							return dest + '/' + srcc;
						}
					}
				]
			}
		},

            // Sass
                // was buggy, need to check later.
            //    Instrictions for installing:

            // To install the node Modules, run inside the project:

            // npm install grunt-contrib-sass--save-dev
            // npm install grunt-contrib-compass --save-dev

            // These modules require compass and ruby installed.

            // Install Ruby for windows:

            // http://rubyinstaller.org/downloads/

            // Verify the installation running "ruby -v" on your console(may need to re-open it), once installed, install the compass and the susy gem:

            // gem update --system && gem install compas && gem install susy.

            // Inside the project you may need to run "compass install susy". This creates 2 directories that you can delete ("stylesheets" and "sass").
        sass: {
          dev: {
            options: {
              style: 'expanded',
              require: 'susy',
              compass: true
            },
            files: {
              'assets/css/main.css': 'assets/sass/main.scss'
            }
          },
          dist: {
            options: {
              style: 'compressed',
              require: 'susy',
              compass: true
            },
            files: {
             'assets/css/main.css': 'assets/sass/main.scss'
            }
          }
        },

		test:{}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');


	// Default task.
	grunt.registerTask('default', ['concat']);
    grunt.registerTask('dev-clean', ['concat','strip','sass:dev']);
	grunt.registerTask('dev', ['concat']);
    grunt.registerTask('css', ['sass:dev']);
    grunt.registerTask('css-min', ['sass:dist']);
	grunt.registerTask('production', ['concat','uglify'/*,'copy'*/]);
	grunt.registerTask('server:watch',['concat','connect','watch','jshint']);
	grunt.registerTask('server:watch-prod',['concat','uglify','connect','watch','jshint']);
	grunt.registerTask('test', ['qunit']);
};
