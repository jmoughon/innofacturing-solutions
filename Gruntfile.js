module.exports = function(grunt) {

  var config = {
    watch: {
      css: {
        files: ['scss/{,**/}*.scss'],
        tasks: ['compass:dev'],
        options: {
          livereload: true,
        }
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify:dev']
      }
    },

    compass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          environment: 'production',
          force: true
        }
      },
      dev: {
        options: {
          outputStyle: 'expanded',
        }
      },
      options: {
        importPath: "bower_components/foundation/scss",
        sassDir: "scss",
        cssDir: "htdocs/stylesheets",
        imagesDir: "htdocs/images",
        javascriptsDir: "htdocs/js",
        fontsDir: "htdocs/fonts",
        relativeAssets: true,
        debugInfo: false,
        quiet: true,
        require: [],
        bundleExec: true
      }
    },
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
          'htdocs/js/app.min.js':
          [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation/js/foundation.js',
            'js/**/*.js'
          ]
        }
      },
      dist: {
        files: {
          'htdocs/js/app.min.js':
          [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation/js/foundation/foundation.js',
            'bower_components/foundation/js/foundation/foundation.abide.js',
            'bower_components/foundation/js/foundation/foundation.alert.js',
            'bower_components/foundation/js/foundation/foundation.equalizer.js',
            'bower_components/foundation/js/foundation/foundation.orbit.js',
            'bower_components/foundation/js/foundation/foundation.reveal.js',
            'bower_components/foundation/js/foundation/foundation.tab.js',
            'bower_components/foundation/js/foundation/foundation.topbar.js',
            'js/**/*.js'
          ]
        }
      }
    }
  };

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['compass:dist']);
  grunt.registerTask('default', ['compass:dist', 'uglify:dist']);

  grunt.initConfig(config);
};
