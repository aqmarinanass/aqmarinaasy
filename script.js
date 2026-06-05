// ==========================================================================
// 1. FUNGSI NAVIGASI HALAMAN (TOMBOL PINDAH MENU)
// ==========================================================================

function mulaiAplikasi() {
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function kembaliKeAwal() {
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('halaman-awal').classList.remove('hidden');
}

function kembaliKeTema() {
    document.getElementById('menu-utama').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function resetMenu() {
    document.getElementById('area-desain').classList.add('hidden');
    document.getElementById('area-instan').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

// ==========================================================================
// 2. FUNGSI SET TEMA (GANTI BACKGROUND & WARNA NEON VIA CLASS CSS)
// ==========================================================================

function setTema(namaTema) {
    // Menembakkan class tema ke body (misal: tema-ultah, tema-lebaran)
    document.body.className = 'tema-' + namaTema;
    
    // Update teks judul di menu utama secara otomatis
    const judulUtama = document.getElementById('judul-utama');
    if (judulUtama) {
        if (namaTema === 'lebaran') {
            judulUtama.innerText = "Tema: Lebaran";
        } else if (namaTema === 'cinta') {
            judulUtama.innerText = "Tema: Ungkapan Cinta";
        } else if (namaTema === 'ultah') {
            judulUtama.innerText = "Tema: Ulang Tahun";
        } else {
            judulUtama.innerText = "Buat Ucapan";
        }
    }

    // Pindah halaman dari menu pilih tema ke menu pilih mode buat
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

// ==========================================================================
// 3. FUNGSI PILIH MODE (DESAIN / INSTAN) + FILTER KUE OTOMATIS
// ==========================================================================

function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    
    // Validasi ketat: Cek apakah saat ini sedang memilih tema ulang tahun
    const isKueTema = document.body.classList.contains('tema-ultah');

    // JIKA USER MEMILIH MODE DESAIN
    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
        const fiturKueDesain = document.getElementById('fitur-kue-desain');
        if (fiturKueDesain) {
            if (isKueTema) {
                fiturKueDesain.classList.remove('hidden'); // Muncul cuma di ultah
            } else {
                fiturKueDesain.classList.add('hidden');    // Sembunyi di tema lain
            }
        }
        
    // JIKA USER MEMILIH MODE INSTAN
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
        
        const fiturKueInstan = document.getElementById('fitur-kue-instan');
        if (fiturKueInstan) {
            if (isKueTema) {
                fiturKueInstan.classList.remove('hidden'); // Muncul cuma di ultah
            } else {
                fiturKueInstan.classList.add('hidden');    // Sembunyi di tema lain
            }
        }

        // Pasang dekorasi teks otomatis khusus mode instan
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

// ==========================================================================
// 4. FUNGSI LIVE PREVIEW TEKS & WARNA KUE
// ==========================================================================

function updateUcapan(mode) {
    if (mode === 'desain') {
        const isi = document.getElementById('teks-input-desain').value;
        document.getElementById('tampilan-ucapan-desain').innerText = isi || '[ Ucapanmu akan muncul di sini ]';
    } else if (mode === 'instan') {
        const isi = document.getElementById('teks-input-instan').value;
        document.getElementById('tampilan-ucapan-instan').innerText = isi || '[ Ucapan kustom pengirim akan muncul di sini ]';
    }
}

function pilihWarnaKue(warna) {
    const kueDesain = document.getElementById('kue-badan-desain');
    const kueInstan = document.getElementById('kue-badan-instan');
    if (kueDesain) kueDesain.style.fill = warna;
    if (kueInstan) kueInstan.style.fill = warna;
}

// ==========================================================================
// 5. LOGIKA GENERATE LINK (UNTUK PENGIRIM SURAT)
// ==========================================================================

function bagikanLink(mode) {
    let pesan = '';
    if (mode === 'desain') {
        pesan = document.getElementById('teks-input-desain').value;
    } else {
        pesan = document.getElementById('teks-input-instan').value;
    }

    if (!pesan.trim()) {
        alert('Ketik ucapan kamu dulu sebelum menyalin link!');
        return;
    }

    // Ekstrak nama tema yang sedang aktif dari class body
    let temaSaatIni = 'biasa';
    if (document.body.classList.contains('tema-lebaran')) temaSaatIni = 'lebaran';
