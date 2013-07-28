Package.describe({
  summary: "Lazy.js like Underscore.js but lazier"
});

Package.on_use(function (api) {
  api.add_files([
    'lazy.js/lazy.min.js',
    ], ['client', 'server']);
  api.add_files([
    'lazy.js/lazy.dom.js'
    ], ['client']);
});