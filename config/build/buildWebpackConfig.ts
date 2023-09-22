import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options :BuildOptions): webpack.Configuration {
    const {paths, mode} = options
 return {
    mode,
    entry: paths.entry,
    module: {
        rules: buildLoaders(),
      },
      resolve: buildResolvers(),
    output: {
        path: paths.build,
        filename: "[name].[contenthash].bundle.js",
        clean: true
    },
    plugins: buildPlugins(options),

}
}