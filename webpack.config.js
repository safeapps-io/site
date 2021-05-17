const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: {
        'index': ['./src/index']
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ["node_modules", path.resolve('./src/')],
        // alias: {
        //     react: 'preact',
        //     'react-dom': 'preact',
        // }
    },
    output: {
        path: path.join(__dirname, '/public'),
        filename: prod ? '[name].[contenthash].js' : '[name].js',
        chunkFilename: prod ? '[name].[id].[contenthash].js' : '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /styles/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[local:2]-[hash:base64:4]'
                            }
                        }
                    },
                    "postcss-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {additionalData: `@import 'src/styles/importable';`}
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                include: /styles/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                    },
                    "postcss-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {additionalData: `@import 'src/styles/importable';`}
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|woff2)$/i,
                type: 'asset/resource'
            },
        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: prod ? '[name].[contenthash].css' : '[name].css'
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    skipLibCheck: false,
                }
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['runtime', 'vendors', 'index'],
            filename: 'index.html',
        }),
    ],
    devtool: prod ? false : 'source-map',
    devServer: {
        hot: false,
        compress: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
