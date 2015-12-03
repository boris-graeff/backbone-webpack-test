var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: 'dist',
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            { test: /\.hbs$/, loader: "handlebars-loader" },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};