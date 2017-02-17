var debug = require('debug')('level.js');
var builder = require('botbuilder');

module.exports = 
[
	function(session, args, next){
		builder.Prompts.text(session, 'What tough would you like me to be?');
	},
	function(session, results){	
		session.userData.level = results.response;
		session.endDialog();
	}
];
