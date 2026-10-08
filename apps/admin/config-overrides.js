const postcss = require('postcss');
if (!postcss.vendor) {
  postcss.vendor = {
    unprefixed: (prop) => prop.replace(/^-\w+-/, ''),
    prefix: (prop) => {
      const match = prop.match(/^(-\w+-)/);
      return match ? match[1] : '';
    }
  };
}

const path = require('path');
const rewireAliases = require('react-app-rewire-aliases');

module.exports = function override(config, env) {
  try {
    require('react-app-rewire-postcss')(config, {
      plugins: loader => [require('postcss-rtl')()]
    });
  } catch (e) {
    // Ignore postcss-rtl if error
  }

  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/@core/assets'),
    '@components': path.resolve(__dirname, 'src/@core/components'),
    '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
    '@store': path.resolve(__dirname, 'src/redux'),
    '@styles': path.resolve(__dirname, 'src/@core/scss'),
    '@config': path.resolve(__dirname, 'src/configs'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@loading': path.resolve(__dirname, 'src/loading'),
    '@utils': path.resolve(__dirname, 'src/utility/Utils'),
    '@hooks': path.resolve(__dirname, 'src/utility/hooks')
  })(config, env);

  return config;
};
