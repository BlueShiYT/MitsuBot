let axios = require('axios')
let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {


	let res = await (await fetch(`https://kuhong-api.herokuapp.com/api/randomquran?apikey=7kAPq2CGulUULDM-42moP`)).json()
	let {
    surat,
    ayat,
    teks,
  } = res.result.id
  let ar = res.result.ar
	 	let hasil = `${ar.teks}
	${teks}
	Surat : ${surat}
	Ayat : ${ayat}`.trim()

    conn.sendButton(m.chat, hasil, '© BotzWA', 'Get Again', `${usedPrefix + command}`, m)
}
handler.help = ['randomquran']
handler.tags = ['islam']
handler.command = /^randomquran/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler