let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw 'Mode NSFW tidak aktif'
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/waifu"))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "bokepkartun",
      "sange kok sama kartun, stress...",
      m
    )
  else throw json
}
handler.help = ['nsfwwaifu', 'waifunsfw']
handler.tags = ['18']

handler.command = /^(nsfwwaifu|waifunsfw)$/i

handler.limit = true
handler.register = true
handler.private = true

module.exports = handler