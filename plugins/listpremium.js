let handler = async (m, { conn }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `「 List Premium 」
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['info']
handler.command = /^(listprem|premlist)$/i
handler.owner = false
handler.register = true

module.exports = handler