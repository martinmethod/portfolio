module.exports = {

  // Images
  images: {
    files: [{
      expand: true,
      cwd: 'src/images',
      src: ['**'],
      dest: 'dist/assets/images/'
    }]
  },

  // Fonts
  fonts: {
    files: [{
      expand: true,
      cwd: 'src/fonts',
      src: ['**'],
      dest: 'dist/assets/fonts/'
    }]
  }

};
