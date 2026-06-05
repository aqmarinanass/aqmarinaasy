function mulaiAplikasi() {
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}
let temaAktif = 'biasa';

function setTema(namaTema) {
    temaAktif = namaTema;
    
  
    document.body.className = '';
    document.body.classList.add('tema-' + namaTema);
    
    const judulUtama = document.getElementById('judul-utama');
    const hiasanAtas = document.getElementById('hiasan-atas-instan');
    const hiasanBawah = document.getElementById('hiasan-bawah-instan');
    const kueInstan = document.getElementById('kue-badan-instan');
    const inputDesain = document.getElementById('teks-input-desain');
    const inputInstan = document.getElementById('teks-input-instan');

    
    if (namaTema === 'lebaran') {
        judulUtama.innerText = "Tema: lebaran";
        hiasanAtas.innerText = "🌙 ✨ 🕌 ✨ 🌙";
        hiasanBawah.innerText = "✨ Ketupat & Berkah ✨";
        kueInstan.style.fill = "#7bed9f"; 
        inputDesain.placeholder = "Ketik ucapan Mohon Maaf Lahir & Batin kamu di sini...";
        inputInstan.placeholder = "Ketik ucapan Mohon Maaf Lahir & Batin kamu di sini...";
    } else if (namaTema === 'cinta') {
        judulUtama.innerText = "Tema: Ungkapan Cinta ";
        hiasanAtas.innerText = "❤️ ✨ 🎀 ✨ ❤️";
        hiasanBawah.innerText = "💖 Selalu Bersamamu 💖";
        kueInstan.style.fill = "#ffb6c1";
        inputDesain.placeholder = "Ketik ungkapan sayang atau cintamu di sini...";
        inputInstan.placeholder = "Ketik ungkapan sayang atau cintamu di sini...";
    } else if (namaTema === 'ultah') {
        judulUtama.innerText = "Tema: Ulang Tahun ";
        hiasanAtas.innerText = "🎈 ✨ 🎂 ✨ 🎈";
        hiasanBawah.innerText = "🎉 Tiup Lilinnya! 🎉";
        kueInstan.style.fill = "#ff7ff5"; 
        inputDesain.placeholder = "Ketik doa selamat ulang tahun di sini...";
        inputInstan.placeholder = "Ketik doa selamat ulang tahun di sini...";
    } else {
        // Tema Biasa / Kasual
        judulUtama.innerText = "Tema: Kasual ";
        hiasanAtas.innerText = "✉️ ✨ ⭐ ✨ ✉️";
        hiasanBawah.innerText = "✨ Salam Hangat ✨";
        kueInstan.style.fill = "#4ea8de"; 
        inputDesain.placeholder = "Ketik ucapan kasual/biasa di sini...";
        inputInstan.placeholder = "Ketik ucapan kasual/biasa di sini...";
    }

    inputDesain.value = '';
    inputInstan.value = '';
    document.getElementById('tampilan-ucapan-desain').innerText = "[ Ucapanmu akan muncul di sini ]";
    document.getElementById('tampilan-ucapan-instan').innerText = "[ Ucapan kustom pengirim akan muncul di sini ]";

    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

function kembaliKeTema() {
    document.getElementById('menu-utama').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function pilihMode(mode) {
    document.getElementById('menu-utama').classList.add('hidden');
    if (mode === 'desain') {
        document.getElementById('area-desain').classList.remove('hidden');
    } else if (mode === 'instan') {
        document.getElementById('area-instan').classList.remove('hidden');
    }
}

function resetMenu() {
    document.getElementById('area-desain').classList.add('hidden');
    document.getElementById('area-instan').classList.add('hidden');
    document.getElementById('menu-utama').classList.remove('hidden');
}

function pilihWarnaKue(warna) {
    document.getElementById('kue-badan-desain').style.fill = warna;
}

function updateUcapan(mode) {
    if (mode === 'desain') {
        const isiTeks = document.getElementById('teks-input-desain').value;
        document.getElementById('tampilan-ucapan-desain').innerText = isiTeks || "[ Ucapanmu akan muncul di sini ]";
    } else if (mode === 'instan') {
        const isiTeks = document.getElementById('teks-input-instan').value;
        document.getElementById('tampilan-ucapan-instan').innerText = isiTeks || "[ Ucapan kustom pengirim akan muncul di sini ]";
    }
}
