const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin    = require("html-webpack-plugin");
const CopyPlugin           = require("copy-webpack-plugin");
const path                 = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',  // puede ser [hash] o [contenthash] (buscar las diferencias y cuándo usar uno u otro)
        path: path.resolve(__dirname, 'dist'),
        clean: true, // limpia la carpeta "dist" cada vez que haya un cambio en mi archivo JS, para que no se creen y acumulen los diferentes archivos JS con "contethash" diferentes correspondientes a versiones anteriores de ese archivo JS.
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css' // puede ser [hash] o [contenthash] (buscar las diferencias y cuándo usar uno u otro)
        }),
        new CssMinimizerPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets/'
                }
            ]
        })
    ]

}