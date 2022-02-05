let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '070698' || args[0] == '661528' || args[0] == '878588' || args[0] == '775636' || args[0] == '098786' || args[0] == '975485' || args[0] == '000001' || args[0] == '202298' || args[0] == '999999') {

    if (new Date - global.DATABASE._data.users[m.sender].lastcodereg > 889000000000) {
    if (new Date - global.DATABASE._data.users[m.sender].lastcodereg < 889000000000) throw `Anda sudah mengambill code register, Code register anda sudah kadaluarsa..`

    global.DATABASE._data.users[m.sender].exp += 10000
    global.DATABASE._data.users[m.sender].money += 5000
    global.DATABASE._data.users[m.sender].limit += 5
    global.DATABASE._data.users[m.sender].pet += 2
    global.DATABASE._data.users[m.sender].legendary += 2
    global.DATABASE._data.users[m.sender].diamond += 5
    global.DATABASE._data.users[m.sender].lastcodereg = new Date * 1
    chatnye =`Selamat kamu mendapatkan :\n+10000 Exp ✨\n+5000 Money 💹\n+5 Limit 🎫\n+2 Pet Crate 📫\n+2 Legendary 🧰\n+5 Diamond 💎`
   conn.reply(m.chat, chatnye, m)
} else conn.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
        conn.reply(m.chat, `*「 KODE TIDAK VALID 」*`, m)
    }
}

handler.command = /^(codereg)$/i
handler.register = true
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}