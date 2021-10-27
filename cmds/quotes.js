const fetch = require('node-fetch')
const { identity } = require('../identity')

const quotes = {
  'quote': async (msg, words) => {
    if(words[1] == 'sw') {
      msg.channel.send(require('starwars')())
      return
    }

    let response = await fetch('https://api.quotable.io/random?maxLength=100')
    let {content, author} = await response.json()
    
    msg.channel.send(`${content} - **${author}**`)
  },
}