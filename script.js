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

function setTema(namaTema) {
    if (document.body) {
        document.body.className = 'tema-' + namaTema;
    }

    const menuTema = document.getElementById('menu-tema');
    const menuUtama = document.getElementById('menu-utama');
    
    if (menuTema) menuTema.classList.add('hidden');
    if (menuUtama) menuUtama.classList.remove('hidden');

    const judulUtama = document.getElementById('judul-utama');
    if (judulUtama) {
        if (namaTema === 'lebaran') judulUtama.innerText = "Tema: Lebaran Fitri";
        else if (namaTema === 'cinta') judulUtama.innerText = "Tema: Ungkapan Cinta";
        else if (namaTema === 'ultah') judulUtama.innerText = "Tema: Ulang Tahun";
        else judulUtama.innerText = "Tema: Biasa / Kasual";
    }
}


function pilihMode(mode) {
    const menuUtama = document.getElementById('menu-utama');
    if (menuUtama) menuUtama.classList.add('hidden');
    
    let temaAktif = 'biasa';
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
                hiasanAtas.innerText = "🌙 Selamat Hari Raya 🌙";
                hiasanBawah.innerText = "Mohon Maaf Lahir & Batin";
            } else if (temaAktif === 'cinta') {
                hiasanAtas.innerText = "💖 ------------💖";
                hiasanBawah.innerText = " have a nice dayy! ";
            } else if (temaAktif === 'ultah') {
                hiasanAtas.innerText = "Happy Birthday! ";
                hiasanBawah.innerText = "Wish You All The Best!!";
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

function pilihWarnaKue(warna) {
    const kueBadanDesain = document.getElementById('kue-badan-desain');
    const kueBadanInstan = document.getElementById('kue-badan-instan');
    if (kueBadanDesain) kueBadanDesain.setAttribute('fill', warna);
    if (kueBadanInstan) kueBadanInstan.setAttribute('fill', warna);
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
    const baseUrl = window.location.origin + window.location.pathname;
    const linkHasil = `${baseUrl}?tema=${temaAktif}&mode=${mode}&pesan=${encodeURIComponent(pesan)}&kue=${encodeURIComponent(warnaKue)}`;

    navigator.clipboard.writeText(linkHasil).then(() => {
        alert('Link berhasil disalin! Silakan kirimkan ke temanmu.');
    }).catch(() => {
        alert('Gagal menyalin otomatis. Ini link kamu:\n\n' + linkHasil);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');
    const paramKue = urlParams.get('kue');

    if (paramTema && paramPesan && paramMode) {
        const halAwal = document.getElementById('halaman-awal');
        const menuTema = document.getElementById('menu-tema');
        const menuUtama = document.getElementById('menu-utama');
        if (halAwal) halAwal.classList.add('hidden');
        if (menuTema) menuTema.classList.add('hidden');
        if (menuUtama) menuUtama.classList.add('hidden');
        
        document.body.className = 'tema-' + paramTema;

        if (paramKue) {
            pilihWarnaKue(paramKue);
        }

        if (paramMode === 'desain') {
            const areaDesain = document.getElementById('area-desain');
            if (areaDesain) areaDesain.classList.remove('hidden');
            
            const tampilan = document.getElementById('tampilan-ucapan-desain');
            if (tampilan) tampilan.innerText = paramPesan;
            
            const inputD = document.getElementById('teks-input-desain');
            const btnS = document.getElementById('btn-share-desain');
            if (inputD) inputD.style.display = 'none';
            if (btnS) btnS.style.display = 'none';
            
            const petunjuk = document.querySelector('#area-desain p');
            const btnK = document.querySelector('#area-desain .btn-secondary');
            if (petunjuk) petunjuk.style.display = 'none';
            if (btnK) btnK.style.display = 'none';

            if (paramTema === 'ultah') {
                const fKue = document.getElementById('fitur-kue-desain');
                if (fKue) fKue.classList.remove('hidden');
                const teksKue = document.querySelector('#fitur-kue-desain p');
                const paletKue = document.querySelector('#fitur-kue-desain .palet-warna');
                if (teksKue) teksKue.style.display = 'none';
                if (paletKue) paletKue.style.display = 'none';
            }
        } else if (paramMode === 'instan') {
            const areaInstan = document.getElementById('area-instan');
            if (areaInstan) areaInstan.classList.remove('hidden');
            
            const tampilan = document.getElementById('tampilan-ucapan-instan');
            if (tampilan) tampilan.innerText = paramPesan;
            
            const inputI = document.getElementById('teks-input-instan');
            const btnS = document.getElementById('btn-share-instan');
            if (inputI) inputI.style.display = 'none';
            if (btnS) btnS.style.display = 'none';
            
            const petunjuk = document.querySelector('#area-instan p');
            const btnK = document.querySelector('#area-instan .btn-secondary');
            if (petunjuk) petunjuk.style.display = 'none';
            if (btnK) btnK.style.display = 'none';

            const hiasanAtas = document.getElementById('hiasan-atas-instan');
            const hiasanBawah = document.getElementById('hiasan-bawah-instan');
            if (hiasanAtas && hiasanBawah) {
                if (paramTema === 'lebaran') {
                    hiasanAtas.innerText = "🌙 Selamat Hari Raya 🌙";
                    hiasanBawah.innerText = "Mohon Maaf Lahir & Batin";
                } else if (paramTema === 'cinta') {
                    hiasanAtas.innerText = "💖 ------------ 💖";
                    hiasanBawah.innerText = "have a nice day!";
                } else if (paramTema === 'ultah') {
                    hiasanAtas.innerText = " Happy Birthday! ";
                    hiasanBawah.innerText = " Wish You All The Best ";
                    const fKueI = document.getElementById('fitur-kue-instan');
                    if (fKueI) fKueI.classList.remove('hidden');
                }
            }
        }
    } else {
        const halAwal = document.getElementById('halaman-awal');
        const menuTema = document.getElementById('menu-tema');
        const menuUtama = document.getElementById('menu-utama');
        const areaDesain = document.getElementById('area-desain');
        const areaInstan = document.getElementById('area-instan');

        if (halAwal) halAwal.classList.remove('hidden');
        if (menuTema) menuTema.classList.add('hidden');
        if (menuUtama) menuUtama.classList.add('hidden');
        if (areaDesain) areaDesain.classList.add('hidden');
        if (areaInstan) areaInstan.classList.add('hidden');
    }
});
