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

The skeleton implement <a target="_blank" href-"http://requirejs.org/">RequireJS</a> to load libraries and modules to start a MarionetteJS App.

Is a starting point with structure and sample about how to create modules, views, routing and controller for a Marionette JS application.

Collections and models and his integration with Views in outside the scope this Skeleton, becuase is different in each implemetantion.

![Marionnete Skeleton View](https://raw.githubusercontent.com/enzolutions/marionette-skeleton-app/master/images/marionette_skeleton_app.png "Marionnete Skeleton View")

### Errors

If you run this Marionette JS Application without a Web Server ( Loading directly the index.html file), you will get the following error.

````
XMLHttpRequest cannot load file:///YOURPATH/marionette-skeleton-app/templates/header.tpl. Cross origin requests are only supported for HTTP.

````

### Named modules

If you want create named module to use with require, you can check files:
<ul>
  <li>index-module.html</li>
  </li>libs/main-module.js</li>
</ul>

### Modules

All modules are separated in folder modules in this way can be instantiated for any application.

#### Routing

file: **modules/AppRouter.js**

This example module implements the routes defined in your application.

Routes:
  home: This method must be defined inside the controller associated to Router when the App instantiate the AppRoute module.
  helloBuddy: Method defined inside the Router using the property **routes**

##### Usage:

  Load the index.html file, the home route must be executed and you will get a bootstrap alert message "Hello Marionette JS"

  Load the index.html#hello/enzo, the helloBuddy from the controller is loaded and the fragment after 'hello/' will pass to the method as parameter to generate the message in this case 'Hello enzo'

#### Controller

file: **modules/AppController.js**

This object must define all methods defined in Router with property **appRoutes** , in this example define the method hellobuddy.

### Views

All views were encapsuled as RequireJS module and instanciate in Controller functions and Main Application.

Views can be reused in other controllers

### Templates

All templates where created in templates folder using undescore.js logic and loaded using the pluging <a href="https://github.com/requirejs/text">text</a> for RequireJS

Template are imported in Views.

### Messaging

The Skeleton implement library <a href="https://github.com/marionettejs/backbone.wreqr">Backbone.wreqr</a> for messaging between controller functions and views.

The application has a Input Text to enter a text, when enter key is hitted or the buttong is clicked an event is trigger and catch for the application to activate the **hello** router.

