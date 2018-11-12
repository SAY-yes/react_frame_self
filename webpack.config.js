const merge = require('webpack-merge');
var webpack = require('webpack');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonConfig = require('./webpack.common.config')

const publicConfig = {
 
    // 错误信息优化
    devtool:'cheap-module-source-map',

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test:/\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },

    plugins:[
       
       new CleanWebpackPlugin(['dist/*.*']),
        // 文件压缩
        new UglifyJSPlugin(),
        // 指定环境
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],

};

module.exports = merge(commonConfig,publicConfig)