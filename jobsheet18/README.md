### PRAKTIKUM 1 – Image Optimization
#### Optimasi Gambar Lokal (Public Folder)
perfoma page 404 di lighthouse sebelum memakai tag Image<br>
![alt text](gambar_dokumentasi/1.png)<br>
Mengganti tag <img> pada halaman 404<br>
![alt text](gambar_dokumentasi/2.png)<br>
Hasil perfoma page 404 di lighthouse setelah memakai tag Image<br>
![alt text](gambar_dokumentasi/3.png)<br><br>

#### Optimasi Gambar Remote (External URL)
edit tag imag di file views/product/index.tsx
![alt text](gambar_dokumentasi/4.png)<br>
Buka file next.config.js<br>
![alt text](gambar_dokumentasi/5.png)<br><br>

Hasil :<br>
tanpa tag Image<br>
![alt text](gambar_dokumentasi/6.png)<br>
Saat memakai tag Image<br>
![alt text](gambar_dokumentasi/7.png)<br><br>

### PRAKTIKUM 2 – Font Optimization
#### Menggunakan next/font
modifikasi file index.tsx pada folder Appshell/index.tsx<br>
![alt text](gambar_dokumentasi/8.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/9.png)<br><br>

### PRAKTIKUM 3 – Script Optimization
#### Menggunakan next/script
modifikasi file index.tsx pada folder layouts/Navbar<br>
![alt text](gambar_dokumentasi/10.png)<br><br>

### PRAKTIKUM 4 – Optimasi Avatar dengan next/image
modifikasi file index.tsx pada folder layouts/navbar<br>
![alt text](gambar_dokumentasi/11.png)<br>
menambaahkan konfigurasi untuk url google di next.config.ts agar data gambar bisa dipakai di aplikasi<br>
![alt text](gambar_dokumentasi/12.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/13.png)<br>

Tugas<br>
1. Optimasi semua image di project menggunakan next/image<br>
![alt text](gambar_dokumentasi/14.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/15.png)<br>
2. Gunakan minimal 1 font dari next/font<br>
![alt text](gambar_dokumentasi/16.png)<br>
menggunakan font roboto<br>
3. Tambahkan script Google Analytics menggunakan next/script<br>
![alt text](gambar_dokumentasi/17.png)<br>
4. Terapkan dynamic import pada minimal 1 komponen<br>
![alt text](gambar_dokumentasi/18.png)<br>
5. Dokumentasikan perubahan performa (screenshot Lighthouse)<br>
![alt text](gambar_dokumentasi/19.png)<br>

Refleksi & Diskusi<br>
1. Mengapa img biasa tidak optimal?<br>
-> tag img tidak bisa otomatis mengubah gambar menjadi format modern seperti WebP atau AVIF yang jauh lebih ringan dibanding PNG/JPG.<br>
-> Jika mengunggah gambar 5MB, browser akan mengunduh seluruh 5MB tersebut meskipun ditampilkan dalam ukuran kecil<br>
2. Apa perbedaan font CDN dan next/font?<br>
-> Font CDN: Browser harus melakukan permintaan HTTP tambahan ke server luar saat halaman dimuat.<br>
-> next/font: Next.js mengunduh file font tersebut saat proses build dan menyimpannya secara lokal di server<br>
3. Mengapa script bisa membuat website lambat?<br>
-> Render-Blocking: Secara default, browser akan berhenti merender HTML saat menemukan tag script untuk mengunduh dan mengeksekusi kode JavaScript tersebut.<br>
4. Kapan harus menggunakan dynamic import?<br>
-> Komponen memiliki library besar<br>
-> Komponen yang tidak langsung muncul saat halaman dimuat, seperti Modal, Sidebar, atau Dropdown.<br>
-> Mengurangi ukuran file JavaScript utama agar halaman awal muncul secepat kilat.<br>
5. Apa dampak bundle size terhadap UX?<br>
-> Waktu Tunggu (Loading Time): Semakin besar bundle, semakin lama user menatap layar putih atau loading spinner.<br>
-> Bundle besar membuat browser sibuk memproses kode, sehingga user merasa website lemot atau tidak bisa diklik meskipun gambarnya sudah muncul.<br>