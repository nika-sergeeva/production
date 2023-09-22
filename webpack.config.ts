const path = require('path')
//path - для среды node.js

const HtmlWebpackPlugin = require('html-webpack-plugin')
//
const webpack = require('webpack')

//аналог обычного экспорта в js, но эта версия для node.js (module.exports)

module.exports = {
    mode: 'development',

    //стартовая точка приложения
    entry: path.resolve(__dirname, 'src', 'index.ts'),

    module: {
        //конфигурируем лоудеры, которые предназначены для того чтобы обрабатывать файлы, которыйе выходят за рамки js, те png, jpg, gif, ts и тд
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },

      //чтоб не писать расширение импортируемумум  файлу
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },

    //настройки куда и как мы собиарем приложение
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin()
    ]

}

//чтобы собрать --> npx webpack