// ==========================================
// 1. STRUKTUR NAVIGASI UTAMA (FUNGSI BAWAAN)
// ==========================================

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

// Fungsi Ganti Tema (Sinkron ke CSS Variables)
function setTema(namaTema) {
    document.body.setAttribute('data-theme', namaTema);
    
    const judulUtama = document.getElementById('judul-utama');
    if (namaTema === 'lebaran') {
        judulUtama.innerText = "Tema: Lebaran";
    } else if (namaTema === 'cinta') {
        judulUtama.innerText = "Tema: Ungkapan Cinta";
    } else if (namaTema === 'ultah') {
        judulUtama.innerText = "Tema: Ulang Tahun";
    } else {
        judulUtama.innerText = "Buat Ucapan";
    }

    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

// Fungsi Membuka Pilihan Mode Buat
function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    
    const temaAktif = document.body.getAttribute('data-theme');
    const isKueTema = (temaAktif === 'ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
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
        
        // Atur dekorasi otomatis untuk mode instan sebelum dibuka
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

// ==========================================
// 2. FUNGSI LIVE PREVIEW & WARNA KUE
// ==========================================

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

// ==========================================
// 3. PENGIRIMAN & PARSING PARAMETER LINK LINK
// ==========================================

function bagikanLink(mode) {
    let pesan = '';
    if (mode === 'desain') {
        pesan = document.getElementById('teks-input-desain').value;
    } else {
        pesan = document.getElementById('teks-input-instan').value;
    }

    if (!pesan.trim()) {
        alert('Tolong ketik isi ucapan dulu sebelum menyalin link!');
        return;
    }

    const temaSaatIni = document.body.getAttribute('data-theme') || 'biasa';
    const elemenKue = document.getElementById('kue-badan-desain');
    const warnaKue = elemenKue ? (elemenKue.style.fill || '#4ea8de') : '#4ea8de';

    const baseUrl = window.location.origin + window.location.pathname;
    const linkFinal = `${baseUrl}?tema=${temaSaatIni}&mode=${mode}&pesan=${encodeURIComponent(pesan)}&kue=${encodeURIComponent(warnaKue)}`;

    navigator.clipboard.writeText(linkFinal).then(() => {
        alert('Link ucapan estetik berhasil disalin! Kirimkan ke orang tersayang.');
    }).catch(() => {
        alert('Gagal menyalin otomatis, ini link Anda:\n\n' + linkFinal);
    });
}

// SISTEM DETEKSI OTOMATIS SAAT LINK DIBUKA PENERIMA
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');
    const paramKue = urlParams.get('kue');

    if (paramTema && paramMode && paramPesan) {
        // Bersihkan halaman pembuat agar tidak bertumpuk kaku
        document.getElementById('halaman-awal').classList.add('hidden');
        document.getElementById('menu-tema').classList.add('hidden');
        document.getElementById('menu-utama').classList.add('hidden');
        
        // Aktifkan warna neon pembungkus sesuai tema kiriman
        document.body.setAttribute('data-theme', paramTema);

        if (paramKue) {
            pilihWarnaKue(paramKue);
        }

        if (paramMode === 'desain') {
            document.getElementById('area-desain').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-desain').innerText = paramPesan;
            
            // Sembunyikan alat edit pengirim untuk si penerima surat
            document.getElementById('teks-input-desain').classList.add('hidden');
            document.getElementById('btn-share-desain').classList.add('hidden');
            
            const petunjukTeks = document.querySelector('#area-desain p:not(.palet-warna p)');
            if (petunjukTeks) petunjukTeks.classList.add('hidden');
            
            const btnKembali = document.querySelector('#area-desain .btn-secondary');
            if (btnKembali) btnKembali.classList.add('hidden');

            if (paramTema === 'ultah') {
                document.getElementById('fitur-kue-desain').classList.remove('hidden');
                const pKue = document.querySelector('#fitur-kue-desain p');
                const paletWarna = document.querySelector('#fitur-kue-desain .palet-warna');
                if (pKue) pKue.classList.add('hidden');
                if (paletWarna) paletWarna.classList.add('hidden');
            }
        } else if (paramMode === 'instan') {
            document.getElementById('area-instan').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-instan').innerText = paramPesan;
            
            document.getElementById('teks-input-instan').classList.add('hidden');
            document.getElementById('btn-share-instan').classList.add('hidden');
            
            const petunjukTeks = document.querySelector('#area-instan p');
            if (petunjukTeks) petunjukTeks.classList.add('hidden');

            const btnKembali = document.querySelector('#area-instan .btn-secondary');
            if (btnKembali) btnKembali.classList.add('hidden');

            const hiasanAtas = document.getElementById('hiasan-atas-instan');
            const hiasanBawah = document.getElementById('hiasan-bawah-instan');
            if (paramTema === 'lebaran') {
                hiasanAtas.innerText = "🌙 Selamat Hari Raya Idul Fitri 🌙";
                hiasanBawah.innerText = "✨ Mohon Maaf Lahir & Batin ✨";
            } else if (paramTema === 'cinta') {
                hiasanAtas.innerText = "💖 Special For You 💖";
                hiasanBawah.innerText = "🌹 I Love You So Much 🌹";
            } else if (paramTema === 'ultah') {
                hiasanAtas.innerText = "🎉 Happy Birthday! 🎉";
                hiasanBawah.innerText = "🎂 Wish You All The Best 🎂";
                document.getElementById('fitur-kue-instan').classList.remove('hidden');
            }
        }
    }
};
