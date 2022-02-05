let handler = async (m, { args, command, usedPrefix }) => {
    let chat = global.DATABASE._data.chats[m.chat]
    if (!chat) throw 'Chat gk ada dalam database'
    if (!args[0]) throw `Gunakan format *${command + usedPrefix} [hari(angka)]*`
    let hari = isNaN(parseInt(args[0])) ? 1 : Math.max(parseInt(args[0]), 1)
    chat.expired = {
        ...chat.expired,
        timeJoin: new Date * 1,
        expired: hari * 1000 * 60 * 60 * 24,
    }
    m.reply(`Berhasil memberi expired ke group ${m.chat} selama *${hari}* hari`)
}

handler.all = async function (m) {
    if (!m.isGroup) return
    if (m.isBaileys && m.fromMe) return
    let chat = global.DATABASE._data.chats[m.chat].expired || {}
    if ((chat.timeJoin || chat.expired) == undefined) return
    if (new Date * 1 >= parseInt(chat.timeJoin) + chat.expired) {
        console.log({ jid: m.chat, join: chat.timeJoin, expired: chat.expired })
        let message = { conn: this, args: [m.chat], command: '' }
        await require('./leavegc.js').call(this, m, message)
        global.DATABASE._data.chats[m.chat].expired = {}
    }
}

handler.help = ['expired [hari]']
handler.tags = ['group']
handler.command = /^expired(gc)?$/i

handler.group = true
handler.mods = true

module.exports = handler