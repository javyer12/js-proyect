import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
const app = express();

dotenv.config();
const { ENV, PORT } = process.env;

if (ENV === 'development') {
    console.log('development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const { publicPath } = webpackConfig.output;
    const serverConfig = { serverSideRender: true, publicPath };
    // const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server running on port 3000');
});