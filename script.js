
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


function setTema(namaTema) {

    document.body.className = '';
    document.body.classList.add('tema-' + namaTema);
   
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
  
    const isKueTema = document.body.classList.contains('tema-ultah');

    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
        
      
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


function pilihWarnaKue(warna) {
    const badanKueDesain = document.getElementById('kue-badan-desain');
    if (badanKueDesain) {
        badanKueDesain.setAttribute('fill', warna);
    }
}

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


    const linkHasil = window.location.href + "?share=" + encodeURIComponent(teksSurat);
    
    alert("Link surat berhasil dibuat!\n\nSilakan salin link di browser kamu untuk dikirim.");
    console.log("Generated Link: ", linkHasil);
}
