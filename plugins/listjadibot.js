async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(`🌟 *Bot Utama* \n\n• https://wa.me/62856956012941?text=${usedPrefix}menu (${conn.user.name}) \n\n🌟 *Bot Ke 2 (Fitur Sama)* \n\n• https://wa.me/62856956012944?text=${usedPrefix}menu (Shiba Botz) \n\n *🤖JadiBot* \n\n` + users.map(v => '• https://wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot','listjb','listbot']
handler.tags = ['jadibot']

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)