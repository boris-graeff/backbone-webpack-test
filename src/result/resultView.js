var Backbone = require('backbone'),
    $ = require('jquery'),
    ResultModel = require('./resultModel'),
    template = require('./result.hbs'),
    templateError = require('./error.hbs');

require('./result.less');

var ResultView = Backbone.View.extend({

    initialize: function(city){
        var resultModel = this.resultModel = new ResultModel(city);

        this.listenTo(resultModel, "error", this.handleError);
        this.listenTo(resultModel, "sync", this.handleResult);

        resultModel.fetch();
    },

    render: function(){
        var resultModel = this.resultModel,
            weather = resultModel.get('weather')[0];

        var sunset = new Date(resultModel.get('sys').sunset * 1000);
        var sunrise = new Date(resultModel.get('sys').sunrise * 1000);

        var context = {
            name    : resultModel.get('name'),
            weather : {
                key : weather.main.toLowerCase(),
                description : weather.description
            },
            temperature : resultModel.get('main').temp,
            sunrise : sunrise.getHours()+':'+sunrise.getMinutes(),
            sunset : sunset.getHours()+':'+sunset.getMinutes(),
            humidity : resultModel.get('main').humidity
        };

        this.$el.html(template(context));
        $("#content").html(this.$el);

        return this;
    },

    renderError : function() {
        this.$el.html(templateError());
        $("#content").html(this.$el);

        return this;
    },

    handleError : function(){
        this.renderError();
    },

    handleResult : function(){
        if(this.resultModel.get('cod') !== 200){
            this.handleError();
        }
        else {
            this.render();
        }
    }
});

module.exports = ResultView;