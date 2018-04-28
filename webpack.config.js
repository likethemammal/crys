
const autoprefixer = require('autoprefixer')
const pixrem = require('pixrem')

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const plugins = [
    new CopyWebpackPlugin([
        { from: 'assets' }
    ])
]

const css_loader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name].[local]',
        importLoaders: 1,
    },
}

const postcss_loader = {
    loader: 'postcss-loader',
    options: {
        plugins: function () {
            return [
                autoprefixer('last 10 versions', 'ie 10'),
                pixrem({
                    rootValue: 10,
                }),
            ]
        }
    }
}

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        app: './app.js',
    },

    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, './dist'),
        publicPath: '/public',
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
    
    devtool: 'inline-source-map',
    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    'source-map-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                ],
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                    'less-loader',
                ],
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.json$/,
                use: ["json-loader"],
                exclude: /(node_modules)/,
            },
            {
                test: /\.(svg)$/,
                use: ['raw-loader'],
                exclude: /(node_modules)/,
            }
        ]

    },
    plugins,
}

module.exports = config
