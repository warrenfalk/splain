var express = require('express')
var app = express();

// Configuration
app.configure(function() {
});

// Routes
app.use(express.logger());
app.use('/', express.static('public/index.html'));
app.use('/data', function(req, res, next) {
	res.send('fail');
});
app.use(express.static('public'));

app.listen(3000);
