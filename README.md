# Gulp Template

Gulp template with Browserify + Backbone


## Setup Instructions

### Environment
<code>npm install -g gulp</code>
Install node and gulp globally.

### Install project dependencies

<code>npm install</code>
To install all the project dependencies found in package.json.

### Run gulp
<code>gulp</code>
Launches watchify to monitor changes in src, browserify for bundled.js in build & a server that refreshes automatically on changes. 

<code>gulp build</code>
Build step that compresses generated js/css. Must already have ran `gulp`at least once.


### Possible Improvements
1. Automatic publishing to the CDN.
2. Add universal SASS styles.
3. Yeoman generator: https://github.com/texastribune/generator-tt-newsapps