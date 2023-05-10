const path = require("path");

const nodeExternals = require("webpack-node-externals");
const pluginsConfig = require('./config/common/plugins');
const moduleConfig = require('./config/common/module');
const resolveConfig = require('./config/common/resolve');

const isProduction = process.env.mode === 'PRODUCTION';

const serverConfig = {
    mode: isProduction ? 'production' : 'development',
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "server.js",
    },
    resolve: resolveConfig,
    module: moduleConfig,
    plugins: pluginsConfig,
};

module.exports = serverConfig;