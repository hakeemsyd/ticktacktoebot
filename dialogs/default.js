var debug = require('debug')('default.js');

module.exports = 
[
	function(session, args, next){
		if(session.userData.level){
			session.send('loading game with: ' + session.userData.level);
			next();
		}else{
			session.beginDialog('/level');			
		}
	},
	function(session, results){
		debug('Game must start with level: ' + session.userData.level);
	}
];
