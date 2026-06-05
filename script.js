function mulaiAplikasi() {
    // Sembunyikan halaman awal, lalu munculkan menu tema
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


let temaAktif = 'biasa';

function setTema(tema) {
    temaAktif = tema;
    
    document.body.className = 'tema-' + tema;
    
    const judulUtama = document.getElementById('judul-utama');
    if (tema === 'lebaran') judulUtama.innerText = "Tema: Lebaran ";
    else if (tema === 'cinta') judulUtama.innerText = "Tema: Ungkapan Cinta ";
    else if (tema === 'ultah') judulUtama.innerText = "Tema: Ulang Tahun ";
    else judulUtama.innerText = "Tema: Kasual ";

    document.getElementById('fitur-kue-desain').classList.add('hidden');
    document.getElementById('fitur-kue-instan').classList.add('hidden');

    if (tema === 'ultah') {
        document.getElementById('fitur-kue-desain').classList.remove('hidden');
        document.getElementById('fitur-kue-instan').classList.remove('hidden');
    }

    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}


function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    
    if (mode === 'desain') {
        document.getElementById('teks-input-desain').value = '';
        document.getElementById('tampilan-ucapan-desain').innerText = '[ Ucapanmu akan muncul di sini ]';
        
        document.getElementById('area-desain').classList.remove('hidden');
    } else if (mode === 'instan') {
       
        document.getElementById('teks-input-instan').value = '';
        document.getElementById('tampilan-ucapan-instan').innerText = '[ Ucapan kustom pengirim akan muncul di sini ]';
        
      
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
        
    
        document.getElementById('area-instan').classList.remove('hidden');
    }
}


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
    // Ubah warna svg kue di area desain dan area instan secara bersamaan
    document.getElementById('kue-badan-desain').style.fill = warna;
    document.getElementById('kue-badan-instan').style.fill = warna;
}


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

    const warnaKue = document.getElementById('kue-badan-desain').style.fill || '#4ea8de';

    const linkBersih = window.location.origin + window.location.pathname;
    const linkHasil = `${linkBersih}?tema=${temaAktif}&mode=${mode}&pesan=${encodeURIComponent(pesan)}&kue=${encodeURIComponent(warnaKue)}`;


    navigator.clipboard.writeText(linkHasil).then(() => {
        alert('Link ucapan berhasil disalin! Tinggal kamu kirimkan ke orangnya.');
    }).catch(() => {
        alert('Gagal menyalin otomatis. Ini link kamu, silakan salin manual:\n\n' + linkHasil);
    });
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');
    const paramKue = urlParams.get('kue');

    if (paramTema && paramMode && paramPesan) {

        document.getElementById('halaman-awal').classList.add('hidden');
        
        temaAktif = paramTema;
        document.body.className = 'tema-' + paramTema;

        if (paramKue) {
            pilihWarnaKue(paramKue);
        }

        if (paramMode === 'desain') {
            document.getElementById('area-desain').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-desain').innerText = paramPesan;
            
            document.getElementById('teks-input-desain').classList.add('hidden');
            document.querySelector('#area-desain p').classList.add('hidden');
            document.getElementById('btn-share-desain').classList.add('hidden');
            
            if (paramTema === 'ultah') {
                document.getElementById('fitur-kue-desain').classList.remove('hidden');
                // Sembunyikan palet pilihan warna baju kue untuk penerima surat
                document.querySelector('#fitur-kue-desain p').classList.add('hidden');
                document.querySelector('.palet-warna').classList.add('hidden');
            }
        } else if (paramMode === 'instan') {
            document.getElementById('area-instan').classList.remove('hidden');
            document.getElementById('tampilan-ucapan-instan').innerText = paramPesan;
            
            document.getElementById('teks-input-instan').classList.add('hidden');
            document.querySelector('#area-instan p').classList.add('hidden');
            document.getElementById('btn-share-instan').classList.add('hidden');

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
            } else {
                hiasanAtas.innerText = "✉️ --- Surat Ucapan --- ✉️";
                hiasanBawah.innerText = "✉️ --------------------- ✉️";
            }
        }
    }
};
