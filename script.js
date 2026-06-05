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
        if(hiasanBawah) hiasanBawah.innerText = "✨ Ketupat & Berkah ✨";
    } else if (namaTema === 'cinta') {
        if(hiasanBawah) hiasanBawah.innerText = "💖 Selalu Bersamamu 💖";
    } else if (namaTema === 'ultah') {
        if(hiasanBawah) hiasanBawah.innerText = "🎉 Tiup Lilinnya! 🎉";
        if(kueInstan) kueInstan.style.fill = "#ff7ff5";
    } else {
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

// 1. Fungsi buat generate link kustom dan otomatis menyalin ke clipboard
function bagikanLink(mode) {
    let teksPesan = "";
    if (mode === 'desain') {
        teksPesan = document.getElementById('teks-input-desain').value;
    } else {
        teksPesan = document.getElementById('teks-input-instan').value;
    }

    if (!teksPesan) {
        alert("Ketik ucapan kamu dulu sebelum mengirim ya!");
        return;
    }

    // Mengubah teks ucapan jadi kode aman untuk URL
    const pesanAman = encodeURIComponent(teksPesan);
    
    // Menyusun link kustom bawaan tema dan pesan
    const linkHasil = `${window.location.origin}${window.location.pathname}?tema=${temaAktif}&mode=${mode}&pesan=${pesanAman}`;

    // Proses copy otomatis ke clipboard laptop/HP
    navigator.clipboard.writeText(linkHasil).then(() => {
        alert("✨ Link ucapan berhasil dibuat dan disalin! Tinggal kamu paste (Ctrl+V) dan kirim ke WhatsApp temanmu ya!");
    }).catch(err => {
        alert("Gagal menyalin link otomatis. Ini link kamu: " + linkHasil);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramTema = urlParams.get('tema');
    const paramMode = urlParams.get('mode');
    const paramPesan = urlParams.get('pesan');

    // Jika ada kiriman pesan di URL, langsung bypass lompat ke tampilan surat
    if (paramTema && paramPesan) {
        // Sembunyikan halaman awal
        document.getElementById('halaman-awal').classList.add('hidden');
        
        // Atur tema body agar neon kotaknya berubah
        document.body.className = 'tema-' + paramTema;
        temaAktif = paramTema;

        if (paramMode === 'desain') {
            document.getElementById('area-desain').classList.remove('hidden');
            document.getElementById('fitur-kue-desain').classList.add('hidden'); // Sembunyikan editor kuenya karena ini mode baca
            document.getElementById('teks-input-desain').classList.add('hidden'); // Sembunyikan tempat mengetik
            document.getElementById('tampilan-ucapan-desain').innerText = decodeURIComponent(paramPesan);
        } else {
            document.getElementById('area-instan').classList.remove('hidden');
            document.getElementById('fitur-kue-instan').classList.add('hidden');
            document.getElementById('teks-input-instan').classList.add('hidden');
            
            // Atur hiasan dekorasi atas bawah sesuai tema kiriman
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
        }
    }
});
