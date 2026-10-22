# 🗳️ Panduan Fitur Simulasi Pemilihan

## 📋 Daftar Isi
1. [Tentang Fitur Simulasi](#tentang-fitur-simulasi)
2. [Cara Mengakses](#cara-mengakses)
3. [Alur Simulasi (5 Langkah)](#alur-simulasi-5-langkah)
4. [Progress Bar](#progress-bar)
5. [Validasi & Keamanan](#validasi--keamanan)
6. [Mobile Friendly](#mobile-friendly)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Tentang Fitur Simulasi

Fitur **Simulasi Pemilihan** adalah fitur latihan voting online untuk membantu warga desa memahami tata cara pemilihan kepala desa secara online sebelum hari H.

### ✨ Keunggulan:
- ✅ **Interaktif**: User dapat merasakan pengalaman voting seperti aslinya
- ✅ **Progress Bar**: Menampilkan progress 0% - 100% sesuai langkah
- ✅ **Validasi Real-time**: NIK dan Token divalidasi sebelum lanjut
- ✅ **Mobile Responsive**: Optimal di smartphone (target utama warga)
- ✅ **Visual Feedback**: Setiap aksi memberikan feedback visual yang jelas

---

## 🚀 Cara Mengakses

### Method 1: Dari Halaman Utama
1. Buka `index.html`
2. Klik tombol **"Lihat Profil Kandidat"**
3. Klik kartu **Kandidat 02** (Kandidat Utama - dengan border gold)
4. Modal Visi & Misi akan terbuka
5. Klik tombol **"🗳️ Simulasi Pemilihan"** di bagian bawah modal

### Method 2: Langsung dari Kandidat
1. Buka `kandidat.html`
2. Klik kartu **Kandidat 02**
3. Modal Visi & Misi terbuka
4. Klik **"🗳️ Simulasi Pemilihan"**

---

## 📊 Alur Simulasi (5 Langkah)

### 🔷 Langkah 1: Verifikasi Data Pemilih (0% → 20%)

**Apa yang Harus Dilakukan:**
- Masukkan NIK (Nomor Induk Kependudukan) - 16 digit
- Masukkan Token Voting (contoh: ABC123XYZ)
- Klik tombol **"Lanjut →"**

**Validasi:**
- NIK harus **tepat 16 digit**
- Token harus **minimal 3 karakter**
- Jika tidak valid, akan muncul alert

**Progress Bar:** 0% (awal) → 20% (setelah klik Lanjut)

---

### 🔷 Langkah 2: Pilih Kandidat (20% → 40%)

**Apa yang Harus Dilakukan:**
- Klik salah satu dari 3 kandidat yang ditampilkan
- Kandidat yang dipilih akan ter-highlight (border gold + background kuning)
- Checkbox akan muncul tanda centang ✓
- Klik **"Lanjut →"** untuk konfirmasi

**Visual:**
- Kandidat 01: Gambar placeholder abu-abu
- Kandidat 02: Kandidat Utama (default terpilih)
- Kandidat 03: Gambar placeholder abu-abu

**Tombol:**
- **← Kembali**: Balik ke Step 1 (ubah NIK/Token)
- **Lanjut →**: Lanjut ke Step 3 (Konfirmasi)

**Progress Bar:** 20% → 40%

---

### 🔷 Langkah 3: Konfirmasi Pilihan (40% → 60%)

**Apa yang Ditampilkan:**
- ✅ NIK yang Anda masukkan
- ✅ Token yang Anda masukkan
- ✅ Kandidat yang Anda pilih (dengan badge nomor urut)
- ⚠️ **Peringatan**: Setelah klik "Kirim Suara", pilihan tidak bisa diubah!

**Tombol:**
- **← Kembali**: Balik ke Step 2 (ubah pilihan kandidat)
- **Kirim Suara 📤**: Kirim voting (lanjut ke Step 4)

**Progress Bar:** 40% → 60%

---

### 🔷 Langkah 4: Processing (60% → 80%)

**Apa yang Terjadi:**
- ⏳ Loading animation (spinner berputar)
- 💬 Text: "Memproses Suara Anda..."
- 📡 Text: "Mengirim ke server..."
- ⏱️ **Durasi**: 2 detik (otomatis lanjut ke Step 5)

**Catatan:** Step ini simulasi pengiriman data ke server. User tidak perlu klik apapun, akan otomatis lanjut.

**Progress Bar:** 60% → 80% → Auto lanjut ke 100%

---

### 🔷 Langkah 5: Berhasil! (100%)

**Apa yang Ditampilkan:**
- 🎉 Icon sukses (centang hijau besar)
- ✅ Text: "Voting Berhasil!"
- 📄 **Bukti Voting:**
  - **Nomor Transaksi**: `VOTE-2026-XXXXXXXX` (random, unique)
  - **Waktu**: Tanggal & jam saat ini (format: 15 Maret 2026, 10:30 WIB)
  - **Status**: ✅ Tercatat
- 📱 Informasi: "Bukti voting juga telah dikirim ke nomor HP Anda"

**Tombol:**
- **Selesai**: Tutup modal simulasi
- **🔄 Coba Lagi**: Restart simulasi dari Step 1 (reset semua input)

**Progress Bar:** 100% (penuh, warna gradient biru → gold)

---

## 📈 Progress Bar

### Visual Progress Bar:
```
[===============================================] 100%
Langkah 5 dari 5
```

### Detail Progress:
| Step | Langkah | Progress | Deskripsi |
|------|---------|----------|-----------|
| 1 | Verifikasi | 0% → 20% | Isi NIK & Token |
| 2 | Pilih Kandidat | 20% → 40% | Pilih salah satu kandidat |
| 3 | Konfirmasi | 40% → 60% | Cek kembali pilihan |
| 4 | Processing | 60% → 80% | Loading 2 detik |
| 5 | Selesai | 80% → 100% | Bukti voting muncul |

### Fitur Progress Bar:
- ✅ **Gradient Color**: Biru (#1e3a8a) → Gold (#fbbf24)
- ✅ **Smooth Animation**: Transition 0.4s ease
- ✅ **Persentase Real-time**: Update otomatis setiap ganti step
- ✅ **Step Counter**: Menampilkan "Langkah X dari 5"

---

## 🔒 Validasi & Keamanan

### Validasi Form (Step 1):

#### NIK (Nomor Induk Kependudukan)
- **Format**: 16 digit angka
- **Contoh Valid**: `3201234567890123`
- **Contoh Invalid**: 
  - `320123456789012` (kurang 1 digit) ❌
  - `32012345678901234` (lebih 1 digit) ❌
  - `ABCD123456789012` (ada huruf) ❌

#### Token Voting
- **Format**: Minimal 3 karakter (huruf/angka)
- **Contoh Valid**: 
  - `ABC123XYZ` ✅
  - `TOKEN2026` ✅
  - `XYZ` ✅
- **Contoh Invalid**: 
  - `AB` (kurang dari 3 karakter) ❌
  - `` (kosong) ❌

### Error Handling:
```javascript
// Jika NIK tidak valid:
⚠️ Mohon masukkan NIK yang valid (16 digit)

// Jika Token tidak valid:
⚠️ Mohon masukkan Token Voting
```

---

## 📱 Mobile Friendly

### Responsive Breakpoints:
- **Desktop**: > 768px (Grid 3 kolom untuk kandidat)
- **Tablet**: 481px - 768px (Grid 2 kolom)
- **Mobile**: 361px - 480px (Grid 1 kolom)
- **Mobile Small**: ≤ 360px (Grid 1 kolom, font lebih kecil)

### Mobile Optimizations:
1. **Grid Kandidat**: 3 kolom → 1 kolom (vertikal stack)
2. **Font Size**: Auto scale berdasarkan ukuran layar
3. **Button Size**: Minimal 44x44px (mudah di-tap)
4. **Modal Height**: Max 68vh (bisa scroll dengan nyaman)
5. **Input Fields**: Padding besar untuk mudah di-tap
6. **Progress Bar**: Tetap jelas terlihat di layar kecil

### Touch Optimizations:
- ✅ Tap target minimal 44x44px
- ✅ Active state saat di-tap
- ✅ Smooth scrolling di modal
- ✅ No accidental taps (spacing cukup antar elemen)

---

## 🛠️ Troubleshooting

### ❓ Problem: Progress bar tidak bergerak
**Solution:**
- Cek console browser (F12) untuk error JavaScript
- Pastikan file `script.js` ter-load dengan benar
- Clear cache browser (Ctrl + Shift + R)

---

### ❓ Problem: Modal tidak muncul saat klik tombol simulasi
**Solution:**
1. Pastikan Anda sudah klik kandidat 02 terlebih dahulu
2. Cek apakah modal Visi & Misi terbuka
3. Cek console untuk error JavaScript
4. Pastikan file HTML, CSS, JS ter-load semua

---

### ❓ Problem: Validasi NIK/Token tidak bekerja
**Solution:**
1. NIK harus **tepat 16 digit** (tidak boleh lebih/kurang)
2. Token harus **minimal 3 karakter**
3. Jangan ada spasi di awal/akhir
4. Pastikan JavaScript enabled di browser

---

### ❓ Problem: Step 4 (Loading) tidak auto lanjut ke Step 5
**Solution:**
- Tunggu 2 detik penuh
- Jangan klik apapun saat loading
- Jika stuck lebih dari 5 detik, refresh halaman
- Cek console untuk error JavaScript

---

### ❓ Problem: Layout berantakan di mobile
**Solution:**
1. Pastikan `<meta name="viewport">` ada di HTML
2. Test di DevTools dengan mode device (F12 → Device Toolbar)
3. Clear cache browser
4. Update browser ke versi terbaru

---

### ❓ Problem: Kandidat simulasi tidak bisa dipilih
**Solution:**
- Pastikan Anda klik tepat di area kartu kandidat
- Cek apakah checkbox muncul tanda centang
- Jika tidak ada respon, refresh halaman
- Cek console untuk error

---

### ❓ Problem: Tombol "Coba Lagi" tidak mereset form
**Solution:**
- Refresh halaman untuk reset manual
- Cek console untuk error
- Pastikan JavaScript enabled

---

## 🎨 Customization

### Mengubah Durasi Loading (Step 4):
File: `script.js`
```javascript
// Cari line ini (sekitar line 120):
setTimeout(() => {
    nextStep(5);
}, 2000); // 2000 = 2 detik

// Ubah angka 2000 ke durasi yang diinginkan (dalam milliseconds)
// Contoh: 3000 = 3 detik, 1000 = 1 detik
```

---

### Mengubah Warna Progress Bar:
File: `style.css`
```css
/* Cari line ini: */
.progress-fill {
    background: linear-gradient(90deg, #1e3a8a 0%, #fbbf24 100%);
}

/* Ubah warna sesuai keinginan:
   #1e3a8a = Biru
   #fbbf24 = Gold
*/
```

---

### Mengubah Format Nomor Transaksi:
File: `script.js`
```javascript
// Cari line ini:
const transactionId = 'VOTE-2026-' + Math.random().toString(36).substr(2, 8).toUpperCase();

// Ubah prefix 'VOTE-2026-' sesuai kebutuhan
// Contoh: 'PILKADES-2026-', 'DESA-VOTE-', dll.
```

---

## 📊 Analytics & Tracking

Untuk tracking berapa banyak user yang menggunakan simulasi, Anda bisa tambahkan kode berikut di `script.js`:

```javascript
// Di function openSimulasiModal()
function openSimulasiModal() {
    modalSimulasi.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetSimulasi();
    updateProgress(1);
    
    // Tambahkan tracking di sini:
    console.log('Simulasi opened at:', new Date());
    // Atau kirim ke Google Analytics:
    // gtag('event', 'simulasi_opened', { ... });
}
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Test di browser desktop (Chrome, Firefox, Edge)
- [ ] Test di browser mobile (Chrome Android, Safari iOS)
- [ ] Test semua 5 langkah simulasi berfungsi
- [ ] Test validasi NIK & Token
- [ ] Test progress bar bergerak 0% - 100%
- [ ] Test tombol "Kembali" di Step 2 & 3
- [ ] Test tombol "Coba Lagi" mereset form
- [ ] Test tombol "Selesai" menutup modal
- [ ] Test tombol X dan klik overlay menutup modal
- [ ] Test responsive di mobile (360px - 480px)
- [ ] Test loading animation Step 4 (2 detik)
- [ ] Test nomor transaksi unique setiap submit
- [ ] Test waktu voting sesuai waktu real
- [ ] No console errors di DevTools

---

## 📞 Support

Jika ada pertanyaan atau menemukan bug, silakan:
1. Buka file `TEST-SIMULASI.html` untuk checklist lengkap
2. Cek section Troubleshooting di atas
3. Hubungi developer atau buka issue di repository

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Fitur simulasi pemilihan 5 langkah
- ✅ Progress bar dengan persentase real-time
- ✅ Validasi NIK (16 digit) dan Token
- ✅ Loading animation 2 detik
- ✅ Bukti voting dengan nomor transaksi unique
- ✅ Mobile responsive (360px - 768px)
- ✅ Touch optimizations untuk smartphone

---

**Dibuat dengan ❤️ untuk Pilkades 2026**
