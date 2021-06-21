module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // markup
    ['pug'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['concat', 'uglify'],

    // images
    ['copy:images'],

    // fonts
    ['copy:fonts'],

    // PWA
    ['copy:pwa']
  ],

  prod: [
    'htmlmin'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]

};
