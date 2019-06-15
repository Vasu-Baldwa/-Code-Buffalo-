const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bored',
            aliases: ['b'],
            group: 'bored',
            memberName: 'bored',
            description: 'gives you something to do',
            examples: ['roll 20'],
            args: [
            //     {
            //         key: 'value',
            //         prompt: 'What is the maximum you want to appear?',
            //         type: 'integer',
            //         default: 6
            //     }
            // ]
        });
    }

    run(msg) {
        return msg.say('placeholder');
    }
};
