const path = require('path');
const pluginsConfig = require('./config/common/plugins');
const moduleConfig = require('./config/common/module');
const resolveConfig = require('./config/common/resolve');

const isProduction = process.env.mode === 'PRODUCTION';

const clientConfig = {
    entry: './src/client/index.tsx',
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, '../dist/static'),
        filename: 'client.js'
    },
    resolve: resolveConfig,
    module: moduleConfig,
    plugins: pluginsConfig,
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
}

module.exports = clientConfig;