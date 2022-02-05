const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', '/api/canvas/trash', { url }) //`https://api.dhamzxploit.my.id/api/canvas/trash?url=${url}`
  let stiker = await sticker(null, wanted, 'trash', '©games-wabot')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['trash']
handler.register = true
handler.tags = ['sticker']
handler.command = /^trash$/i

module.exports = handler
