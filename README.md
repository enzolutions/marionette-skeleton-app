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

### Named modules

If you want create named module to use with require, you can check files:
<ul>
  <li>index-module.html</li>
  </li>libs/main-module.js</li>
</ul>

### Modules

All modules are separated in folder modules in this way can be instantiated for any application.

#### Routing

file: <strong>modules/AppRouter.js</strog>

This example module implements the routes defined in your application.

Routes:
  home: This method must be defined inside the controller associated to Router when the App instantiate the AppRoute module.
  helloBuddy: Method defined inside the Router using the property <italic>routes</italic>

Usage:

  Load the index.html file, the home route must be executed and you will get an alert message "Hello Marionette"

  Load the index.html#hello/enzo, the helloBuddy from the controller is loaded and the fragment after 'hello/' will pass to the method as parameter to generate the message in this case 'Hello enzo'

#### Controller

file: <strong>modules/AppController.js</strog>

This object must define all methods defined in Router with property <italic>appRoutes</italic> , in this example define the method hellobuddy.


