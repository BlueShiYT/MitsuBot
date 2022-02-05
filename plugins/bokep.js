let handler = async (m, { conn }) => {
	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	const sukses = './src/sukses.webp'
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['bkp']
handler.tags = ['18']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = false
handler.private = true
module.exports = handler