const path = require('path');

module.exports = {
    target:'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '',
        libraryTarget:'commonjs2',//规范
    },
    module: {
        rules: [{
            test: /\.(js|jsx?)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ],
    }
}