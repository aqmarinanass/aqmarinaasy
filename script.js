function pilihMode(mode) {
    // 1. Sembunyikan menu utama pilihan mode terlebih dahulu
    document.getElementById('menu-utama').classList.add('hidden');
    
    // 2. Cek apakah class di body saat ini adalah 'tema-ultah'
    const apakahTemaUltah = document.body.classList.contains('tema-ultah');

    // 3. Logika untuk MODE DESAIN
    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
        const fiturKueDesain = document.getElementById('fitur-kue-desain');
        if (fiturKueDesain) {
            if (apakahTemaUltah) {
                fiturKueDesain.classList.remove('hidden'); // Muncul jika tema ultah
            } else {
                fiturKueDesain.classList.add('hidden');    // Sembunyi total jika tema lain
            }
        }
        
    // 4. Logika untuk MODE INSTAN
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
        
        const fiturKueInstan = document.getElementById('fitur-kue-instan');
        if (fiturKueInstan) {
            if (apakahTemaUltah) {
                fiturKueInstan.classList.remove('hidden'); // Muncul jika tema ultah
            } else {
                fiturKueInstan.classList.add('hidden');    // Sembunyi total jika tema lain
            }
        }

        // Atur teks hiasan otomatis berdasarkan tema yang dipilih
        const hiasanAtas = document.getElementById('hiasan-atas-instan');
        const hiasanBawah = document.getElementById('hiasan-bawah-instan');
        if (hiasanAtas && hiasanBawah) {
            if (document.body.classList.contains('tema-lebaran')) {
                hiasanAtas.innerText = "🌙 Selamat Hari Raya Idul Fitri 🌙";
                hiasanBawah.innerText = "✨ Mohon Maaf Lahir & Batin ✨";
            } else if (document.body.classList.contains('tema-cinta')) {
                hiasanAtas.innerText = "💖 Special For You 💖";
                hiasanBawah.innerText = "🌹 I Love You So Much 🌹";
            } else if (document.body.classList.contains('tema-ultah')) {
                hiasanAtas.innerText = "🎉 Happy Birthday! 🎉";
                hiasanBawah.innerText = "🎂 Wish You All The Best 🎂";
            } else {
                hiasanAtas.innerText = "✉️ --- Surat Ucapan --- ✉️";
                hiasanBawah.innerText = "✉️ --------------------- ✉️";
            }
        }
    }
}
