import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import browserSync from 'browser-sync';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    experiments: {
        outputModule: true,
        topLevelAwait: true,
    },
    entry: './dev/script/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
        clean: false,
        module: true,
        library: {
            type: 'module',
        },
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
                        match: ['**/*.php', '**/*.css', '**/*.js'],
                        fn: async (event, file) => {
                            if (event === 'change') {
                                const bs = browserSync.get('bs-webpack-plugin');
                                bs.reload();
                            }
                        },
                    },
                ],
            },
            {
                reload: false,
                notify: false,
            }
        ),
    ],
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, './public'),
        hot: true,
        port: 5173,
    },
};
