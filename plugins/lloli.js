let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=`84da85ef7462d9a6a4b43767`)
    json = await heum.buffer()
   conn.sendButton(m.chat, json, 'K,kawaii~ > / / / <', 'Next', `${usedPrefix}nsfwloli`, m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['18']
handler.command = /^nsfwloli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler