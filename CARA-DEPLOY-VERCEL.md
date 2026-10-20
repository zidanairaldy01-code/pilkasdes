# 🚀 Panduan Lengkap Deploy ke Vercel

Panduan step-by-step deploy website Pilkades ke Vercel (gratis, cepat, dan mudah!)

---

## 🎯 Pilih Metode Deploy

Ada **3 cara** deploy ke Vercel:

| Metode | Kemudahan | Kecepatan | Rekomendasi |
|--------|-----------|-----------|-------------|
| **1. Drag & Drop** | ⭐⭐⭐⭐⭐ | ⚡ Super cepat | ✅ **RECOMMENDED untuk pemula** |
| **2. Via GitHub** | ⭐⭐⭐⭐ | ⚡ Cepat | ✅ Best untuk update berkala |
| **3. Via CLI** | ⭐⭐⭐ | ⚡⚡ Cepat | Untuk developer |

---

## 🥇 METODE 1: Drag & Drop (PALING MUDAH!)

### **Langkah-langkah:**

#### **Step 1: Persiapan File**

1. Buka folder project `sosialisasi pilkades`
2. Pastikan struktur file seperti ini:
   ```
   sosialisasi pilkades/
   ├── index.html
   ├── kandidat.html
   ├── intro-style.css
   ├── style.css
   ├── intro-script.js
   ├── script.js
   ├── vercel.json
   └── assets/
       └── images/
           └── kandidat/
               └── (foto-foto kandidat)
   ```

3. ✅ Pastikan foto kandidat sudah di-upload
4. ✅ Pastikan semua konten sudah di-update (nama desa, tanggal, nomor WA)

#### **Step 2: Buka Vercel**

