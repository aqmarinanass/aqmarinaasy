// Fungsi Membuka Pilihan Mode Buat
function pilihMode(mode) {
    // 1. FIX KETIGA (PROTEKSI ANTI CRASH): Pastikan menu-utama ada dulu baru ditambah class hidden
    const menuUtama = document.getElementById('menu-utama');
    if (menuUtama) {
        menuUtama.classList.add('hidden');
    }
    
    // Cek tema aktif berdasarkan class di body
    let temaAktif = 'biasa';
    if (document.body && document.body.classList) {
        if (document.body.classList.contains('tema-lebaran')) temaAktif = 'lebaran';
        else if (document.body.classList.contains('tema-cinta')) temaAktif = 'cinta';
        else if (document.body.classList.contains('tema-ultah')) temaAktif = 'ultah';
    }

    const isKueTema = (temaAktif === 'ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
        // 2. FIX PERTAMA: Memastikan pemanggilan id sudah sesuai dengan di HTML (fiturKueDesain)
        const fiturKueDesain = document.getElementById('fitur-kue-desain');
        if (fiturKueDesain) {
            if (isKueTema) {
                fiturKueDesain.classList.remove('hidden');
            } else {
                fiturKueDesain.classList.add('hidden'); 
            }
        }
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
        
        // Pasang dekorasi otomatis untuk mode instan pengirim
        const hiasanAtas = document.getElementById('hiasan-atas-instan');
        const hiasanBawah = document.getElementById('hiasan-bawah-instan');
        
        // 3. FIX KEDUA (PROTEKSI ANTI CRASH): Dibungkus IF agar tidak macet/crash saat membaca teks hiasan
        if (hiasanAtas && hiasanBawah) {
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
