const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Toggle class 'dark-mode' pada elemen body
    document.body.classList.toggle("dark-mode");

    // Ubah teks tombol dan styling warna berdasarkan mode aktif
    if (document.body.classList.contains("dark-mode")) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#f1f1f1";
      themeToggleBtn.textContent = "Mode Terang";
    } else {
      document.body.style.backgroundColor = "#f9f9f9";
      document.body.style.color = "#333";
      themeToggleBtn.textContent = "Mode Gelap";
    }
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // Mencegah halaman melakukan reload saat tombol diklik
    e.preventDefault();

    // Ambil nilai dari input nama
    const nameInput = document.getElementById("name").value;

    // Tampilkan pesan berhasil
    alert(`Terima kasih ${nameInput}, pesan Anda telah berhasil dikirim!`);

    // Reset form kembali kosong
    contactForm.reset();
  });
}
