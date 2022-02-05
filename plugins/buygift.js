let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│• 📖 *Keterangan* :
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya
│habis!
│• 💵 *Harga* :
│• 5K / Minggu (7 Hari)
│• 10K / Bulan (4 Minggu)
│• 20K / VIP (Permanen)
│• +5K (Custom CodeGift)
╰────
╭─「 Pembayaran • Pulsa 」
│ • Indosat/Pulsa [085695601294]
│ • Dana/Ovo/Gopay [085695601294]
╰────
╭─「 Hubungi 」
│ > Ingin beli? Wa.me/6285695601294
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['rpg']
handler.command = /^(buygift)$/i
handler.register = true

module.exports = handler