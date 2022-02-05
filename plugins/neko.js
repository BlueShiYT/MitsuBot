let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Punya Aku>_< Jangan Di Culik!!', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.register = true
handler.limit = true
handler.command = /^neko$/i

module.exports = handler
