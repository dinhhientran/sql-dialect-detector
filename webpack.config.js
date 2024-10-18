const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/SQLDialectDetector.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sql-dialect-detector.1.0.1.min.js',
        library: 'SQLDialectDetector',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    resolve: {
        extensions: ['.js'],
    },
};
