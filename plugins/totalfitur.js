let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `_*total features: ${totalfeatures}*_`, '©games-wabot', 'Menu', '.menu', m) 
}

handler.help = ['totalfitur']
handler.register = true
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler