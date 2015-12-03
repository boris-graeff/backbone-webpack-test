var Router = require('./router'),
    Backbone = require('backbone'),
    $ = require('jquery');

require('./normalize.min.less');
require('./main.less');


$(document).ready(function () {
    Backbone.$ = $;
    this.router = new Router();
    Backbone.history.start();
});