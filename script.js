// ==========================================
// 1. FUNGSI NAVIGASI HALAMAN (ANTI CRASH)
// ==========================================

function mulaiAplikasi() {
    const halAwal = document.getElementById('halaman-awal');
    const menuTema = document.getElementById('menu-tema');
    if (halAwal) halAwal.classList.add('hidden');
    if (menuTema) menuTema.classList.remove('hidden');
}

function kembaliKeAwal() {
    const halAwal = document.getElementById('halaman-awal');
    const menuTema = document.getElementById('menu-tema');
    if (menuTema) menuTema.classList.add('hidden');
    if (halAwal) halAwal.classList.remove('hidden');
}

function kembaliKeTema() {
    const menuUtama = document.getElementById('menu-utama');
    const menuTema = document.getElementById('menu-tema');
    if (menuUtama) menuUtama.classList.add('hidden');
    if (menuTema) menuTema.classList.remove('hidden');
}

function resetMenu() {
    const areaDesain = document.getElementById('area-desain');
    const areaInstan = document.getElementById('area-instan');
    const menuUtama = document.getElementById('menu-utama');
    
    if (areaDesain) areaDesain.classList.add('hidden');
    if (areaInstan) areaInstan.classList.add('hidden');
    if (menuUtama) menuUtama.classList.remove('hidden');
}

// ==========================================
// 2. FUNGSI PENGATURAN TEMA
// ==========================================

function setTema(namaTema) {
    // Ubah class body untuk ganti background warna di CSS
    if (document.body) {
        document.body.className = 'tema-' + namaTema;
    }

    const menuTema = document.getElementById('menu-tema');
    const menuUtama = document.getElementById('menu-utama');
    if (menuTema) menuTema.classList.add('hidden');
    if (menuUtama) menuUtama.classList.remove('hidden');

    // Ubah teks judul menu utama sesuai tema biar keren
    const judulUtama = document.getElementById('judul-utama');
    if (judulUtama) {
        if (namaTema === 'lebaran') judulUtama.innerText = "Tema: Lebaran Fitri";
        else if (namaTema === 'cinta') judulUtama.innerText = "Tema: Ungkapan Cinta";
        else if (namaTema === 'ultah') judulUtama.innerText = "Tema: Ulang Tahun";
        else judulUtama.innerText = "Tema: Biasa / Kasual";
    }
}

// ==========================================
// 3. FUNGSI MEMBUKA MODE (DESAIN / INSTAN)
// ==========================================

function pilihMode(mode) {
    const menuUtama = document.getElementById('menu-utama');
    if (menuUtama) menuUtama.classList.add('hidden');
    
    let temaAktif = 'biasas';
    if (document.body && document.body.classList) {
        if (document.body.classList.contains('tema-lebaran') || document.body.className.includes('tema-lebaran')) {
            temaAktif = 'lebaran';
        } else if (document.body.classList.contains('tema-cinta') || document.body.className.includes('tema-cinta')) {
            temaAktif = 'cinta';
        } else if (document.body.classList.contains('tema-ultah') || document.body.className.includes('tema-ultah')) {
            temaAktif = 'ultah';
        }
    }

    const isKueTema = (temaAktif === 'ultah');

    if (mode === 'desain') {
        const areaDesain = document.getElementById('area-desain');
        if (areaDesain) areaDesain.classList.remove('hidden');
        
        const fiturKueDesain = document.getElementById('fitur-kue-desain');
        if (fiturKueDesain) {
            if (isKueTema) fiturKueDesain.classList.remove('hidden');
            else fiturKueDesain.classList.add('hidden'); 
        }
    } else if (mode === 'instan') {
        const areaInstan = document.getElementById('area-instan');
        if (areaInstan) areaInstan.classList.remove('hidden');
        
        const hiasanAtas = document.getElementById('hiasan-atas-instan');
        const hiasanBawah = document.getElementById('hiasan-bawah-instan');
        
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
            if (isKueTema) fiturKueInstan.classList.remove('hidden');
            else fiturKueInstan.classList.add('hidden');
        }
    }
}

// ==========================================
// 4. FUNGSI KUE & LIVE PREVIEW TEKS
// ==========================================

function pilihWarnaKue(warna) {
    const kueBadanDesain = document.getElementById('kue-badan-desain');
    const kueBadanInstan = document.getElementById('kue-badan-instan');
    if (kueBadanDesain) kueBadanDesain.setAttribute('fill', warna);
    if (kueBadanInstan) kueBadanInstan.setAttribute('fill', warna);
    // Simpan warna di body agar terbawa saat bikin link share
    if (document.body) document.body.setAttribute('data-kue-warna', warna);
}

function updateUcapan(mode) {
    if (mode === 'desain') {
        const input = document.getElementById('teks-input-desain');
        const tampilan = document.getElementById('tampilan-ucapan-desain');
        if (input && tampilan) {
            tampilan.innerText = input.value || "[ Ucapanmu akan muncul di sini ]";
        }
    } else if (mode === 'instan') {
        const input = document.getElementById('teks-input-instan');
        const tampilan = document.getElementById('tampilan-ucapan-instan');
        if (input && tampilan) {
            tampilan.innerText = input.value || "[ Ucapan kustom pengirim akan muncul di sini ]";
        }
    }
}

// ==========================================
// 5. FUNGSI GENERATE LINK / BAGIKAN SURAT
// ==========================================

function bagikanLink(mode) {
    let temaAktif = 'biasa';
    if (document.body) {
        if (document.body.className.includes('lebaran')) temaAktif = 'lebaran';
        else if (document.body.className.includes('cinta')) temaAktif = 'cinta';
        else if (document.body.className.includes('ultah')) temaAktif = 'ultah';
    }

    let pesan = '';
    if (mode === 'desain') {
        const input = document.getElementById('teks-input-desain');
        pesan = input ? input.value : '';
    } else {
        const input = document.getElementById('teks-input-instan');
        pesan = input ? input.value : '';
    }

    if (!pesan.trim()) {
        alert('Tulis ucapan kamu dulu sebelum membagikan link!');
        return;
    }

    const warnaKue = document.body ? (document.body.getAttribute('data-kue-warna') || '#ff7ff5') : '#ff7ff5';
    
    // Bikin link otomatis menggunakan URL web saat ini
    const baseUrl = window.location.origin + window.location.pathname;
    const linkHasil = `${baseUrl}?tema=${temaAktif}&mode=${mode}&pesan=${encodeURIComponent(pesan)}&kue=${encodeURIComponent(warnaKue)}`;

    // Salin otomatis ke clipboard hp
