const { resolve } = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },

  async viteFinal(config, { configType }) {
    const commonOverride = {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
        },
      },
    };

    if (configType !== 'PRODUCTION') {
      return mergeConfig(config, {
        ...commonOverride,
      });
    }

    return mergeConfig(config, {
      base: '/poc-react-library/',
      ...commonOverride,
    });
  },
};
