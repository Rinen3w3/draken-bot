const fs = require('fs')
const path = require('path')

exports.identity = {
  name: 'draken bot',
  status: 'online',
  prefix: 'de',
  thumbnail: 'https://cdn.discordapp.com/attachments/891693455275872306/892741390658834442/4104-blurtroll.png',
  package: JSON.parse(
    fs.readFileSync(path.join(__dirname, 'package.json'))
  ),
  client: null,
}