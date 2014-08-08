# Quby Frontend

## Development

Run this to get up and running.

```
npm install -g gulp
npm install -g bower

npm install
bower install

gem install sass -v 3.3.7

gulp
```

### JS/CSS Libraries

We use a Gulp/Bower/Browserify+Sass stack to compile everything down to two files: `quby.js` and `quby.css`.

**Javascript** libraries are declared in `bower.json` under `dependencies`. After that, add the appropriate aliases in `package.json` under `browser`. This will allow you to `require('alias')` inside our code.

**CSS** libraries are declared in `bower.json` under `dependencies`. After that, add the appropriate directory to the Sass load path by editting `gulp/tasks/sass.js`. After that, you can just `import "foo";` from the SCSS file.
