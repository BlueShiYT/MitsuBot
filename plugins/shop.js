let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Sgold = 3000
const Bgold = 6000
const Bstring = 500
const Sstring = 200
const Bbatu = 500
const Sbatu = 200
const Bkayu = 500
const Skayu = 200
const Sarloji = 90000
const Biron = 800
const Siron = 700
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bnaga = 30
const Bgriffin = 25
const Bserigala = 20
const Bcentaur = 20
const Bkyubi = 350
const Bphonix = 30
const Bmnaga = 100
const Bmgriff = 100
const Bmcentaur = 100
const Bmserigala = 100
const Bmphonix = 100
const Bmkyubi = 100
const Bmythic = 2500 
const Smythic = 900
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Btprem = 9000000000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.DATABASE._data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*🎒 SHOP*

*🧪 Penggunaan :*
_${usedPrefix}shop <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${usedPrefix}shop buy potion 1*_\n\n
🛍️ List Barang:\n━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga beli*\n━━━━━━━━━━━━━━━━━
*•* .🥤 Potion:       ${potion}
*•* .🪙  Gold :         ${Bgold}
*•* .💎 Diamond:    ${Bdiamond}
*•* .🪨 Batu:           ${Bbatu}
*•* .🪵 Kayu:           ${Bkayu}
*•* .🕸️ String:         ${Bstring}
*•* .⛓️ Iron:             ${Biron}
*•* .📦 Common:     ${Bcommon} 
*•* .🛍️ Uncommon: ${Buncommon}
*•* .🎁 Mythic:          ${Bmythic}
*•* .🧰 Legendary:    ${Blegendary}
*•* .🗑️ Sampah:        ${Bsampah}
*•* .🐉 Naga:        ${Bnaga} Gols
*•*  �   Griffin:        ${Bgriffin} Gold
*•* .� ️ Centaur:        ${Bcentaur} Gold
*•* .� ️ Phonix:        ${Bphonix} Gold
*•* .🐺 Serigala:        ${Bserigala} Gold
*•* . ️ mnaga (Makanan Naga):       ${Bmnaga}
*•* .  ️ mgriffin (Makanan Griffin):        ${Bmgriff} 💎
*•* .  ️ mcentaur (Makanan Centaur):        ${Bmcentaur} 💎
*•* .  ️ mhonix (Makanan Phonix):        ${Bmphonix} 💎
*•* .  ️ Mserigala (Makanan Serigala):        ${Bmserigala} 💎
*•* .🥼 Armor:            ${armor}\n━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga Jual*\n━━━━━━━━━━━━━━━━━
*•* .🥤 Potion:        ${Spotion}
*•* .🪙  Gold:          ${Sgold}
*•* .🪨 Batu:           ${Sbatu}
*•* .🪵 Kayu:           ${Skayu}
*•* .🕸️ String:         ${Sstring}
*•* .⛓️ Iron:            ${Siron}
*•* .💎 Diamond:    ${Sdiamond}
*•* .📦 Common:     ${Scommon}
*•* .🛍️ Uncommon:${Suncommon}
*•* .🎁 Mythic:        ${Smythic}
*•* .🧰 Legendary:  ${Slegendary}
*•* .🗑️ Sampah:      ${Ssampah}\n━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━\n\n
`.trim()
    try {
        if (/shop|toko|buy/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE._data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                                global.DATABASE._data.users[m.sender].money -= potion * count
                                global.DATABASE._data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${potion * count} money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case 'mnaga':
                            if (global.DATABASE._data.users[m.sender].diamond >= Bmnaga * count) {
                                global.DATABASE._data.users[m.sender].makanannaga += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= Bmnaga * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Makanan Naga Dengan Harga ${Bmnaga * count} Diamond`, m)
                            } else conn.reply(m.chat, `Diamond Anda Tidak Cukup`, m)
                        break
                    case 'mgriffin':
                            if (global.DATABASE._data.users[m.sender].diamond >= Bmgriffin * count) {
                                global.DATABASE._data.users[m.sender].makanangriffin += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= Bmgriffin * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Makanan Griffin Dengan Harga ${Bmgriffin * count} Diamond`, m)
                            } else conn.reply(m.chat, `Diamond Anda Tidak Cukup`, m)
                        break
                    case 'mphonix':
                            if (global.DATABASE._data.users[m.sender].diamond >= Bmphonix * count) {
                                global.DATABASE._data.users[m.sender].makananphonix += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= Bmphonix * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Makanan Phonix Dengan Harga ${Bmphonix * count} Diamond`, m)
                            } else conn.reply(m.chat, `Diamond Anda Tidak Cukup`, m)
                        break
                    case 'mcentaur':
                            if (global.DATABASE._data.users[m.sender].diamond >= Bmcentaur * count) {
                                global.DATABASE._data.users[m.sender].makanancentaur += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= Bmcentaur * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Makanan Cemtaur Dengan Harga ${Bmcentaur * count} Diamond`, m)
                            } else conn.reply(m.chat, `Diamond Anda Tidak Cukup`, m)
                        break
                    case 'mserigala':
                            if (global.DATABASE._data.users[m.sender].diamond >= Bmserigala * count) {
                                global.DATABASE._data.users[m.sender].makananserigala += count * 1
                                global.DATABASE._data.users[m.sender].diamond -= Bmserigala * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Makanan Serigala Dengan Harga ${Bmserigala * count} Diamond`, m)
                            } else conn.reply(m.chat, `Diamond Anda Tidak Cukup`, m)
                        break
                case 'naga':
                        if (global.DATABASE._data.users[m.sender].gold >= Bnaga * count) {
                            global.DATABASE._data.users[m.sender].naga += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bnaga * count
                            conn.reply(m.chat, `Sukses membeli ${count} Pet Naga Dengan Harga ${Bnaga * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup Untuk beli ${count} Pet Naga Dengan Harga ${Bnaga * count} Gold`.trim(), m)
                    break
                case 'griffin':
                        if (global.DATABASE._data.users[m.sender].gold >= Bgriffin * count) {
                            global.DATABASE._data.users[m.sender].griffin += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bgriffin * count
                            conn.reply(m.chat, `Sukses Msmbeli ${count} Pet Griffin Dengan Harga ${Bgriffin * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup Untuk Beli ${count} Pet Griffin Dengan Harga ${Bgriffin * count} Gold`.trim(), m)
                    break
                case 'centaur':
                        if (global.DATABASE._data.users[m.sender].gold >= Bcentaur * count) {
                            global.DATABASE._data.users[m.sender].centaur += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bcentaur * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Centaur Dengan Harga ${Bcentaur * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Centaur Dengan Harga ${Bcentaur * count} Gold`.trim(), m)
                    break
                case 'phonix':
                        if (global.DATABASE._data.users[m.sender].gold >= Bphonix * count) { 
                            global.DATABASE._data.users[m.sender].phonix += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bphonix * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Phoenix Dengan Harga ${Bphonix * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Phoemix Dengan Harga ${Bphonix * count} Gold`.trim(), m)
                    break
                case 'serigala':
                        if (global.DATABASE._data.users[m.sender].gold >= Bserigala * count) {
                            global.DATABASE.data.users[m.sender].serigala += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bserigala * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Serigala Dengan Harga ${Bserigala * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Serigala Dengan Harga ${Bserigala * count} Gold`.trim(), m)
                    break
                    case `gold`:
                            if (global.DATABASE._data.users[m.sender].money >= Bgold * count) {
                            global.DATABASE._data.users[m.sender].money -= Bgold * count
                            global.DATABASE._data.users[m.sender].gold += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold Dengan Harga ${Bgold * count} money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                    case 'tprem':
                            if (global.DATABASE._data.users[m.sender].money >= Btprem * count) {
                                global.DATABASE._data.users[m.sender].tprem += count * 1
                                global.DATABASE._data.users[m.sender].money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'diamond':
                            if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE._data.users[m.sender].diamond += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'batu':
                           if (global.DATABASE._data.users[m.sender].money >= Bbatu * count) {
                               global.DATABASE._data.users[m.sender].batu += count * 1
                               global.DATABASE._data.users[m.sender].money -= Bbatu * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Batu Dengan Harga ${Bbatu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (global.DATABASE._data.users[m.sender].money >= Bkayu * count) {
                                global.DATABASE._data.users[m.sender].kayu += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Kayu Dengan Harga ${Bkayu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (global.DATABASE._data.users[m.sender].money >= Bstring * count) {
                                global.DATABASE._data.users[m.sender].string += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Sukses Membeli ${count} String Dengan Harga ${Bstring * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'iron':
                           if (global.DATABASE._data.users[m.sender].money >= Biron * count) {
                               global.DATABASE._data.users[m.sender].iron += count * 1
                               global.DATABASE._data.users[m.sender].money -= Biron * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga ${Biron * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'common':
                            if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE._data.users[m.sender].common += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE._data.users[m.sender].uncommon += count * 1
                                global.DATABASE._data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE._data.users[m.sender].mythic += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE._data.users[m.sender].legendary += count * 1
                                global.DATABASE._data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE._data.users[m.sender].sampah += count * 1
                                global.DATABASE._data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE._data.users[m.sender].money > armor) {
                                global.DATABASE._data.users[m.sender].armor += 1
                                global.DATABASE._data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Spotion * count
                            global.DATABASE._data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'gold':
                        if (global.DATABASE._data.users[m.sender].gold >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sgold * count
                            global.DATABASE._data.users[m.sender].gold -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gold Dengan Harga ${Sgold * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'arloji':
                        if (global.DATABASE._data.users[m.sender].arlok >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sarloji * count
                            global.DATABASE._data.users[m.sender].arlok -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Arloji Dengan Harga ${Sgold * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Arloji Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'batu':
                        if (global.DATABASE._data.users[m.sender].batu >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sbatu * count
                            global.DATABASE._data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Batu Dengan Harga ${Sbatu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.DATABASE._data.users[m.sender].kayu >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Skayu * count
                            global.DATABASE._data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kayu Dengan Harga ${Skayu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.DATABASE._data.users[m.sender].string >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Sstring * count
                            global.DATABASE._data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} String Dengan Harga ${Sstring * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `String Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'iron':
                        if (global.DATABASE._data.users[m.sender].iron >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Siron * count
                            global.DATABASE._data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Iron Dengan Harga ${Siron * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Iron Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Scommon * count
                            global.DATABASE._data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Suncommon * count
                            global.DATABASE._data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Smythic * count
                            global.DATABASE._data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                            global.DATABASE._data.users[m.sender].money += Slegendary * count
                            global.DATABASE._data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE._data.users[m.sender].sampah -= count * 1
                            global.DATABASE._data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Sampah , Dan Anda Mendapatkan ${Ssampah * count} Money `, m)
                        } else conn.reply(m.chat, `Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE._data.users[m.sender].diamond -= count * 1
                            global.DATABASE._data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.sendButton(m.chat, Kchat,wm, 'Inventory', '.inv', m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(9999999999999999999999999999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE._data.users[m.sender].money >= potion * count) {
                            global.DATABASE._data.users[m.sender].money -= potion * count
                            global.DATABASE._data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'tprem':
                            if (global.DATABASE._data.users[m.sender].money >= Btprem * count) {
                                global.DATABASE._data.users[m.sender].tprem += count * 1
                                global.DATABASE._data.users[m.sender].money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                case 'diamond':
                        if (global.DATABASE._data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE._data.users[m.sender].diamond += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.DATABASE._data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE._data.users[m.sender].common += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE._data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE._data.users[m.sender].uncommon += count * 1
                            global.DATABASE._data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE._data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE._data.users[m.sender].mythic += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE._data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE._data.users[m.sender].legendary += count * 1
                            global.DATABASE._data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE._data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE._data.users[m.sender].sampah += count * 1
                            global.DATABASE._data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'naga':
                        if (global.DATABASE._data.users[m.sender].gold >= Bnaga * count) {
                            global.DATABASE._data.users[m.sender].naga += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bnaga * count
                            conn.reply(m.chat, `Sukses membeli ${count} Pet Naga Dengan Harga ${Bnaga * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup Untuk beli ${count} Pet Naga Dengan Harga ${Bnaga * count} Gold`.trim(), m)
                    break
                case 'griffin':
                        if (global.DATABASE._data.users[m.sender].gold >= Bgriffin * count) {
                            global.DATABASE._data.users[m.sender].griffin += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bgriffin * count
                            conn.reply(m.chat, `Sukses Msmbeli ${count} Pet Griffin Dengan Harga ${Bgriffin * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup Untuk Beli ${count} Pet Griffin Dengan Harga ${Bgriffin * count} Gold`.trim(), m)
                    break
                case 'centaur':
                        if (global.DATABASE._data.users[m.sender].gold >= Bcentaur * count) {
                            global.DATABASE._data.users[m.sender].centaur += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bcentaur * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Centaur Dengan Harga ${Bcentaur * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Centaur Dengan Harga ${Bcentaur * count} Gold`.trim(), m)
                    break
                case 'phonix':
                        if (global.DATABASE._data.users[m.sender].gold >= Bphonix * count) { 
                            global.DATABASE._data.users[m.sender].phonix += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bphonix * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Phoenix Dengan Harga ${Bphonix * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Phoemix Dengan Harga ${Bphonix * count} Gold`.trim(), m)
                    break
                case 'serigala':
                        if (global.DATABASE._data.users[m.sender].gold >= Bserigala * count) {
                            global.DATABASE.data.users[m.sender].serigala += count * 1
                            global.DATABASE._data.users[m.sender].gold -= Bserigala * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Pet Serigala Dengan Harga ${Bserigala * count} Gold`, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Mencukupi Untuk Beli ${count} Pet Serigala Dengan Harga ${Bserigala * count} Gold`.trim(), m)
                    break
                case 'armor':
                        if (global.DATABASE._data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level MAX', m)
                        if (global.DATABASE._data.users[m.sender].money > armor * 1) {
                            global.DATABASE._data.users[m.sender].armor += 1
                            global.DATABASE._data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999999999999999999999999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Spotion * count
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Scommon * count
                        global.DATABASE._data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Suncommon * count
                        global.DATABASE._data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Smythic * count
                        global.DATABASE._data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE._data.users[m.sender].money += Slegendary * count
                        global.DATABASE._data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE._data.users[m.sender].sampah -= count * 1
                        global.DATABASE._data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE._data.users[m.sender].diamond -= count * 1
                        global.DATABASE._data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat,m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat,m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler

let wm = global.botwm