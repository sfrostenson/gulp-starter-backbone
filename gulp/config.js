var dest = './build';
var src = './src';
var styles = './build/styles';

module.exports = {
  'scripts': {
    'src': src + '/js/*.js',
    'dest': dest
  },
  'browserSync': {
    'dest': dest
  },
  'browserify': {
    'src': [src + '/js/**/*.js', src + '/js/*.js'],
    'dest': dest,
    'outputName': 'bundled.js'
  },
  'views': {
    'src': src + '/*.html',
    'dest': dest
  },
  'sass': {
    'src': src + '/**/*.{scss,sass}',
    'dest': styles,
    'outputName': 'main-dev.css'
  },
  'build': {
    'cssSrc' : dest + '/styles/main-dev.css',
    'jsSrc': dest + '/bundled.js',
    'dest': dest
  },
  'template': {
    src: src + '/js/templates/*.tpl'
  }
};