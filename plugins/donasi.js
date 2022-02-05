let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat/Pulsa [085695601294]
│ • Dana/Ovo [085695601294]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62856956012944
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = true

module.exports = handler
