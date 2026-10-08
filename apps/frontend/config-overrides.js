/* config-overrides.js for Webpack 4 */
const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
    });

    config.resolve.modules = [
        path.resolve(__dirname, 'src'),
        'node_modules'
    ];

    const emptyPath = path.resolve(__dirname, 'src/empty.js');
    const proxyPath = path.resolve(__dirname, 'src/generic-proxy-stub.js');
    const solanaStubPath = path.resolve(__dirname, 'src/solana-stub.tsx');

    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@solana-mobile/mobile-wallet-adapter-protocol/encoding': emptyPath,
        '@solana-mobile/mobile-wallet-adapter-protocol': emptyPath,
        '@solana-mobile/wallet-adapter-mobile': emptyPath,
        '@solana/wallet-adapter-react': solanaStubPath,
        '@solana/wallet-adapter-base': solanaStubPath,
        '@solana/wallet-adapter-wallets': solanaStubPath,
        '@solana/wallet-adapter-react-ui/styles.css': emptyPath,
        '@solana/wallet-adapter-react-ui': emptyPath,
        '@solana/web3.js': solanaStubPath,
        '@solana/wallet-standard-util': emptyPath,
        '@solana/errors': proxyPath,
        '@solana/codecs-core': proxyPath,
        '@solana/codecs-numbers': proxyPath,
        '@solana/codecs-strings': proxyPath,
        '@solana/options': proxyPath,
        '@solana/keys': proxyPath,
        '@solana/sysvars': proxyPath,
        react: path.dirname(require.resolve('react/package.json')),
        'react-dom': path.dirname(require.resolve('react-dom/package.json')),
        '@ledgerhq/hw-transport': emptyPath,
        '@ledgerhq/hw-transport-webhid': emptyPath
    };

    config.resolve.extensions = [
        '*', '.js', '.jsx', '.ts', '.tsx', '.mjs'
    ];

    return config;
};