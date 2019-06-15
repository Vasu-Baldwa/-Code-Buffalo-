const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            aliases: ['roll', 'rtd'],
            group: 'utility',
            memberName: 'dice',
            description: 'Replies with a roll of d<whatever>.',
            examples: ['roll 20'],
            args: [
                {
                    key: 'value',
                    prompt: 'What is the maximum you want to appear?',
                    type: 'integer',
                    default: 6
                }
            ]
        });
    }

    run(msg, {value}) {
        return msg.say(Math.floor(Math.random() * value) + 1);
    }
};
