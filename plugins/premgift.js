let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'SM2009' || args[0] == 'mitsu14' || args[0] == 'Fx91#Shiba' || args[0] == 'A820bdoqP' || args[0] == 'BlueShiYT14' || args[0] == 'SubsBlueShiYT') {

    if (new Date - global.DATABASE._data.users[m.sender].lastpremcode > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n100000 XP ✨\n 100 Limit! 🎫\n1000000 Money 💹\n100 Gold 🪙\n100 Diamond 💎', m)
    global.DATABASE._data.users[m.sender].exp += 100000
    global.DATABASE._data.users[m.sender].limit += 100
    global.DATABASE._data.users[m.sender].money +=1000000
    global.DATABASE._data.users[m.sender].gold += 100
    global.DATABASE._data.users[m.sender].legendary += 50
    global.DATABASE._data.users[m.sender].diamond += 100
    global.DATABASE._data.users[m.sender].lastpremcode = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan belinya terlebih dahulu untuk mendapatkan kodegift !\n\nKetik *!buygift*`, m)
    }
}
handler.help = ['premgift <kode>']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(premgift)$/i

module.exports = handler