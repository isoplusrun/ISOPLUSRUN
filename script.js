
// DATA HARGA (UPDATE)
const prices = {
    "5K": 210000,
    "10K": 280000,
    "KID DASH": 105000
};

// UPDATE HARGA
function updatePrice() {
    const category = document.getElementById("category").value;
    const priceBox = document.getElementById("priceBox");

    if (prices[category]) {
        priceBox.innerHTML = "Harga: Rp " + prices[category].toLocaleString("id-ID");
    } else {
        priceBox.innerHTML = "Harga: -";
    }
}

// AKTIFKAN BUTTON
const agree = document.getElementById("agree");
const submitBtn = document.getElementById("submitBtn");

submitBtn.disabled = true;

agree.addEventListener("change", function () {
    if (this.checked) {
        submitBtn.classList.add("active");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove("active");
        submitBtn.disabled = true;
    }
});

// SUBMIT KE WHATSAPP
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const jersey = document.getElementById("jersey").value;

    if (!name || !email || !phone || !category) {
        alert("Lengkapi data dulu!");
        return;
    }

    const price = prices[category];

    // FORMAT PESAN
    let message = 
`*PENDAFTARAN RUN EVENT*

Nama: ${name}
Email: ${email}
No HP: ${phone}
Kategori: ${category}
Jersey: ${jersey}
Harga: Rp ${price.toLocaleString("id-ID")}`;

    // NOMOR TUJUAN (GANTI YA!)
    const adminNumber = "6285194788329";

    // LINK WHATSAPP
    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
