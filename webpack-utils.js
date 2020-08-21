const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let generateHtmls = (src) => {
    let abssrc = path.resolve(__dirname, src);
    if (!fs.existsSync(abssrc)) {
        return [];
    }

    pages = fs.readdirSync(abssrc);
    return pages.map((file) => {
        let [ext] = file.split('.').slice(-1);
        let name = file.slice(0, -(ext.length + 1));

        fpath = path.resolve(__dirname, src);

        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: `${fpath}/${name}.${ext}`
        });
    });
};
module.exports = { generateHtmls };