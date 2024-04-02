const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
};
