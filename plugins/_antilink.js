let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nTerdeteksi *${await this.getName(m.sender)}* kamu telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini byee!\nKasihan Bro Gk Bisa Baca Rules, Mungkin Orangnya *Goblok*`)
    if (isAdmin) return m.reply('*Eh maaf *LORD ADMIN* kamu adalah admin, kamu gk bakal dikick. hehe maaf bang..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, mana bisa kick orang tod _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol ngirim link group sendiri :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler