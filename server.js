const express   = require('express');
const path      = require('path');
const app       = express();

app.use(express.static('./dist/portafolio-javier'));

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, '/dist/portafolio-javier/index.html'));
});

app.listen(process.env.PORT || 8080);