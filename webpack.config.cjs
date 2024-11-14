const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    experiments: {
        outputModule: true,
        topLevelAwait: true
    },
    entry: './dev/script/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
        clean: false,
        module: true,
    },
    resolve: {
        extensions: ['.js', '.min.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'localhost:8081',
                open: false,
                files: [
                    {
                        match: [
                            '**/*.php',
                            '**/*.css',
                            '**/*.js'
                        ],
                        fn: function (event, file) {
                            if (event === "change") {
                                const bs = require('browser-sync').get('bs-webpack-plugin');
                                bs.reload();
                            }
                        }
                    }
                ]
            },
            {
                reload: false,
                notify: false,
            }
        )
    ],
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, './public'),
        hot: true,
        port: 5173,
    },
};
