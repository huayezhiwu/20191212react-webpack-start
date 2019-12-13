const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseWebpackConfig = require("./webpack.config.base");
const utils = require("./utils");

module.exports = webpackMerge(baseWebpackConfig, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'),
            template: 'index.html',
            inject: true
        })
    ],
    // 开发环境本地启动的服务配置
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     contentBase: false,
    //     compress: true,
    //     port: '8081',
    //     publicPath: '/',
    //     proxy: {
    //         // 接口请求
    //     }
    // }
})
