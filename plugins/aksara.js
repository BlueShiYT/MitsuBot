let fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
┌〔 Pilihan 〕
├ latinkejawa
├ latinkesunda
├ jawakelatin
├ sundakelatin
└────

contoh:
${usedPrefix + command} latinkejawa selamat pagi
${usedPrefix + command} latinkesunda selamat pagi
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'latinkejawa':
        case 'latinkesunda':
        case 'jawakelatin':
        case 'sundakelatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(global.API('xteam', '/aksara/' + args[0].toLowerCase(), { text }, 'APIKEY'))
            if (!res.ok) throw eror
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['internet']
handler.command = /^aksara$/i

handler.limit = true
handler.register = true

module.exports = handler