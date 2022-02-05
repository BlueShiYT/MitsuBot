let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Nama siapa?')
  let res = await fetch(global.API('bg',  '/artinama', { nama: text }))
  let json = await res.json()
  if (json.status !== true) throw json
  conn.reply(m.chat, json.result.trim(), m)
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.register = true
handler.command = /^(artinama)$/i

module.exports = handler
