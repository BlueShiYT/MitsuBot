let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply(global.wait)
  let res = await (await fetch(`https://api.xteam.xyz/randomimage/uniform?apikey=Dawnfrostkey`)).buffer()
  conn.sendButton(m.chat, res, `wangy wangy wangy`, '© Mitsuhabotz', '➡️Next',`${usedPrefix}uniform`, m, false)
}
handler.help = ['uniform']
handler.tags = ['18']

handler.command = /^(uniform)$/i

handler.limit = true
handler.register = true
handler.private = true

module.exports = handler