const path = require('path');

module.exports = {
    entry: './src/food-app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //tsファイルに対してloaderを適用する
    module: {
        rules:[{
            test:/\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    //importの際に.tsや.jsを省略できるようにする
    resolve: {
        extensions: ['.ts', '.js']
    }
}
