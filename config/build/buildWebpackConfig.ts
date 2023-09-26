import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options :BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
 return {
    mode,
    entry: paths.entry,
    output: {
        path: paths.build,
        filename: "[name].[contenthash].bundle.js",
        clean: true
    },
    plugins: buildPlugins(options), 
    module: {
        rules: buildLoaders(options),
      },
      resolve: buildResolvers(),
      devtool: isDev? 'inline-source-map' : undefined,
      devServer: buildDevServer(options)
}
}