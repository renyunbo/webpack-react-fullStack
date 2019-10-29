const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');//这个插件可以创建HTML文件，并自动将依赖写入HTML文件中

module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public'
    },
    module: {
        rules: [{
            test: /\.(js|jsx?)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ],
    },
    plugins: [
        new HTMLPlugin({
            title: 'Hello app',
            template:path.join(__dirname,'../client/template.html')
        }),
    ]
}