# Gulp Template

Gulp template with Browserify + Backbone


## Setup Instructions

### Environment
Install node and gulp globally.
<code>npm install -g gulp</code>


### Install project dependencies

<code>npm install</code>
To install all the project dependencies found in package.json type `npm install` from within the root directory (where the package.json is found).

### Run gulp
<code>gulp</code>
Launches watchify to monitor changes in src, browserify for bundling & a server automatically on localhost:3000. 

<code>gulp build</code>
Build step that compresses generated js/css. Must already have ran `gulp`at least once.


### Possible Improvements
1. Automatic publishing to the CDN.