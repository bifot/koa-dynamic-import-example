import('koa')
  .then(({ default: Koa }) => {
    const app = new Koa();

    app.use((ctx) => {
      ctx.body = 'Hello, world!';
    });

    app.listen(3009, () => {
      console.log('Listen 3009.');
    });
  })
  .catch((err) => {
    console.error(err);
  });
