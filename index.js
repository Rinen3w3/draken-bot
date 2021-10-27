const Discord = require('discord.js')
const client = new Discord.Client()
const { identity } = require('./identity')

require('dotenv').config()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('de')
})

client.on('message', msg => {
	require('./cmds/quotes').quotes(msg)
})

client.login(process.env.TOKEN)