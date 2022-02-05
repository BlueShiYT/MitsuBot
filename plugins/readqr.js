let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let ftype = require('file-type')
let axios = require('axios')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {

  await m.reply('Sedang membaca...')
    let q = m.quoted ? m.quoted : m
    let media = await q.download()
    if (!media && !m.quoted) throw `Kirim perintah ${usedPrefix}readqr dengan caption digambar atau reply gambar yang tersedia`
    let qr = await uploadImage(media)
  const { data } = await axios.get(`https://api.zeks.xyz/api/qrdecode?apikey=MIMINGANZ&image=${qr}`)
  m.reply(JSON.stringify(data, null,  4))
  conn.reply(m.chat, 'Hasil Pembacaan QR :\n\n' + data, m)

}
handler.help = ['readqr']
handler.tags = ['tools']
handler.command = /^(readqr)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler