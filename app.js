var path = require('path');
var fs = require('fs');
var server = require('./routes/config.js');
//var config = require('./server/config/config');
//var app = express();
var app = server.routesConfig();

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function(){
    console.log('Server');
});

