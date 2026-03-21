Bagian 1 – Install NextAuth
![alt text](gambar_dokumentasi/1.png)

Bagian 2 – Konfigurasi API Auth\
membuat file [...nextauth].tsx
![alt text](gambar_dokumentasi/2.png)
Modifikasi file [...nextauth].tsx
![alt text](gambar_dokumentasi/3.png)

Bagian 3 – Tambahkan Secret
Generate nilai random base64 
![alt text](gambar_dokumentasi/4.png)
copy hasil generate nilai random base64 ke file .env
![alt text](gambar_dokumentasi/5.png)

Bagian 4 – Tambahkan SessionProvider
memodifikasi file _app.tsx
![alt text](gambar_dokumentasi/6.png)

Bagian 5 – Tambahkan Tombol Login & Logout
Edit file index.tsx pada folder component/navbar
![alt text](gambar_dokumentasi/7.png)
edit file navbar.module.css
![alt text](gambar_dokumentasi/8.png)
Hasil :
![alt](gambar_dokumentasi/Hasilnext-authCredentials.gif)
edit file index.tsx untuk mendapatkan session nya
![alt text](gambar_dokumentasi/9.png)
Hasil :
![alt](gambar_dokumentasi/Hasilnext-authCredentials2.gif)

Langkah 6 – Menambahkan Data Tambahan (Full Name)
Edit kode pada file [...nextauth].ts
![alt text](gambar_dokumentasi/10.png)
![alt text](gambar_dokumentasi/11.png)
Modifikasi style navbar
![alt text](gambar_dokumentasi/12.png)
Modifikasi component navbar
![alt text](gambar_dokumentasi/13.png)
Hasil :
![alt](gambar_dokumentasi/Hasilnext-authCredentials3.gif)

##### Proteksi Halaman Profile
Langkah 7 – Buat Halaman Profile
file profile/index.tsx
![alt text](gambar_dokumentasi/14.png)
Hasil :
![alt text](gambar_dokumentasi/15.png)

Langkah 8 – Buat Middleware Authorization
Isi file baru withAuth.ts
![alt text](gambar_dokumentasi/16.png)
Perubahan kode pada middleware.ts
![alt text](gambar_dokumentasi/17.png)

Pengujian 
Uji 1 – Belum Login
![alt](gambar_dokumentasi/belumLogin.gif)

Uji 2 – Sudah Login
![alt](gambar_dokumentasi/Login.gif)

Uji 3 – Logout
![alt](gambar_dokumentasi/logout.gif)