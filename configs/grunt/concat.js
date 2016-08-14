var grunt = require('grunt');

module.exports = {
    task: {
        options: {
            separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
            stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
        },
        src: [
            // External libraries
            'bower_components/css_browser_selector/css_browser_selector.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jumboslider/dist/js/jquery.jumboslider.min.js',
            'bower_components/masonry/dist/masonry.pkgd.min.js',

            // Internal scripts
            'src/scripts/bootstrap.min.js',
            'src/scripts/<%= pkg.name %>.js'
        ],
        dest: 'dist/assets/js/<%= pkg.name %>_bundle.js'
    }
};