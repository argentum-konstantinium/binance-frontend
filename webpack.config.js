const clientConfig = require('./webpack/client.config.js');
const serverConfig = require('./webpack/server.config.js');
const dotenv = require('dotenv');
const path = require("path");


const envPath = path.resolve(__dirname, `./.env.${process.env.CONFIG_FILE}`)

const result = dotenv.config({ path: envPath, debug: true, override: true }).parsed;



console.log(process.env)

module.exports = [clientConfig, serverConfig]