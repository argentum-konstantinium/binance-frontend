const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        },
        {
            // For pure CSS - /\.css$/i,
            // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
            // For Less - /\.((c|le)ss)$/i,
            test: /\.((c|sa|sc)ss)$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: true,
                    },
                },
                // Can be `less-loader`
                {
                    loader: "sass-loader",
                    options: {
                        additionalData: `
                                @import "@/client/scss/index.scss";
                                @import "@/client/scss/reset.scss";
                            `
                    }
                },
            ],
        },
    ],
}