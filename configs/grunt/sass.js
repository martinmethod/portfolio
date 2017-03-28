var grunt = require('grunt'),
    sass = require('node-sass'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime-types'),
    sassDataURI = require('lib-sass-data-uri'),
    nodeSassGlobbing = require('node-sass-globbing');

module.exports = {

  options: {
    importer: nodeSassGlobbing,
    sourceMap: grunt.option('target') !== 'prod',
    outputStyle: 'compressed',
    functions: Object.assign({}, sassDataURI)
  },

  core: {
    files: {
      'dist/assets/css/<%= pkg.name %>.css': 'src/styles/<%= pkg.name %>.scss'
    }
  }

};