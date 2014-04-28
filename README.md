Marionette Skeleton App
=======================

When people usually think in Javascript, they never think in terms of an application, the most common perception is just a useful plugin.

Fortunately last years have been happened a explotion of Javascript Frameworks.

Doesn't matter what framework you choose, in the first steps we suffer the syndrome of white page of writers, to figure out how I can start.

To help you to defeat that syndrome, here is my proposal for a <a target="_blank" href="http://marionettejs.com">Marionette</a> Skeleton App

### Structure and Files
```
├── collections
├── index-module.html
├── index.html
├── libs
│   ├── backbone.babysitter.js
│   ├── backbone.eventbinder.js
│   ├── backbone.js
│   ├── backbone.marionette.js
│   ├── backbone.wreqr.js
│   ├── jquery.js
│   ├── main-module.js
│   ├── main.js
│   ├── require.js
│   └── underscore.js
├── models
├── templates
└── views
```

The skeleton implement <a target="_blank" href-"http://requirejs.org/">RequireJS</a> to load libraries and start a MarionetteJS App sample as a RequireJS moduke.

Check index-module.html and libs/main-module.js to check RequireJS named module.
