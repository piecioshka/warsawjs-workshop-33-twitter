const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const root = path.join(__dirname, '..');

module.exports = {
    entry: [
        path.join(root, 'src', 'scripts', 'main.js'),
        path.join(root, 'src', 'index.html')
    ],
    output: {
        path: path.join(root, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.join(root, 'src', 'scripts')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                    'extract-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'link:href']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
