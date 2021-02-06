const isProduction = (process.env.NODE_ENV || 'production') === 'production';
const isVercel = process.env.VERCEL;
const assetPrefix = isProduction && !isVercel ? '/website' : '';

module.exports = {
    trailingSlash: true,
    assetPrefix: assetPrefix,
    images: {
        loader: "imgix"
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
