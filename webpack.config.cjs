const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/script/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
        clean: false,
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
            filename: 'tailwind.css',
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'https://localhost/webpack-php',
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
                reload: false
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
