/* ==========================================
   1. FUNGSI NAVIGASI HALAMAN (PERPINDAHAN MENU)
   ========================================== */

// Dijalankan saat tombol "Ya, Ingin Mengirim Surat" diklik
function mulaiAplikasi() {
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

// Kembali dari menu pilih tema ke halaman paling awal
function kembaliKeAwal() {
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('halaman-awal').classList.remove('hidden');
}

// Kembali dari menu utama (pilihan desain/instan) ke menu pilih tema
function kembaliKeTema() {
    document.getElementById('menu-utama').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

// Kembali dari area kerja (desain/instan) ke menu utama pilihan mode
function resetMenu() {
    document.getElementById('area-desain').classList.add('hidden');
    document.getElementById('area-instan').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}


/* ==========================================
   2. FUNGSI PENGATURAN TEMA & WARNA NEON
   ========================================== */

// Fungsi utama yang mengganti tema dan mengontrol pendaran neon CSS
function setTema(namaTema) {
    // Menghapus class tema lama di body, lalu memasang class tema baru
    document.body.className = '';
    document.body.classList.add('tema-' + namaTema);
    
    // Mengubah teks judul di menu utama agar dinamis sesuai tema
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

    // Pindah dari menu pilihan tema ke menu utama (pilih mode desain)
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}


/* ==========================================
   3. FUNGSI PEMILIHAN MODE & EDITOR SURAT
   ========================================== */

// Menentukan apakah user masuk ke mode kustom (desain) atau otomatis (instan)
function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    
    // Ambil info tema aktif saat ini dari class body
    const isKueTema = document.body.classList.contains('tema-ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
        // Fitur kue ulang tahun hanya muncul jika temanya bertema Ultah
        if (isKueTema) {
            document.getElementById('fitit-kue-desain') || document.getElementById('fitur-kue-desain').classList.remove('hidden');
        } else {
            document.getElementById('fitit-kue-desain') || document.getElementById('fitur-kue-desain').classList.add('hidden');
        }
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
        
        if (isKueTema) {
            document.getElementById('fitur-kue-instan').classList.remove('hidden');
        } else {
            document.getElementById('fitur-kue-instan').classList.add('hidden');
        }
    }
}

// Mengubah warna kue secara interaktif di SVG (Khusus Mode Desain)
function pilihWarnaKue(warna) {
    const badanKueDesain = document.getElementById('kue-badan-desain');
    if (badanKueDesain) {
        badanKueDesain.setAttribute('fill', warna);
    }
}

// Meng-update teks preview surat secara real-time saat diketik
function updateUcapan(mode) {
    if (mode === 'desain') {
        const inputTeks = document.getElementById('teks-input-desain').value;
        const tampilanTeks = document.getElementById('tampilan-ucapan-desain');
        tampilanTeks.innerText = inputTeks || "[ Ucapanmu akan muncul di sini ]";
    } else if (mode === 'instan') {
        const inputTeks = document.getElementById('teks-input-instan').value;
        const tampilanTeks = document.getElementById('tampilan-ucapan-instan');
        tampilanTeks.innerText = inputTeks || "[ Ucapan kustom pengirim akan muncul di sini ]";
    }
}

// Simulasi membuat link tautan surat untuk dibagikan
function bagikanLink(mode) {
    let teksSurat = "";
    if (mode === 'desain') {
        teksSurat = document.getElementById('teks-input-desain').value;
    } else {
        teksSurat = document.getElementById('teks-input-instan').value;
    }

    if (!teksSurat.trim()) {
        alert("Ketik ucapan suratmu terlebih dahulu sebelum mengirim!");
        return;
    }

    // Simulasi enkripsi teks ke URL (bisa dikembangkan menggunakan URLSearchParams)
    const linkHasil = window.location.href + "?share=" + encodeURIComponent(teksSurat);
    
    // Menampilkan pesan sukses kepada pengguna
    alert("Link surat berhasil dibuat!\n\nSilakan salin link di browser kamu untuk dikirim.");
    console.log("Generated Link: ", linkHasil);
}
