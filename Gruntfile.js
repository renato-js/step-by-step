module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({

    uglify: {
      'sbs-min.js': 'src/js/sbs.js'
    },

  //minificar css
  cssmin: {
    add_banner: {
      options: {
        banner: '/* CANOA css minify */'
      },
      files: {
        'template_course/src/css/style.min.css': ['template_course/src/b-css/*.css']
      }
    }
  }

  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['uglify', 'less']);
 
};