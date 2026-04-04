### Konfigurasi Google OAuth
Langkah 1 – Masuk ke Google Cloud Console Buka:<br>
![alt text](gambar_dokumentasi/1.png)<br><br>

Langkah 2 – Buat Project Baru<br>
Klik New Project<br>
![alt text](gambar_dokumentasi/2.png)<br>
Nama project: MyAppNext<br>
![alt text](gambar_dokumentasi/3.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/4.png)<br><br>

Langkah 3 – Konfigurasi OAuth Consent Screen<br>
Pilih OAuth consent screen kemudian Pilih Get Started<br>
![alt text](gambar_dokumentasi/5.png)<br>
Mengisi form sesuai pada jobsheet<br>
![alt text](gambar_dokumentasi/6.png)<br>
![alt text](gambar_dokumentasi/7.png)<br>
![alt text](gambar_dokumentasi/8.png)<br>
![alt text](gambar_dokumentasi/9.png)<br><br>

Langkah 4 – Buat OAuth Credentials<br>
![alt text](gambar_dokumentasi/10.png)<br><br>

Langkah 5 – Tambahkan Environment Variables<br>
mengcopy client ID dan client secret dari google ke .env<br>
![alt text](gambar_dokumentasi/11.png)<br><br>

Langkah 6 – Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session<br>
![alt text](gambar_dokumentasi/12.png)<br>
![alt text](gambar_dokumentasi/13.png)<br><br>

Langkah 7 – Tambahkan Button Login Google<br>
Menambahkan tombol sigIn with google pada halaman login<br>
![alt text](gambar_dokumentasi/14.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/15.png)<br>
Menambahkan foto profil dari akun google untuk ditampilkan di navbar<br>
![alt text](gambar_dokumentasi/16.png)<br>
melakukan styling untuk imag di navbar<br>
![alt text](gambar_dokumentasi/17.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/18.png)<br><br>

Langkah 8 – Simpan Data Google ke Database<br>
menambhakan function sigInWithGoogle pada file firebase.ts<br>
![alt text](gambar_dokumentasi/19.png)<br>
menambahkan service jwt untuk login dengan google<br>
![alt text](gambar_dokumentasi/20.png)<br>
Hasil :<br>
![alt](gambar_dokumentasi/gif1.gif)<br><br>

#### Tugas Mandiri
1. Tambahkan role editor<br>
![alt text](gambar_dokumentasi/21.png)<br>
2. Buat halaman khusus editor<br>
pages editor<br>
![alt text](gambar_dokumentasi/22.png)<br>
menambahkan pengecekan autentukasi untuk halaman editor<br>
![alt text](gambar_dokumentasi/23.png)<br>
![alt text](gambar_dokumentasi/24.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/25.png)<br>
3. Menambahkan provider github untuk login<br>
Membuat Oauth baru<br>
![alt text](gambar_dokumentasi/26.png)<br>
![alt text](gambar_dokumentasi/27.png)<br>
setelah membuat Oauth  baru akan muncul id dan secret yang nanti akan dicoy ke file .env<br>
![alt text](gambar_dokumentasi/28.png)<br>
![alt text](gambar_dokumentasi/29.png)<br>
mengedit kode pada file ...nextauth.ts untuk provider github<br>
![alt text](gambar_dokumentasi/30.png)<br>
Menambahkan button login dengan github di halaman login<br>
![alt text](gambar_dokumentasi/31.png)<br>
![alt text](gambar_dokumentasi/32.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/33.png)<br>
![alt text](gambar_dokumentasi/34.png)<br>
![alt text](gambar_dokumentasi/35.png)<br>
4.Refactor service agar reusable<br>
![alt text](gambar_dokumentasi/36.png)<br>
![alt text](gambar_dokumentasi/37.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/38.png)<br>
5. Gunakan next/image untuk optimasi avatar<br>
![alt text](gambar_dokumentasi/39.png)<br>

Analisis & Diskusi
1. Apa perbedaan login credential dan login Google?
<br>-> Login Credential: User mendaftar secara manual menggunakan email dan password sendiri.nantinya yang mengelola password dan email adalah aplikasi itu sendiri
<br>-> Login Google : User tidak perlu mendaftar secara manual menggunakan email dan password user tinggal masuk menggunakan akun Google yang dipunya. Nantinya email dan password yang sudah di hash dari google tinggal di simpan di database 
2. Mengapa data Google tetap perlu disimpan ke database?
<br>-> bisa digunakan untuk mencatat siapa saja yang sudah login di aplikasi, Bisa juga digunakan untuk mengatur role user karena google tidak tahu role apa saja yang ada di aplikasi
3. Apa fungsi JWT callback?
<br>-> Memperbarui waktu kedaluwarsa token setiap kali sesi aktif
<br>-> Memperbarui waktu kedaluwarsa token setiap kali sesi aktif
4. Mengapa perlu multi-role?
<br>-> agar hanya admin yang bisa menghapus, mengedit, atau menambah data yang sifatnya sensitif.
<br>-> Melindungi data sensitif agar tidak bisa diakses oleh role user yang tidak berwenang.
5. Apa risiko jika tidak menyimpan user ke database?
<br>-> tidak ada data user
<br>-> jika tidak ada data user maka nanti tidak ada multi role. semua role user akan sama default