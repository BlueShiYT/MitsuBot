let handler = async m => {
m.reply(`${m.quoted.isBaileys}`)
}

handler.help = ['isbaileys', 'baileys']
handler.tags = [''] //mau apa yah?
handler.register = true
handler.command = ['isbaileys', 'baileys']

module.exports = handler
