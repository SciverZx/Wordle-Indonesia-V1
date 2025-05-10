# 🟩 Wordle Clone - Versi Bahasa Indonesia

Proyek ini adalah tiruan (clone) dari game populer **Wordle**, dibuat menggunakan **HTML, CSS, dan JavaScript**. Pemain memiliki 6 kesempatan untuk menebak kata rahasia yang terdiri dari 5 huruf. Game ini menggunakan wordlist `.lst` yang dimuat secara dinamis untuk variasi kata yang lebih banyak.

## ✨ Fitur

- ✅ Game Wordle sepenuhnya lokal (tanpa backend)
- ✅ Mendukung wordlist eksternal (.lst) via `fetch()`
- ✅ Validasi otomatis input (tidak bisa memasukkan spasi)
- ✅ Highlight warna:
  - 🟩 Hijau (Benar dan posisi tepat)
  - 🟨 Kuning (Benar tapi posisi salah)
  - ⬛ Abu-abu (Salah)

## 📦 Struktur Folder
```
/Wordle
├── index.html         → Halaman utama
├── app.js             → Logika game Wordle
├── style.css          → Tampilan dan animasi
├── wordlist.lst       → Daftar kata acak (5 huruf, huruf kapital)
└── README.md          → Dokumentasi proyek
```


## 🛠 Cara Menjalankan

Karena file `.lst` dimuat menggunakan `fetch()`, kamu **tidak bisa** langsung membuka `index.html` dari file explorer. Gunakan server lokal:

### 💻 Jalankan Secara Lokal

#### Dengan VS Code + Live Server:
1. Buka folder di VS Code
2. Klik kanan `index.html` → **Open with Live Server**

#### Dengan Python:
```bash
# Di direktori proyek
python -m http.server
# Akses: http://localhost:8000

