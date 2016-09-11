module.exports = {
  // entry point needs to be entry.jsx
    entry: './client/App.js',
  // webpack output to client/dist/bundle.js
    output: {
        path: './client/',
        publicPath: './client/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // regular expression for .jsx or .js
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'babel'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
            },
        ],
    },
};