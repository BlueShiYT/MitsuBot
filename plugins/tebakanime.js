let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler = async (m, { conn, usedPrefix, command }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch('http://zekais-api.herokuapp.com/tebakanime')
    let json = await res.json()
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}wa untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakanime[id] = [
        await conn.sendButton(m.chat,caption, author, json.image, [['bantuan','.wa']], {quoted:m})
        json, poin,
        setTimeout(async () => {
            if (conn.tebakanime[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, '© nekobotz', 'Tebak Anime', `${usedPrefix + command}`, m)
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime$/i

module.exports = handler