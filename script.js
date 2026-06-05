// Fungsi Membuka Pilihan Mode Buat
function pilihMode(mode) {
  const menuUtama = document.getElementById('menu-utama');
if (menuUtama) {
    menuUtama.classList.add('hidden');
}
    
    // Cek tema aktif berdasarkan class di body
    let temaAktif = 'biasa';
    if (document.body.classList.contains('tema-lebaran')) temaAktif = 'lebaran';
    else if (document.body.classList.contains('tema-cinta')) temaAktif = 'cinta';
    else if (document.body.classList.contains('tema-ultah')) temaAktif = 'ultah';

    const isKueTema = (temaAktif === 'ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        const fiturKueDesain = document.getElementById('fitur-kue-desain');
        if (fiturKueDesain) {
            if (isKueTema) {
                fiturKueDesain.classList.remove('hidden');
            } else {
                // DI SINI YANG TADI SALAH KETIK (fitsurKueDesain -> SEKARANG SUDAH FIKS)
                fiturKueDesain.classList.add('hidden'); 
            }
        }
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
        
        // Pasang dekorasi otomatis untuk mode instan pengirim
        const hiasanAtas = document.getElementById('hiasan-atas-instan');
        const hiasanBawah = document.getElementById('hiasan-bawah-instan');
        if (temaAktif === 'lebaran') {
            hiasanAtas.innerText = "🌙 Selamat Hari Raya Idul Fitri 🌙";
            hiasanBawah.innerText = "✨ Mohon Maaf Lahir & Batin ✨";
        } else if (temaAktif === 'cinta') {
            hiasanAtas.innerText = "💖 Special For You 💖";
            hiasanBawah.innerText = "🌹 I Love You So Much 🌹";
        } else if (temaAktif === 'ultah') {
            hiasanAtas.innerText = "🎉 Happy Birthday! 🎉";
            hiasanBawah.innerText = "🎂 Wish You All The Best 🎂";
        } else {
            hiasanAtas.innerText = "✉️ --- Surat Ucapan --- ✉️";
            hiasanBawah.innerText = "✉️ --------------------- ✉️";
        }

        const fiturKueInstan = document.getElementById('fitur-kue-instan');
        if (fiturKueInstan) {
            if (isKueTema) {
                fiturKueInstan.classList.remove('hidden');
            } else {
                fiturKueInstan.classList.add('hidden');
            }
        }
    }
}
