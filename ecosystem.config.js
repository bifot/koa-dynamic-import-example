module.exports = {
  apps: [{
    script: './src/app.mjs',
    name: 'Dynamic Import Koa',
    node_args: '--experimental-modules',
  }],
};
