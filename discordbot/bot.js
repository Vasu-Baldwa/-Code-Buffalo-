const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const client = new CommandoClient({
    commandPrefix: 'b:',
    owner: '99327125340831744', //mostly fireproof#2095
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['utility', 'Commands from a tutorial'],
        ['bored', 'relevant to hackathon']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('b: | I'm bored');
});

client.login(config.token);
