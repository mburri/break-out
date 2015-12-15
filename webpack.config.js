module.exports = {
    // application entry point
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                plugins: ["transform-object-assign"]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '/dist'
    }
};
