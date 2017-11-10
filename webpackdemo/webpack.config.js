module.exports = {

    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: ["babel-loader"]
            },
        ]
    }
}