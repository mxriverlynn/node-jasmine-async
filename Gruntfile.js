module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '// Jasmine.Async, v<%= pkg.version %>\n' +
            '// Copyright (c)<%= grunt.template.today("yyyy") %> Muted Solutions, LLC. All Rights Reserved.\n' + 
            '// Distributed under MIT license\n' + 
            '// http://github.com/derickbailey/node-jasmine-async',
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        jUnit: {
          report: true,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      all: ['spec/']
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");

  grunt.registerTask("default", ["jasmine_node"]);
};
