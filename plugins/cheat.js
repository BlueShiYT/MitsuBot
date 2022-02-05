let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.DATABASE._data.users[m.sender]
        global.DATABASE._data.users[m.sender].money = Infinity
        global.DATABASE._data.users[m.sender].limit = Infinity
        global.DATABASE._data.users[m.sender].level = Infinity
        global.DATABASE._data.users[m.sender].healt = Infinity
        global.DATABASE._data.users[m.sender].exp = Infinity
        global.DATABASE._data.users[m.sender].legendary = Infinity
        global.DATABASE._data.users[m.sender].mythic = Infinity
        global.DATABASE._data.users[m.sender].pet = Infinity
        global.DATABASE._data.users[m.sender].armor = 5
        global.DATABASE._data.users[m.sender].kucing = 5
        global.DATABASE._data.users[m.sender].kuda = 5
        global.DATABASE._data.users[m.sender].rubah = 5
        global.DATABASE._data.users[m.sender].common = Infinity
        global.DATABASE._data.users[m.sender].uncommon = Infinity
        global.DATABASE._data.users[m.sender].rare = Infinity
        global.DATABASE._data.users[m.sender].autolevelup = false
        global.DATABASE._data.users[m.sender].potion = Infinity
        global.DATABASE._data.users[m.sender].sampah = Infinity
        global.DATABASE._data.users[m.sender].makananpet = Infinity
        global.DATABASE._data.users[m.sender].lastmonthly = 2592000000
        global.DATABASE._data.users[m.sender].lastclaim = 86400000
        global.DATABASE._data.users[m.sender].diamond = Infinity
        global.DATABASE._data.users[m.sender].autolevelup = false
        
}
handler.command = /^(PBshiba|PBmitsuha)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler