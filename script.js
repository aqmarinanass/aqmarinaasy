// ==========================================
// 1. FUNGSI NAVIGASI APLIKASI (BAWAAN LU)
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

// Fungsi Set Tema (Sinkron ke Selector Class CSS)
function setTema(namaTema) {
    document.body.className = 'tema-' + namaTema;
    
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
            if (isKueTema) fiturKueDesain.classList.remove('hidden');
            else fitsurKueDesain.classList.add('hidden');
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
            if (isKueTema) fiturKueInstan.classList.remove('hidden');
            else fiturKueInstan.classList.add('hidden');
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
// 3. LOGIKA COPY LINK & STRUKTUR PENERIMA
// ==========================================

function bagikanLink(mode) {
    let pesan = '';
    if (mode === 'desain') {
        pesan = document.getElementById('teks-input-desain').value;
    } else {
        pesan = document.getElementById('teks-input-instan').value;
    }

    if (!pesan.trim()) {
        alert('Ketik ucapan dulu sebelum menyalin link!');
        return;
    }

    let temaSaatIni = 'biasa';
    if (document.body.classList.contains('tema-lebaran')) temaSaatIni = 'lebaran';
    else if (document.body.classList.contains('tema-cinta')) temaSaatIni = 'cinta';
    else if (document.body.classList.contains('tema-ultah')) temaSaatIni = 'ultah';

    const elemenKue = document.getElementById('kue-badan-desain');
    const warnaKue = elemenKue ? (elemenKue.style.fill || '#4ea8de') : '#4ea8de';

    const baseUrl = window.location.origin + window.location.pathname;
    const linkFinal = `${baseUrl}?tema=${temaSaatIni}&mode=${mode}&pesan=${encodeURIComponent(pesan)}&kue=${encodeURIComponent(warnaKue)}`;

    navigator.clipboard.writeText(linkFinal).then(() => {
        alert('Link ucapan estetik berhasil disalin!');
    }).catch(() => {
        alert('Gagal salin otomatis, ini link Anda:\n\n' + linkFinal);
    });
}

// SISTEM DETEKSI OTOMATIS: DIEKSEKUSI SAAT LINK DIBUKA
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');
    const paramKue = urlParams.get('kue');

    // Jika link mengandung parameter pesan, berarti dibuka oleh sang PENERIMA
    if (paramTema && paramPesan && paramMode) {
        
        // 1. Amankan halaman: Sembunyikan semua menu pembuat agar tidak menumpuk kaku
        document.getElementById('halaman-awal').style.display = 'none';
        document.getElementById('menu-tema').style.display = 'none';
        document.getElementById('menu-utama').style.display = 'none';
        
        // 2. Tembakkan tema warna neon ke latar belakang body
        document.body.className = 'tema-' + paramTema;

        // 3. Atur warna kue kustom jika dikirimkan
        if (paramKue) {
            pilihWarnaKue(paramKue);
        }

        // 4. Buka area tampilan surat sesuai modenya
        if (paramMode === 'desain') {
            document.getElementById('area-desain').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-desain').innerText = paramPesan;
            
            // Hancurkan element input & tombol milik pengirim agar bersih di layar penerima
            document.getElementById('teks-input-desain').style.display = 'none';
            document.getElementById('btn-share-desain').style.display = 'none';
            
            // Sembunyikan petunjuk teks dan tombol kembali bawaan
            const petunjukTeks = document.querySelector('#area-desain p');
            if (petunjukTeks) petunjukTeks.style.display = 'none';
            
            const btnKembali = document.querySelector('#area-desain .btn-secondary');
            if (btnKembali) btnKembali.style.display = 'none';

            // Jika temanya ultah, biarkan kuenya muncul tapi sembunyikan palet pilih warnanya
            if (paramTema === 'ultah') {
                document.getElementById('fitur-kue-desain').classList.remove('hidden');
                const teksKue = document.querySelector('#fitur-kue-desain p');
                const paletKue = document.querySelector('#fitur-kue-desain .palet-warna');
                if (teksKue) teksKue.style.display = 'none';
                if (paletKue) paletKue.style.display = 'none';
            }
        } else if (paramMode === 'instan') {
            document.getElementById('area-instan').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-instan').innerText = paramPesan;
            
            document.getElementById('teks-input-instan').style.display = 'none';
            document.getElementById('btn-share-instan').style.display = 'none';
            
            const petunjukTeks = document.querySelector('#area-instan p');
            if (petunjukTeks) petunjukTeks.style.display = 'none';

            const btnKembali = document.querySelector('#area-instan .btn-secondary');
            if (btnKembali) btnKembali.style.display = 'none';

            // Set teks hiasan atas-bawah otomatis
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
});
