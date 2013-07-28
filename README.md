# Meteor Lazy.js

This is smart package for use with [Meteor](http://meteor.com/) open-source web platform and the [Meteorite](http://oortcloud.github.io/meteorite/) package manager. It is meant to be downloadable from [Atmosphere](https://atmosphere.meteor.com/) package repository or from Github.

**Lazy.js** it a utility library for JavaScript, similar to [Underscore.js](http://underscorejs.org/) and [Lo-Dash](http://lodash.com/) but with one important difference: **lazy evaluation** (also known as deferred execution). This can translate to superior performance in many cases, _especially_ when dealing with large arrays and/or "chaining" together multiple methods. For simple cases (map, filter, etc.) on small arrays, Lazy's performance should be similar to Underscore or Lo-Dash.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add lazyjs`

