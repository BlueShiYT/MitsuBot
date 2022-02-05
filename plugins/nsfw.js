let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButton(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=Dawnfrostkey`)).buffer(), `Wangy Wangy`, '© MitsuhaBotz', '➡️ Next', `${usedPrefix}hentai`, m, false)
}

handler.help= ['hentaipic']
handler.tags = ['18']
handler.premium = true
handler.private = true
handler.register = true

handler.command = /^hentai(pic)?$/i
module.exports = handler