1. Buka browser (Chrome/Firefox/Edge)
2. Kunjungi: **https://vercel.com**
3. Klik tombol **"Sign Up"** atau **"Start Deploying"**

   ![Vercel Homepage](https://vercel.com/og-image.png)

#### **Step 3: Buat Akun (Pilih Salah Satu)**

**Pilihan A: Sign Up dengan GitHub** (Recommended)
1. Klik **"Continue with GitHub"**
2. Login dengan akun GitHub Anda
3. Authorize Vercel

**Pilihan B: Sign Up dengan GitLab**
1. Klik **"Continue with GitLab"**
2. Login dengan akun GitLab

**Pilihan C: Sign Up dengan Email**
1. Klik **"Continue with Email"**
2. Masukkan email Anda
3. Cek inbox untuk verification link
4. Klik link verification

#### **Step 4: Deploy Project**

Setelah login, Anda akan masuk ke Dashboard Vercel.

1. Klik tombol besar **"Add New..."** di kanan atas
2. Pilih **"Project"**
3. Di bagian bawah, klik tab **"Deploy using..."**
4. Anda akan melihat area **"Drop your project files here"**

   ```
   ┌─────────────────────────────────────┐
   │                                     │
   │    📁 Drop your project files       │
   │         here to deploy              │
   │                                     │
   │        or click to browse           │
   │                                     │
   └─────────────────────────────────────┘
   ```

5. **DRAG folder `sosialisasi pilkades`** ke area ini
   
   **ATAU**
   
   Klik area tersebut → pilih folder `sosialisasi pilkades`

6. Tunggu upload selesai (loading bar akan muncul)

#### **Step 5: Configure Project (Opsional)**

Setelah upload, Anda akan melihat halaman konfigurasi:

1. **Project Name**: 
   - Default: `sosialisasi-pilkades`
   - Bisa diganti: `pilkades-sukamaju-2026`
   
2. **Framework Preset**: 
   - Pilih **"Other"** atau biarkan default
   
3. **Root Directory**: 
   - Biarkan **`./`** (default)

4. Klik tombol besar **"Deploy"**

#### **Step 6: Tunggu Deployment**

1. Vercel akan proses deployment (± 30 detik - 2 menit)
2. Anda akan melihat animasi loading
3. Log deployment akan muncul (bisa diabaikan jika tidak ada error)

#### **Step 7: Deployment Success! 🎉**

Setelah selesai, Anda akan melihat:

```
🎉 Congratulations! Your project has been deployed!

Visit: https://pilkades-sukamaju-2026.vercel.app
```

1. Klik link tersebut untuk membuka website Anda
2. Website SUDAH LIVE dan bisa diakses siapa saja!

---

## 🥈 METODE 2: Deploy Via GitHub (Auto Update)

### **Keuntungan:**
- ✅ Auto deploy setiap kali update code
- ✅ History commit tersimpan
- ✅ Rollback mudah jika ada masalah

### **Langkah-langkah:**

#### **Step 1: Upload ke GitHub**

**Opsi A: Via GitHub Desktop (Mudah)**

1. Download & Install **GitHub Desktop**:
   - https://desktop.github.com/

2. Buka GitHub Desktop
3. Klik **"File"** → **"Add Local Repository"**
4. Pilih folder `sosialisasi pilkades`
5. Klik **"Create Repository"**
6. Isi:
   - Name: `pilkades-2026`
   - Description: `Website Sosialisasi Pilkades 2026`
   - Local Path: (sudah terisi otomatis)
7. Klik **"Create Repository"**
8. Klik **"Publish Repository"**
9. Pilih **Public** atau **Private**
10. Klik **"Publish"**

**Opsi B: Via Git Command (Advanced)**

Buka Command Prompt di folder project:

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Website Pilkades 2026"

# Create repository di GitHub (via browser):
# https://github.com/new

# Add remote (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### **Step 2: Connect Vercel ke GitHub**

1. Login ke **https://vercel.com**
2. Klik **"Add New..."** → **"Project"**
3. Pilih **"Import Git Repository"**
4. Pilih **GitHub** (jika belum connect, klik "Connect")
5. Authorize Vercel untuk akses GitHub
6. Cari repository: `pilkades-2026`
7. Klik **"Import"**

#### **Step 3: Configure & Deploy**

1. **Framework Preset**: Other
2. **Root Directory**: `./`
3. Klik **"Deploy"**

#### **Step 4: Done! 🎉**

Website deployed dan akan **auto-update** setiap kali Anda push ke GitHub!

---

## 🥉 METODE 3: Deploy Via CLI (Developer)

### **Langkah-langkah:**

#### **Step 1: Install Vercel CLI**

Buka Command Prompt / PowerShell:

```bash
npm install -g vercel
```

**Jika belum punya Node.js:**
1. Download dari: https://nodejs.org/
2. Install Node.js
3. Restart Command Prompt
4. Jalankan command di atas lagi

#### **Step 2: Login Vercel**

```bash
vercel login
```

Pilih metode login:
- Email
- GitHub
- GitLab

#### **Step 3: Deploy**

Masuk ke folder project:

```bash
cd "C:\sosialisasi pilkades"
```

Deploy:

```bash
vercel
```

Ikuti prompt:
1. **Set up and deploy?** → Y (Yes)
2. **Which scope?** → Pilih akun Anda
3. **Link to existing project?** → N (No)
4. **What's your project's name?** → pilkades-sukamaju-2026
5. **In which directory is your code located?** → ./ (Enter)

Tunggu proses selesai.

#### **Step 4: Deploy Production**

```bash
vercel --prod
```

Website akan live di URL production!

---

## 🔧 Konfigurasi Custom Domain (Opsional)

### **Jika Anda punya domain sendiri (misal: pilkades.sukamaju.desa.id)**

1. Login ke Vercel Dashboard
2. Pilih project Anda
3. Klik tab **"Settings"**
4. Klik **"Domains"** di sidebar
5. Klik **"Add"**
6. Masukkan domain Anda: `pilkades.sukamaju.desa.id`
7. Ikuti instruksi untuk setup DNS

---

## 📝 Checklist Sebelum Deploy

Sebelum deploy, pastikan:

- [ ] ✅ Semua foto kandidat sudah di-upload
- [ ] ✅ Nama desa sudah diganti dari "Sukamaju"
- [ ] ✅ Tanggal voting sudah disesuaikan
- [ ] ✅ Nomor WhatsApp sudah diganti
- [ ] ✅ Visi & misi sudah diupdate
- [ ] ✅ Nama kandidat sudah diganti
- [ ] ✅ Test website di local (buka MULAI-DISINI.bat)
- [ ] ✅ Test responsive (buka TEST-RESPONSIVE.html)
- [ ] ✅ Tidak ada typo atau error
- [ ] ✅ File `vercel.json` ada di root folder

---

## 🎯 Setelah Deploy

### **1. Test Website Live**

1. Buka URL yang diberikan Vercel
2. Test di berbagai device:
   - Smartphone
   - Tablet
   - Desktop
3. Test semua fitur:
   - Navigasi (index → kandidat → kembali)
   - Modal visi-misi
   - WhatsApp button
   - Foto kandidat muncul
   - Responsive design

### **2. Share Link**

Website sudah online! Bagikan link via:

- ✅ WhatsApp Group warga
- ✅ Facebook
- ✅ Instagram
- ✅ Print QR Code untuk poster

**Contoh URL:**
```
https://pilkades-sukamaju-2026.vercel.app
```

### **3. Monitor Analytics (Opsional)**

Vercel menyediakan analytics gratis:

1. Dashboard Vercel → Pilih project
2. Klik tab **"Analytics"**
3. Lihat:
   - Jumlah visitor
   - Page views
   - Device breakdown

---

## 🔄 Cara Update Website Setelah Deploy

### **Jika Deploy via Drag & Drop:**

1. Edit file di local
2. Kembali ke Vercel Dashboard
3. Pilih project Anda
4. Klik **"Deployments"**
5. Klik **"Redeploy"**
6. Upload folder yang sudah di-update

### **Jika Deploy via GitHub:**

1. Edit file di local
2. Commit & push ke GitHub:
   ```bash
   git add .
   git commit -m "Update konten"
   git push
   ```
3. Vercel akan **auto-deploy** dalam 1-2 menit!

### **Jika Deploy via CLI:**

```bash
vercel --prod
```

---

## ❓ Troubleshooting

### **Error: "Command not found: vercel"**

**Solusi:**
1. Install Node.js dari https://nodejs.org/
2. Install Vercel CLI: `npm install -g vercel`
3. Restart terminal

---

### **Error: "File not found" setelah deploy**

**Penyebab:** Path foto salah

**Solusi:**
1. Pastikan struktur folder benar:
   ```
   assets/images/kandidat/kandidat-01.jpg
   ```
2. Cek path di HTML: `assets/images/kandidat/kandidat-01.jpg`
3. Redeploy

---

### **Foto tidak muncul di website live**

**Solusi:**
1. Cek apakah file foto terupload:
   - Vercel Dashboard → Project → Files
   - Cari folder `assets/images/kandidat/`
2. Cek case-sensitive:
   - ✅ `kandidat-01.jpg`
   - ❌ `Kandidat-01.jpg`
3. Redeploy dengan struktur folder yang benar

---

### **Website terlalu lambat loading**

**Solusi:**
1. Compress foto kandidat (< 300KB per foto)
2. Gunakan TinyPNG: https://tinypng.com/
3. Redeploy

---

### **Error: "Deployment failed"**

**Solusi:**
1. Cek log error di Vercel Dashboard
2. Pastikan `vercel.json` ada dan valid
3. Pastikan tidak ada file corrupt
4. Coba deploy ulang

---

## 🎯 Tips & Tricks

### **1. Shorten URL**

URL Vercel kadang panjang. Gunakan URL shortener:

- Bit.ly: https://bitly.com/
- TinyURL: https://tinyurl.com/

**Contoh:**
```
https://pilkades-sukamaju-2026.vercel.app
↓
https://bit.ly/pilkades-sukamaju
```

### **2. Generate QR Code**

Buat QR Code untuk poster fisik:

- QR Code Generator: https://www.qr-code-generator.com/
- Input URL website
- Download QR Code PNG
- Print di poster/banner

### **3. Monitor Uptime**

Gunakan UptimeRobot (gratis):

- https://uptimerobot.com/
- Monitor website 24/7
- Alert jika website down

### **4. Password Protection (Opsional)**

Jika ingin password sebelum website live:

1. Vercel Dashboard → Project → Settings
2. Pilih **"Password Protection"**
3. Set password
4. Share password ke panitia only

---

## 📊 Perbandingan Hosting

| Platform | Gratis? | Kecepatan | Mudah? | SSL? |
|----------|---------|-----------|--------|------|
| **Vercel** | ✅ Ya | ⚡⚡⚡ Super cepat | ✅ Sangat mudah | ✅ Auto |
| Netlify | ✅ Ya | ⚡⚡ Cepat | ✅ Mudah | ✅ Auto |
| GitHub Pages | ✅ Ya | ⚡ Standar | ⭐ Agak ribet | ✅ Auto |
| Firebase | ✅ Ya | ⚡⚡ Cepat | ⭐⭐ Perlu config | ✅ Auto |

**Rekomendasi:** Vercel (paling mudah + paling cepat)

---

## 🎉 Selesai!

Website Pilkades Anda sekarang **LIVE dan bisa diakses siapa saja!**

### **Next Steps:**

1. ✅ Test website di berbagai device
2. ✅ Share link ke WhatsApp Group warga
3. ✅ Buat QR Code untuk poster
4. ✅ Post di social media
5. ✅ Monitor analytics

---

## 📞 Butuh Bantuan?

**Dokumentasi Resmi:**
- Vercel Docs: https://vercel.com/docs

**Video Tutorial:**
- YouTube: Search "Deploy static site to Vercel"

**Community:**
- Vercel Discord: https://vercel.com/discord

---

**Selamat! Website Pilkades Anda sudah online!** 🚀🎉

Website URL: `https://YOUR-PROJECT.vercel.app`

**Share link ini ke warga untuk sosialisasi kandidat!** 📱✨
