'use strict';

const utility = require('utility');
const random = require('random-gen');

// var random = require('random-gen');
// var day_ttl = 24 * 60 * 60 * 1000;

module.exports = function (User) {


    User.remoteMethod(
        'addAppUser',
        {
            accepts: [
                { arg: 'obj', type: 'object', http: { source: 'body' } },
				{ arg: 'ctx', type: 'object', http: function (ctx) {
						return ctx;
					}
				},
            ],
            http: { path: '/addAppUser', verb: 'post' },
            returns: { arg: 'body', type: 'object', root: true },
            description: "后台——注册App用户"
        }
    )


}