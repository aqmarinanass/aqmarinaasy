let temaAktif = 'biasa';

function mulaiAplikasi() {
    document.getElementById('halaman-awal').classList.add('hidden');
    document.getElementById('menu-tema').classList.remove('hidden');
}

function kembaliKeAwal() {
    document.getElementById('menu-tema').classList.add('hidden');
    document.getElementById('halaman-awal').classList.remove('hidden');
}

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
        if(judulUtama) judulUtama.innerText = "Tema: Idul Fitri 🌙";
        if(hiasanAtas) hiasanAtas.innerText = "🌙 ✨ 🕌 ✨ 🌙";
        if(hiasanBawah) hiasanBawah.innerText = "✨ Ketupat & Berkah ✨";
    } else if (namaTema === 'cinta') {
        if(judulUtama) judulUtama.innerText = "Tema: Ungkapan Cinta ❤️";
        if(hiasanAtas) hiasanAtas.innerText = "❤️ ✨ 🎀 ✨ ❤️";
        if(hiasanBawah) hiasanBawah.innerText = "💖 Selalu Bersamamu 💖";
    } else if (namaTema === 'ultah') {
        if(judulUtama) judulUtama.innerText = "Tema: Ulang Tahun 🎂";
        if(hiasanAtas) hiasanAtas.innerText = "🎈 ✨ 🎂 ✨ 🎈";
        if(hiasanBawah) hiasanBawah.innerText = "🎉 Tiup Lilinnya! 🎉";
        if(kueInstan) kueInstan.style.fill = "#ff7ff5";
    } else {
        if(judulUtama) judulUtama.innerText = "Tema: Kasual ✉️";
        if(hiasanAtas) hiasanAtas.innerText = "✉️ ✨ ⭐ ✨ ✉️";
        if(hiasanBawah) hiasanBawah.innerText = "✨ Salam Hangat ✨";
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
    
    const wadahKueDesain = document.getElementById('fitur-kue-desain');
    const wadahKueInstan = document.getElementById('fitur-kue-instan');

    if (temaAktif === 'ultah') {
        if(wadahKueDesain) wadahKueDesain.classList.remove('hidden');
        if(wadahKueInstan) wadahKueInstan.classList.remove('hidden');
    } else {
        if(wadahKueDesain) wadahKueDesain.classList.add('hidden');
        if(wadahKueInstan) wadahKueInstan.classList.add('hidden');
    }

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

function bagikanLink(mode) {
    let teksPesan = "";
    if (mode === 'desain') {
        teksPesan = document.getElementById('teks-input-desain').value;
    } else {
        teksPesan = document.getElementById('teks-input-instan').value;
    }

    if (!teksPesan) {
        alert("Ketik dulu ucapan kamu sebelum membuat link ya!");
        return;
    }

    const pesanAman = encodeURIComponent(teksPesan);
    const linkHasil = `${window.location.origin}${window.location.pathname}?tema=${temaAktif}&mode=${mode}&pesan=${pesanAman}`;

    navigator.clipboard.writeText(linkHasil).then(() => {
        alert(" Sukses! Link surat ucapan berhasil disalin. Tinggal kamu kirimkan ke WhatsApp temanmu!");
    }).catch(err => {
        alert("Gagal menyalin otomatis, silakan salin link ini: " + linkHasil);
    });
}

// Deteksi link kiriman orang lain
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');

    if (paramTema && paramPesan) {
        document.getElementById('halaman-awal').classList.add('hidden');
        document.body.className = '';
        document.body.classList.add('tema-' + paramTema);
        temaAktif = paramTema;

        // Sembunyikan tombol share dan kembali saat membaca link kiriman orang
        if (paramMode === 'desain') {
            document.getElementById('area-desain').classList.remove('hidden');
            if(document.getElementById('fitur-kue-desain')) document.getElementById('fitur-kue-desain').classList.add('hidden');
            document.getElementById('teks-input-desain').classList.add('hidden');
            document.getElementById('tampilan-ucapan-desain').innerText = decodeURIComponent(paramPesan);
            const groupBtn = document.querySelector('#area-desain .button-group');
            if(groupBtn) groupBtn.classList.add('hidden');
        } else {
            document.getElementById('area-instan').classList.remove('hidden');
            if(document.getElementById('fitur-kue-instan')) document.getElementById('fitur-kue-instan').classList.add('hidden');
            document.getElementById('teks-input-instan').classList.add('hidden');
            
            const hiasanAtas = document.getElementById('hiasan-atas-instan');
            const hiasanBawah = document.getElementById('hiasan-bawah-instan');
            if(paramTema === 'lebaran') {
                hiasanAtas.innerText = "🌙 ✨ 🕌 ✨ 🌙"; hiasanBawah.innerText = "✨ Ketupat & Berkah ✨";
            } else if(paramTema === 'cinta') {
                hiasanAtas.innerText = "❤️ ✨ 🎀 ✨ ❤️"; hiasanBawah.innerText = "💖 Selalu Bersamamu 💖";
            } else if(paramTema === 'ultah') {
                hiasanAtas.innerText = "🎈 ✨ 🎂 ✨ 🎈"; hiasanBawah.innerText = "🎉 Tiup Lilinnya! 🎉";
            }
            
            document.getElementById('tampilan-ucapan-instan').innerText = decodeURIComponent(paramPesan);
            const groupBtn = document.querySelector('#area-instan .button-group');
            if(groupBtn) groupBtn.classList.add('hidden');
        }
    }
});
