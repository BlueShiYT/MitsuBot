let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.lolhuman.xyz/api/random2/bj?apikey=Dawnfrostkey`)
    json = await heum.buffer()
   conn.sendButton(m.chat, json, '', '© MitsuhaBotz', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['blowjob']
handler.tags = ['18']

handler.command = /^(blowjob)$/i

handler.premium = true
handler.admin = false
handler.private = true
handler.register = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler