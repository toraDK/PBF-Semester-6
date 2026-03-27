Bagian 1 – Install NextAuth<br>
![alt text](gambar_dokumentasi/1.png)<br><br>

Bagian 2 – Konfigurasi API Auth\<br>
membuat file [...nextauth].tsx<br>
![alt text](gambar_dokumentasi/2.png)<br>
Modifikasi file [...nextauth].tsx<br>
![alt text](gambar_dokumentasi/3.png)<br><br>

Bagian 3 – Tambahkan Secret<br>
Generate nilai random base64<br>
![alt text](gambar_dokumentasi/4.png)<br>
copy hasil generate nilai random base64 ke file .env<br>
![alt text](gambar_dokumentasi/5.png)<br><br>

Bagian 4 – Tambahkan SessionProvider<br>
memodifikasi file _app.tsx<br>
![alt text](gambar_dokumentasi/6.png)<br><br>

Bagian 5 – Tambahkan Tombol Login & Logout<br>
Edit file index.tsx pada folder component/navbar<br>
![alt text](gambar_dokumentasi/7.png)<br>
edit file navbar.module.css<br>
![alt text](gambar_dokumentasi/8.png)<br>
Hasil :<br>
![alt](gambar_dokumentasi/Hasilnext-authCredentials.gif)<br>
edit file index.tsx untuk mendapatkan session nya<br>
![alt text](gambar_dokumentasi/9.png)<br>
Hasil :<br>
![alt](gambar_dokumentasi/Hasilnext-authCredentials2.gif)<br><br>

Langkah 6 – Menambahkan Data Tambahan (Full Name)<br>
Edit kode pada file [...nextauth].ts<br>
![alt text](gambar_dokumentasi/10.png)<br>
![alt text](gambar_dokumentasi/11.png)<br>
Modifikasi style navbar<br>
![alt text](gambar_dokumentasi/12.png)<br>
Modifikasi component navbar<br>
![alt text](gambar_dokumentasi/13.png)<br>
Hasil :<br>
![alt](gambar_dokumentasi/Hasilnext-authCredentials3.gif)<br><br>

##### Proteksi Halaman Profile
Langkah 7 – Buat Halaman Profile<br>
file profile/index.tsx<br>
![alt text](gambar_dokumentasi/14.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/15.png)<br><br>

Langkah 8 – Buat Middleware Authorization<br>
Isi file baru withAuth.ts<br>
![alt text](gambar_dokumentasi/16.png)<br>
Perubahan kode pada middleware.ts<br>
![alt text](gambar_dokumentasi/17.png)<br><br>

Pengujian <br>
Uji 1 – Belum Login<br>
![alt](gambar_dokumentasi/belumLogin.gif)<br>

Uji 2 – Sudah Login<br>
![alt](gambar_dokumentasi/Login.gif)<br>

Uji 3 – Logout<br>
![alt](gambar_dokumentasi/logout.gif)<br><br>

i. Pertanyaan Analisis
1. Mengapa session menggunakan JWT?
<br>->agar data session tidak disimpan di server. Jadi Semua data user yang diperlukan (seperti email atau nama) sudah "terbungkus" di dalam token yang disimpan di browser
2. Apa perbedaan authorize() dan callback jwt()?
<br>-> authorize(): Terjadi di pintu masuk. Fungsi ini hanya dipanggil saat user menekan tombol "Sign In". Tugasnya adalah memeriksa apakah email dan password yang dimasukkan benar.
<br>-> callback jwt(): Terjadi setelah login berhasil dan setiap kali token diperbarui. Tugasnya adalah menentukan data apa saja dari hasil authorize() yang ingin "dimasukkan" ke dalam token permanen.
3. Mengapa middleware perlu getToken()?
<br>-> Middleware menggunakan getToken() untuk membaca dan memvalidasi cookie JWT yang dikirimkan oleh browser.
<br>-> Tanpa getToken(), middleware tidak akan tahu siapa yang sedang mengakses halaman tersebut. Jika getToken() menghasilkan null, middleware langsung tahu bahwa user belum login dan akan melakukan redirect ke halaman login atau home.
4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?
<br>-> orang lain bisa membuat JWT palsu sendiri
<br>-> Tanpa secret yang kuat, data di dalam JWT bisa dimanipulasi.
5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?
<br>-> Autentikasi adalah proses untuk mengetahui siapa user yang sedang login. 
<br>-> Otorisasi adalah proses untuk menenetukan peran pada user.Peran ini berguna untuk menentukan apa saja yang boleh dilakukan user di sistem sesudah login