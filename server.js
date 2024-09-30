const Express = require('express');

const APP = Express();

APP.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const ExpressServer = APP.listen(8080, () => console.log(`AxonSync sucesfully started!`));

APP.get('/', (req, res) => { res.send('<br><center><h1 style="margin-bottom:0px">EM DESENVOLVIMENTO</h1><br><h3 style="margin-top:0px">por AxonDevelopmentLab.<br><br><br><a href="https://axonlab.glitch.me">https://axonlab.glitch.me/</a><br><a href="https://axonlab.glitch.me/discord">https://axonlab.glitch.me/discord</a><br><a href="https://github.com/AxonDevelopmentLab">https://github.com/AxonDevelopmentLab/</a><br><a href="https://github.com/akkui">https://github.com/akkui/</a></center><br>') });
