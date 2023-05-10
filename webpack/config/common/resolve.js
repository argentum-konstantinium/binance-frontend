const path = require("path");
module.exports = {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
        '@': path.resolve(__dirname, '../../../src'),
            '@root': path.resolve(__dirname, '../../../'),
    }
}