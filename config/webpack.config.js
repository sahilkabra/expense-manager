const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)(\?.*$|$)/,
                loader: 'file-loader',
            },
            {
                test: /\.elm/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-webpack-loader?verbose=true&warn=true',
            },
        ],
        noParse: /\.elm$/,
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        stats: { colors: true },
    },
};
