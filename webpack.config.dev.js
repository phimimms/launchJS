import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/src',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    postcss: function() {
        return [autoprefixer({
            browsers: ['last 3 versions']
        })];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, laoder: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
