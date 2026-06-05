// ==========================================
// 1. FUNGSI NAVIGASI HALAMAN (ANTI NUMPUK)
// ==========================================

function mulaiAplikasi() {
    // Sembunyikan halaman awal, lalu munculkan menu tema
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function kembaliKeAwal() {
    // Sembunyikan menu tema, lalu munculkan kembali halaman awal
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('halaman-awal').classList.remove('hidden');
}

function kembaliKeTema() {
    // Sembunyikan menu utama mode, lalu kembali ke pilihan tema
    document.getElementById('menu-utama').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function resetMenu() {
    // Sembunyikan area pengeditan dan kembali ke menu utama pilihan mode
    document.getElementById('area-desain').classList.add('hidden');
    document.getElementById('area-instan').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}


// ==========================================
// 2. FUNGSI PENGATURAN TEMA KOTAK NEON
// ==========================================

let temaAktif = 'biasa';

function setTema(tema) {
    temaAktif = tema;
    
    // Mengubah class pada body agar kotak neon berganti warna di CSS
    document.body.className = 'tema-' + tema;
    
    // Update teks judul di menu utama mode
    const judulUtama = document.getElementById('judul-utama');
    if (tema === 'lebaran') judulUtama.innerText = "Tema: Lebaran 🌙";
    else if (tema === 'cinta') judulUtama.innerText = "Tema: Ungkapan Cinta ❤️";
    else if (tema === 'ultah') judulUtama.innerText = "Tema: Ulang Tahun 🎂";
    else judulUtama.innerText = "Tema: Kasual ✉️";

    // Kunci utama: Sembunyikan semua fitur kue terlebih dahulu agar tidak bocor
    document.getElementById('fitur-kue-desain').classList.add('hidden');
    document.getElementById('fitur-kue-instan').classList.add('hidden');

    // Tampilkan kue HANYA jika user memilih tema Ulang Tahun
    if (tema === 'ultah') {
        document.getElementById('fitur-kue-desain').classList.remove('hidden');
        document.getElementById('fitur-kue-instan').classList.remove('hidden');
    }

    // Pindah halaman dari menu tema ke menu utama pilihan mode
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}


// ==========================================
// 3. FUNGSI PILIHAN MODE (DESAIN / INSTAN)
// ==========================================

function pilihMode(mode) {
    // Sembunyikan menu utama terlebih dahulu
    document.getElementById('menu-utama').classList.add('hidden');
    
    if (mode === 'desain') {
        // Reset input textarea desain dan tampilannya
        document.getElementById('teks-input-desain').value = '';
        document.getElementById('tampilan-ucapan-desain').innerText = '[ Ucapanmu akan muncul di sini ]';
        
        // Tampilkan area membuat desain kustom
        document.getElementById('area-desain').classList.remove('hidden');
    } else if (mode === 'instan') {
        // Reset input textarea instan dan dekorasi pembungkusnya
        document.getElementById('teks-input-instan').value = '';
        document.getElementById('tampilan-ucapan-instan').innerText = '[ Ucapan kustom pengirim akan muncul di sini ]';
        
        // Atur hiasan otomatis berdasarkan tema aktif
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
        
        // Tampilkan area surat instan yang sudah berhias otomatis
        document.getElementById('area-instan').classList.remove('hidden');
    }
}


// ==========================================
// 4. FUNGSI LIVE PREVIEW KETIKAN & WARNA KUE
// ==========================================

function updateUcapan(mode) {
    if (mode === 'desain') {
        const isiKetikkan = document.getElementById('teks-input-desain').value;
        const tampilan = document.getElementById('tampilan-ucapan-desain');
        tampilan.innerText = isiKetikkan || '[ Ucapanmu akan muncul di sini ]';
    } else if (mode === 'instan') {
        const isiKetikkan = document.getElementById('teks-input-instan').value;
        const tampilan = document.getElementById('tampilan-ucapan-instan');
        tampilan.innerText = isiKetikkan || '[ Ucapan kustom pengirim akan muncul di sini ]';
    }
}

function pilihWarnaKue(warna) {
    // Ubah warna SVG kue saja (tidak mengganggu neon luar)
    document.getElementById('kue-badan-desain').style.fill = warna;
    document.getElementById('kue-badan-instan').style.fill = warna;
}


// ==========================================
// 5. FUNGSI GENERATE & BACA LINK (URL PARAMS)
// ==========================================

function bagikanLink(mode) {
    let pesan = '';
    if (mode === 'desain') {
        pesan = document.getElementById('teks-input-desain').value;
    } else {
        pesan = document.getElementById('teks-input-instan').value;
    }

    if (!pesan.trim()) {
        alert('Ketik ucapan kamu dulu sebelum membagikan link!');
        return;
    }

    // Ambil warna kue saat ini (default jika belum diubah)
    const warnaKue = document.getElementById('kue-badan-desain').style.fill || '#4ea8de';
