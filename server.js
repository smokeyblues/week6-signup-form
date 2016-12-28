var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3030,
    Router = require('./routes'),
    app = express();

app.use(
  express.static('public'),
  morgan('dev')
  );

Router(app);

app.listen(port, ()=>{
  console.log(`Server up and running on port: ${port}`);
})