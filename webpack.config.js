const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isProductionMode = process.env.NODE_ENV === 'production';


function getOptimiztionConfig() {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    };

    if (isProductionMode) {
        config.minimizer = [
            new TerserWebpackPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),

            new CSSMinimizerWebpackPlugin(),
        ];
    }

    return config;
}

module.exports = {
    entry: {
        // index: ['@babel/polyfill', path.resolve(__dirname, 'src', 'js', 'index.js')]
        index: path.resolve(__dirname, 'src', 'js', 'index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
    },

    resolve: {
        extensions: ['.js', '.json'],

        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            '@css': path.resolve(__dirname, 'src', 'css'),
            '@scss': path.resolve(__dirname, 'src', 'scss'),
            '@js': path.resolve(__dirname, 'src', 'js'),
            '@fonts': path.resolve(__dirname, 'src', 'assets', 'fonts'),
            '@images': path.resolve(__dirname, 'src', 'assets', 'img'),
            '@svg': path.resolve(__dirname, 'src', 'assets', 'svg'),
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: isProductionMode,
            },
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src', 'assets',), to: path.resolve(__dirname, 'dist', 'assets') },
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                dependency: { not: ['url'] },
            }
        ]
    },
    optimization: getOptimiztionConfig(),
    devtool: isDevelopmentMode ? 'source-map' : false,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        compress: true,
        port: 5500,
        open: true,
        hot: isDevelopmentMode,
    },
}