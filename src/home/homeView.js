var Backbone = require('backbone'),
    $ = require('jquery'),
    template = require('./home.hbs');

require('./home.less');

var HomeView = Backbone.View.extend({

    events: {
        'click #doSearch' : 'doSearch'
    },

    initialize: function(options){
        this.render();
    },

    render: function(){

        this.$el.html(template());
        $("#content").html(this.$el);

        return this;
    },

    doSearch: function(){
        var city = $("#city").val();
        if(city){
            this.trigger(HomeView.EVENT_SEARCH, city);
        }
    }
},{
    EVENT_SEARCH : 'EVENT_SEARCH'
});

module.exports = HomeView;