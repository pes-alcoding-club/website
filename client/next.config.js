const isProduction = (process.env.NODE_ENV || 'production') === 'production';
const isVercel = process.env.VERCEL;
const assetPrefix = isProduction && !isVercel ? '/website' : '';
const webpack = require('webpack');

module.exports = {
    trailingSlash: true,
    assetPrefix: assetPrefix,
    images: {
        domains: ['localhost'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        );
        return config;
    },
};
