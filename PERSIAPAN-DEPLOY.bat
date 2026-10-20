@echo off
title Checklist Persiapan Deploy ke Vercel
color 0B
cls

echo.
echo ╔══════════════════════════════════════════════════╗
echo ║   CHECKLIST PERSIAPAN DEPLOY KE VERCEL           ║
echo ╚══════════════════════════════════════════════════╝
echo.
echo Sebelum deploy, pastikan semua hal berikut sudah OK:
echo.
echo ════════════════════════════════════════════════════
echo.

echo [1] FOTO KANDIDAT
echo.
echo     Apakah foto kandidat sudah di-upload?
echo     Lokasi: assets\images\kandidat\
echo.
set /p foto="     [Y/N] Foto sudah di-upload: "
if /i "%foto%"=="N" (
    echo     ⚠️  Upload foto dulu sebelum deploy!
    pause
    exit
)
echo     ✓ OK
echo.
echo ════════════════════════════════════════════════════
echo.

echo [2] KONTEN WEBSITE
echo.
echo     Apakah konten sudah diupdate?
echo     - Nama desa
echo     - Tanggal voting  
echo     - Nomor WhatsApp
echo     - Nama kandidat
echo     - Visi ^& Misi
echo.
set /p konten="     [Y/N] Konten sudah diupdate: "
if /i "%konten%"=="N" (
    echo     ⚠️  Update konten dulu!
    pause
    exit
)
echo     ✓ OK
echo.
echo ════════════════════════════════════════════════════
echo.

echo [3] TEST LOKAL
echo.
echo     Apakah website sudah di-test di browser?
echo.
set /p test="     [Y/N] Sudah test lokal: "
if /i "%test%"=="N" (
    echo.
    echo     Membuka website untuk test...
    start index.html
    echo.
    echo     Silakan test dulu, lalu jalankan script ini lagi.
    pause
    exit
)
echo     ✓ OK
echo.
echo ════════════════════════════════════════════════════
echo.

echo [4] FOTO MUNCUL?
echo.
echo     Apakah foto kandidat muncul dengan benar?
echo.
set /p fotoMuncul="     [Y/N] Foto muncul: "
if /i "%fotoMuncul%"=="N" (
    echo     ⚠️  Fix foto dulu! Baca: TROUBLESHOOTING-FOTO.md
    pause
    exit
)
echo     ✓ OK
echo.
echo ════════════════════════════════════════════════════
echo.

echo [5] RESPONSIVE TEST
echo.
echo     Apakah tampilan mobile sudah di-test?
echo.
set /p responsive="     [Y/N] Sudah test responsive: "
if /i "%responsive%"=="N" (
    echo.
    echo     Membuka test responsive...
    start TEST-RESPONSIVE.html
    echo.
    echo     Silakan test responsive, lalu jalankan script ini lagi.
    pause
    exit
)
echo     ✓ OK
echo.
echo ════════════════════════════════════════════════════
echo.

cls
echo.
echo ╔══════════════════════════════════════════════════╗
echo ║          ✅ SIAP UNTUK DEPLOY! ✅                ║
echo ╚══════════════════════════════════════════════════╝
echo.
echo Website Anda sudah siap di-deploy ke Vercel!
echo.
echo ════════════════════════════════════════════════════
echo.
echo PILIH METODE DEPLOY:
echo.
echo [1] Drag ^& Drop (PALING MUDAH - RECOMMENDED)
echo     - Buka vercel.com
echo     - Drag folder ini ke area upload
echo     - Done!
echo.
echo [2] Via GitHub (Auto-update)
echo     - Push ke GitHub
echo     - Connect Vercel ke GitHub
echo     - Auto deploy setiap update
echo.
echo [3] Via CLI (Developer)
echo     - Install: npm install -g vercel
echo     - Login: vercel login
echo     - Deploy: vercel --prod
echo.
echo ════════════════════════════════════════════════════
echo.
set /p metode="Pilih metode [1/2/3]: "

if "%metode%"=="1" (
    echo.
    echo Membuka panduan Drag ^& Drop...
    start CARA-DEPLOY-VERCEL.md
    echo.
    echo Membuka Vercel di browser...
    start https://vercel.com/new
    echo.
    echo ════════════════════════════════════════════════════
    echo.
    echo LANGKAH SELANJUTNYA:
    echo.
    echo 1. Login atau Sign Up di Vercel
    echo 2. Drag folder "sosialisasi pilkades" ke area upload
    echo 3. Klik "Deploy"
    echo 4. Tunggu 1-2 menit
    echo 5. Website LIVE! 🎉
    echo.
    echo ════════════════════════════════════════════════════
    pause
    exit
)

if "%metode%"=="2" (
    echo.
    echo Membuka panduan GitHub...
    start CARA-DEPLOY-VERCEL.md
    echo.
    echo Baca section "METODE 2: Deploy Via GitHub"
    echo.
    pause
    exit
)

if "%metode%"=="3" (
    echo.
    echo Checking Node.js installation...
    where node >nul 2>&1
    if %errorlevel% neq 0 (
        echo.
        echo ❌ Node.js belum terinstall!
        echo.
        echo Download dan install Node.js dari:
        echo https://nodejs.org/
        echo.
        echo Setelah install, restart Command Prompt dan jalankan lagi.
        pause
        exit
    )
    
    echo ✓ Node.js terinstall
    echo.
    echo Checking Vercel CLI...
    where vercel >nul 2>&1
    if %errorlevel% neq 0 (
        echo.
        echo Vercel CLI belum terinstall.
        echo.
        set /p installCLI="Install Vercel CLI sekarang? [Y/N]: "
        if /i "%installCLI%"=="Y" (
            echo.
            echo Installing Vercel CLI...
            npm install -g vercel
            echo.
            echo ✓ Vercel CLI terinstall!
        ) else (
            echo.
            echo Install manual dengan: npm install -g vercel
            pause
            exit
        )
    ) else (
        echo ✓ Vercel CLI terinstall
    )
    
    echo.
    echo ════════════════════════════════════════════════════
    echo.
    echo DEPLOY VIA CLI:
    echo.
    echo 1. Login Vercel
    echo.
    set /p lanjutLogin="Lanjut login? [Y/N]: "
    if /i "%lanjutLogin%"=="Y" (
        vercel login
    )
    echo.
    echo 2. Deploy Project
    echo.
    set /p lanjutDeploy="Lanjut deploy? [Y/N]: "
    if /i "%lanjutDeploy%"=="Y" (
        echo.
        echo Deploying...
        vercel --prod
        echo.
        echo ✓ Deploy selesai!
        echo.
        echo Website sudah LIVE!
    )
    echo.
    pause
    exit
)

echo.
echo Pilihan tidak valid!
pause
