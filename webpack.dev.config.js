const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config')

const devConfig = {
    // 错误信息优化
    devtool:'inline-source-map',
 
    /*入口*/
    entry: {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        filename:'[name].[hash].js'
    },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test:/\.css/,
            use:['style-loader','css-loader']
        }]
    },

    // 服务
    devServer: {
        //URL的根目录。如果不设定的话，默认指向项目根目录。
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0', 
    }

};

module.exports = merge({
    customizeArray(a,b,key) {
         /*entry.app不合并，全替换*/
        if(key === 'entry.app') {
            return b
        }
        return undefined;
    }
})(commonConfig,devConfig)