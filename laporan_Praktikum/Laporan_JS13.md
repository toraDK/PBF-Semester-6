Bagian 1 – Membuat Middleware<br>
Modifikasi file index.tsx pada folder src/pages/produk<br>
![alt text](../jobsheet13/gambar_dokumentasi/1.png)<br>
Buat file: src/middleware.ts<br>
![alt text](../jobsheet13/gambar_dokumentasi/2.png)<br><br>

Bagian 2 – Struktur Dasar Middleware<br>
Kode dasar middleware<br>
![alt text](../jobsheet13/gambar_dokumentasi/3.png)<br>
Masih bisa mengakses halaman produk<br>
![alt text](../jobsheet13/gambar_dokumentasi/4.png)<br><br>

Bagian 3 – Redirect Sederhana<br>
kode middleware<br>
![alt text](../jobsheet13/gambar_dokumentasi/5.png)<br>
Saat ke url produk hasilnya akan auto redirect ke home dan error karena terus menerus loading<br>
![alt text](../jobsheet13/gambar_dokumentasi/6.png)<br><br>

Bagian 4 – Batasi Route Tertentu<br>
![alt text](../jobsheet13/gambar_dokumentasi/7.png)<br>
Hasil :<br>
![alt](../jobsheet13/gambar_dokumentasi/hasilMiddleware.gif)<br><br>

Bagian 5 – Simulasi Sistem Login<br>
![alt text](../jobsheet13/gambar_dokumentasi/8.png)<br>
Hasil :<br>
![alt](../jobsheet13/gambar_dokumentasi/hasilMiddlewareKeLogin.gif)<br><br>

##### Pengujian
Uji 1 – isLogin = false<br>
Hasil :<br>
![alt](../jobsheet13/gambar_dokumentasi/hasilMiddlewareKeLogin.gif)<br>

Uji 2 – isLogin = true<br>
![alt text](../jobsheet13/gambar_dokumentasi/9.png)<br>
![alt](../jobsheet13/gambar_dokumentasi/isLoginTrue.gif)<br>

Uji 3 – Tambahkan Multiple Route<br>
![alt text](../jobsheet13/gambar_dokumentasi/10.png)<br>
![alt](../jobsheet13/gambar_dokumentasi/uji3.gif)<br><br>

##### Implementasi Middleware Redirect ke /login jika belum login dan Izinkan akses jika login true.
Kode Middleware :<br>
![alt text](../jobsheet13/gambar_dokumentasi/11.png)<br>
mengedit file index pada login untuk handler button login dengan menyeting cookies agar bernilai true saat di klik dengan bantuan library js-cookies :<br>
![alt text](../jobsheet13/gambar_dokumentasi/12.png)<br>
mengedit index pada produk untuk handler button login agar saat button logout dikklik cookies login hilang dan berpindah ke halaman auth/login<br>
![alt text](../jobsheet13/gambar_dokumentasi/13.png)<br>
Hasil Akhir :<br>
![alt](../jobsheet13/gambar_dokumentasi/hasileditmiddleware.gif)<br><br>

Pertanyaan Analisis
1. Mengapa middleware lebih aman dibanding useEffect?
<br>-> Middleware lebih aman karena bekerja di Sisi Server sebelum halaman dikirim ke browser.
2. Mengapa middleware tidak menimbulkan glitch?
<br>-> Glitch terjadi pada useEffect karena ada jeda waktu antara proses render pertama dan eksekusi kode cek login. Karena Middleware berjalan sebelum proses rendering dimulai, Next.js sudah menentukan apakah user boleh melihat halaman tersebut atau harus pindah ke halaman lain.
3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?
<br>-> Jika semua halaman termasuk /auth/login di proteksi maka akan terjadi Infinite Redirect Loop. Middleware akan mengecek apakah user belum login, dan akan mengalihkan ke /auth/login karena belum login. Ini akan terus berulang sampai browser menampilkan error "Too many redirects".
4. Kapan middleware tidak diperlukan?
<br>-> Halaman yang memang boleh dilihat siapa saja seperti Landing Page, Blog publik, atau Dokumentasi.
5. Apa perbedaan middleware dan API route?
<br>-> Middleware : mengatur lalu lintas request.
<br>-> API routes : Menangani logika bisnis seperti CRUD, koneksi database, mengirim email.