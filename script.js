const urlParams = new URLSearchParams(window.location.search);
const isiPesan = urlParams.get('pesan');
const jenisTema = urlParams.get('tema');

const daftarWarna = {
    lebaran: "#D4EFDF",
    biasa: "#AED6F1",
    ultah: "#F9E79F",  
    cinta: "#FADBD8"   
};

if (isiPesan) {
    document.getElementById('halaman-pengirim').classList.add('sembunyi');
    document.getElementById('halaman-penerima').classList.remove('sembunyi');
    
    document.getElementById('output-pesan').innerText = `"${isiPesan}"`;
    
    if (jenisTema && daftarWarna[jenisTema]) {
        document.body.style.background = daftarWarna[jenisTema];
    }
}

function buatLink() {
    const pesanUser = document.getElementById('input-pesan').value;
    const temaUser = document.getElementById('pilihan-tema').value;
    }

    const linkAsli = window.location.href.split('?')[0];
    const linkJadi = `${linkAsli}?tema=${temaUser}&pesan=${encodeURIComponent(pesanUser)}`;

    navigator.clipboard.writeText(linkJadi).then(() => {
        alert("🎉 Link ucapan berhasil disalin! Silakan langsung paste (tempel) dan kirim ke WA temanmu.");
    });
}
