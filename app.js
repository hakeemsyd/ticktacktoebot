var restify = require('restify');
var builder = require('botbuilder');
var debug = require('debug')('app.js');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
	console.log('%s listening to %s', server.name, server.url); 
});

//Create chat bot
var connector = new builder.ChatConnector({
	appId: process.env.MICROSOFT_APP_ID,
	appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
var intents = new builder.IntentDialog();
server.post('/api/messages/', connector.listen());

bot.dialog('/', intents);
bot.dialog('/level', require('./dialogs/level'));

intents.matches('/level', require('./dialogs/level'));
intents.onDefault(require('./dialogs/default'));

