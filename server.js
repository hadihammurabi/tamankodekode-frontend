const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const app = express();

const staticFileMiddleware = express.static(path.resolve(__dirname, 'dist'));

app.use(staticFileMiddleware);

app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(staticFileMiddleware);

const port = 80;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
