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
