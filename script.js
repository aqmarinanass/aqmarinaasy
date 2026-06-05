function mulaiAplikasi() {
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function kembaliKeAwal() {
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('halaman-awal').classList.remove('hidden');
}

function setTema(namaTema) {
    document.body.className = '';
    document.body.classList.add('tema-' + namaTema);
    
    const judulUtama = document.getElementById('judul-utama');
    const hiasanAtas = document.getElementById('hiasan-atas-instan');
    const hiasanBawah = document.getElementById('hiasan-bawah-instan');
    const kueInstan = document.getElementById('kue-badan-instan');
    const inputDesain = document.getElementById('teks-input-desain');
    const inputInstan = document.getElementById('teks-input-instan');

    if (namaTema === 'lebaran') {
        if(judulUtama) judulUtama.innerText = "Tema: Idul Fitri 🌙";
        if(hiasanAtas) hiasanAtas.innerText = "🌙 ✨ 🕌 ✨ 🌙";
        if(hiasanBawah) hiasanBawah.innerText = "✨ Ketupat & Berkah ✨";
        if(kueInstan) kueInstan.style.fill = "#7bed9f";
    } else if (namaTema === 'cinta') {
        if(judulUtama) judulUtama.innerText = "Tema: Ungkapan Cinta ❤️";
        if(hiasanAtas) hiasanAtas.innerText = "❤️ ✨ 🎀 ✨ ❤️";
        if(hiasanBawah) hiasanBawah.innerText = "💖 Selalu Bersamamu 💖";
        if(kueInstan) kueInstan.style.fill = "#ffb6c1";
    } else if (namaTema === 'ultah') {
        if(judulUtama) judulUtama.innerText = "Tema: Ulang Tahun 🎂";
        if(hiasanAtas) hiasanAtas.innerText = "🎈 ✨ 🎂 ✨ 🎈";
        if(hiasanBawah) hiasanBawah.innerText = "🎉 Tiup Lilinnya! 🎉";
        if(kueInstan) kueInstan.style.fill = "#ff7ff5";
    } else {
        if(judulUtama) judulUtama.innerText = "Tema: Kasual ✉️";
        if(hiasanAtas) hiasanAtas.innerText = "✉️ ✨ ⭐ ✨ ✉️";
        if(hiasanBawah) hiasanBawah.innerText = "✨ Salam Hangat ✨";
        if(kueInstan) kueInstan.style.fill = "#4ea8de";
    }

    if(inputDesain) inputDesain.value = '';
    if(inputInstan) inputInstan.value = '';
    
    const tampDesain = document.getElementById('tampilan-ucapan-desain');
    const tampInstan = document.getElementById('tampilan-ucapan-instan');
    if(tampDesain) tampDesain.innerText = "[ Ucapanmu akan muncul di sini ]";
    if(tampInstan) tampInstan.innerText = "[ Ucapan kustom pengirim akan muncul di sini ]";

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
    const kueBadan = document.getElementById('kue-badan-desain');
    if(kueBadan) kueBadan.style.fill = warna;
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
