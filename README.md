# Website Landing Page Pilkades 2026 - Voting Online

Website sosialisasi dan kampanye digital untuk Pemilihan Kepala Desa (Pilkades) 2026 dengan sistem **pemungutan suara online**. Website ini dibangun menggunakan HTML, CSS, dan JavaScript murni (vanilla) tanpa framework, dioptimalkan untuk akses mobile dan siap di-deploy ke Vercel.

## 🎯 Fitur Utama

### **Halaman 1: Sosialisasi Pilkades (index.html)**
- ✅ Hero section dengan logo dan judul menarik
- ✅ Info Cards: Waktu, Platform, Syarat, Jumlah Kandidat
- ✅ Section "Keunggulan Voting Online" (4 poin)
- ✅ Timeline "Tata Cara Voting Online" (6 langkah)
- ✅ FAQ (Frequently Asked Questions) 6 pertanyaan umum
- ✅ Info penting dengan alert box (Token, Keamanan, Waktu)
- ✅ CTA button menuju profil kandidat
- ✅ Background animasi shapes
- ✅ Scroll animations

### **Halaman 2: Profil Kandidat (kandidat.html)**
- ✅ Navbar dengan tombol kembali
- ✅ Grid 3 kandidat (02 sebagai kandidat utama)
- ✅ **Kandidat 01 & 03 (Lawan)**: Siluet, non-interaktif
- ✅ **Kandidat 02 (Utama)**: Border emas, hover overlay, badge
- ✅ Modal pop-up visi & misi lengkap:
  - Visi statement
  - 5 poin misi
  - 3 program unggulan
- ✅ Floating WhatsApp button

## 🗳️ Sistem Voting Online

Website ini dirancang untuk **sistem pemungutan suara online** dengan fitur:

## 🎨 Desain

### Palet Warna
- **Primary Blue**: `#1e3a8a` (Biru tua untuk kepemimpinan)
- **Accent Gold**: `#fbbf24` (Emas untuk kesan wibawa)
- **Text Dark**: `#1f2937`
- **Background**: `#f3f4f6`

### Tipografi
- Font: System font stack (Segoe UI, Roboto, sans-serif)
- Responsive: Ukuran font menyesuaikan layar

### Animasi & Interaksi
- Border gradient beranimasi pada kandidat utama
- Hover effects yang smooth
- Modal dengan fade-in dan slide-up animation
- Intersection Observer untuk entrance animation cards

## 📱 Responsive Design

Website ini **Mobile-First** dan telah dioptimalkan untuk:
- ✅ Smartphone (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px+)

## 🚀 Cara Deploy ke Vercel

### Metode 1: Via Vercel CLI

1. Install Vercel CLI (jika belum):
   ```bash
   npm install -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

3. Deploy project:
   ```bash
   vercel
   ```

4. Ikuti instruksi di terminal
5. Untuk production deploy:
   ```bash
   vercel --prod
   ```

### Metode 2: Via Vercel Dashboard (Recommended)

1. Push kode ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository dari GitHub
5. Klik "Deploy"
6. Selesai! Website langsung online

### Metode 3: Deploy Manual via Drag & Drop

1. Buka [vercel.com/new](https://vercel.com/new)
2. Pilih tab "Deploy from folder"
3. Drag & drop folder project
4. Klik "Deploy"

## 📁 Struktur File

```
pilkades-landing/
│
├── index.html          # Halaman sosialisasi voting online
├── kandidat.html       # Halaman profil kandidat
├── intro-style.css     # CSS untuk halaman intro
├── intro-script.js     # JavaScript untuk halaman intro
├── style.css           # CSS untuk halaman kandidat
├── script.js           # JavaScript untuk halaman kandidat
├── vercel.json         # Konfigurasi Vercel
├── buka-preview.bat    # Script untuk preview lokal
└── README.md           # Dokumentasi (file ini)
```

## ⚙️ Kustomisasi

### Mengganti Foto Kandidat

Ganti URL di `kandidat.html` bagian kandidat utama:
```html
<img src="assets/images/kandidat/kandidat-02.jpg" alt="Kandidat 02" class="kandidat-image">
```

**Rekomendasi ukuran foto**: 400x400px (rasio 1:1)

📖 **Baca panduan lengkap**: `PANDUAN-UPLOAD-FOTO.md`

### Mengganti Nama Desa

Edit di `index.html` pada bagian hero:
```html
<h1 class="main-title">Pemilihan Kepala Desa</h1>
<h2 class="sub-title">Desa [NAMA_DESA_ANDA] 2026</h2>
```

Dan di `kandidat.html` jika diperlukan.

### Mengganti Nomor WhatsApp

Edit link WhatsApp di `index.html`:
```html
<a href="https://wa.me/62XXXXXXXXXXX?text=Halo%20..." class="whatsapp-float">
```

Ganti `62XXXXXXXXXXX` dengan nomor WhatsApp Tim Sukses (format internasional).

### Mengedit Visi, Misi, dan Program

Edit konten di dalam `<div class="modal-body">` pada file `index.html`.

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur semantik dan modern
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables untuk theme
  - Animations & Transitions
  - Mobile-first responsive design
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API
  - Modal functionality

## ⚡ Optimasi Performa

- ✅ Tidak menggunakan framework (lebih ringan)
- ✅ Inline critical CSS (bisa ditambahkan)
- ✅ Lazy loading untuk gambar
- ✅ Intersection Observer untuk animasi
- ✅ Minified code ready (optional)
- ✅ CDN-friendly assets

### Estimasi Load Time
- **3G Network**: < 2 detik
- **4G Network**: < 1 detik
- **WiFi**: < 0.5 detik

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Checklist Sebelum Deploy

- [ ] Ganti nama desa di kedua halaman
- [ ] Upload foto kandidat utama dan update URL
- [ ] Update visi, misi, dan program kerja kandidat
- [ ] Ganti nomor WhatsApp Tim Sukses/Tim Teknis
- [ ] Update tanggal dan waktu voting
- [ ] Sesuaikan info tentang token voting (jika diperlukan)
- [ ] Test responsive di berbagai device
- [ ] Test modal visi-misi buka/tutup
- [ ] Test tombol WhatsApp
- [ ] Test navigasi antar halaman
- [ ] Validasi HTML di [validator.w3.org](https://validator.w3.org)

## 🎯 Tips Kampanye Digital

1. **Bagikan Link via WhatsApp Group**
   - Buat pesan singkat dan menarik
   - Sertakan emoji agar lebih engaging
   - Contoh: "🗳️ Lihat Visi & Misi Calon No. 02 di sini: [link]"

2. **Buat QR Code**
   - Generate QR Code dari URL website
   - Print dan sebar di banner/poster fisik
   - Warga bisa langsung scan dan akses

3. **Social Media Sharing**
   - Buat post di Facebook dengan screenshot website
   - Share link di story Instagram
   - Buat poster digital dengan link

4. **Monitor Akses**
   - Gunakan Vercel Analytics (gratis)
   - Lihat jumlah visitor dan device yang digunakan

## 📞 Support & Bantuan

Jika ada masalah atau pertanyaan, silakan:
- Buka issue di GitHub repository
- Hubungi developer
- Lihat dokumentasi Vercel: [vercel.com/docs](https://vercel.com/docs)

## 📄 License

Free to use untuk keperluan kampanye Pilkades.

---

**Dibuat dengan ❤️ untuk demokrasi desa yang lebih baik**

🗳️ **Gunakan Hak Pilih Anda dengan Bijak!**
# pilkasdes
