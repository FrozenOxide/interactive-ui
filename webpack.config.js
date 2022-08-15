const webpack = require("webpack");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    devtool: 'source-map',
    mode: 'development',
    entry: `${SRC_DIR}/app/index.js`,
    output: {
        path: `${DIST_DIR}/app`,
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ],
            }
        ]

    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
};

module.exports = config;