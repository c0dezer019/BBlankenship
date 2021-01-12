const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'development';

const port = !dev ? process.env.PORT : 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) throw err;
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
