# 📁 Folder Foto Kandidat

Folder ini digunakan untuk menyimpan foto-foto kandidat Kepala Desa.

## 📸 Panduan Upload Foto

### Format Foto yang Direkomendasikan:
- **Format**: JPG, JPEG, atau PNG
- **Ukuran**: 400x400 pixels (rasio 1:1)
- **Ukuran File**: Maksimal 500KB
- **Kualitas**: HD/High Resolution untuk hasil terbaik

### Penamaan File:
```
kandidat-01.jpg  → Untuk kandidat nomor urut 1
kandidat-02.jpg  → Untuk kandidat nomor urut 2
kandidat-03.jpg  → Untuk kandidat nomor urut 3
```

> **PENTING**: Gunakan huruf kecil dan format yang konsisten!

## 🖼️ Tips Foto yang Baik:

### ✅ DO (Lakukan):
- Gunakan foto formal/resmi dengan latar belakang polos
- Pastikan wajah terlihat jelas dan fokus
- Gunakan pencahayaan yang baik
- Photo close-up (dari dada ke atas)
- Ekspresi wajah ramah dan profesional
- Pakaian rapi dan formal

### ❌ DON'T (Hindari):
- Foto blur/buram
- Latar belakang ramai
- Foto dari jarak jauh
- Foto selfie casual
- Foto yang terlalu gelap/terang
- Foto dengan filter berlebihan

## 📝 Cara Mengganti Foto di Website:

### 1. Upload Foto ke Folder ini
Simpan foto dengan nama yang sesuai (kandidat-01.jpg, kandidat-02.jpg, dst.)

### 2. Edit File `kandidat.html`
Cari bagian kode kandidat dan ganti path foto:

**Untuk Kandidat 01:**
```html
<img src="assets/images/kandidat/kandidat-01.jpg" alt="Kandidat 01">
```

**Untuk Kandidat 02 (Kandidat Utama):**
```html
<img src="assets/images/kandidat/kandidat-02.jpg" alt="Kandidat 02">
```

**Untuk Kandidat 03:**
```html
<img src="assets/images/kandidat/kandidat-03.jpg" alt="Kandidat 03">
```

## 🔄 Contoh Lengkap Penggantian:

### SEBELUM (menggunakan placeholder):
```html
<img src="https://via.placeholder.com/400x400/666666/ffffff?text=Calon+01" 
     alt="Kandidat 01" 
     class="kandidat-image grayscale">
```

### SESUDAH (menggunakan foto asli):
```html
<img src="assets/images/kandidat/kandidat-01.jpg" 
     alt="Kandidat 01" 
     class="kandidat-image grayscale">
```

## 🎯 Quick Start:

1. Siapkan foto kandidat (format JPG/PNG, ukuran 400x400px)
2. Rename foto sesuai nomor urut: `kandidat-01.jpg`, `kandidat-02.jpg`, `kandidat-03.jpg`
3. Copy file foto ke folder `assets/images/kandidat/`
4. Edit file `kandidat.html` dan ganti URL foto
5. Refresh browser untuk melihat hasilnya

## 🖥️ Compress Foto (Opsional)

Untuk mempercepat loading website, compress foto online menggunakan:
- TinyPNG: https://tinypng.com/
- Compressor.io: https://compressor.io/
- Squoosh: https://squoosh.app/

Target: Ukuran akhir maksimal 200-300KB tanpa mengurangi kualitas visual.

## 📞 Butuh Bantuan?

Jika mengalami kesulitan upload atau foto tidak muncul:
1. Cek kembali nama file (harus persis sama)
2. Pastikan file berada di folder yang benar
3. Cek ukuran file (tidak terlalu besar)
4. Refresh browser dengan Ctrl+F5 (Windows) atau Cmd+Shift+R (Mac)
5. Hubungi developer untuk bantuan teknis

---

**Dibuat untuk**: Website Sosialisasi Pilkades 2026
**Update Terakhir**: Januari 2026
