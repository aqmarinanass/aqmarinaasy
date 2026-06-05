// Fungsi mengganti tema yang aman tanpa merusak class bawaan body
function setTema(namaTema) {
    // Mengubah atribut tema secara langsung, neon dijamin aman dan ikut berubah warna!
    document.body.setAttribute('data-theme', namaTema);
    
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

    // Pindah dari menu pilihan tema ke menu utama
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

// Menentukan mode desain atau instan
function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    
    // Cek tema aktif lewat atribut data-theme
    const temaAktif = document.body.getAttribute('data-theme');
    const isKueTema = (temaAktif === 'ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
        // Fitur kue ulang tahun hanya muncul jika temanya bertema Ultah
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
