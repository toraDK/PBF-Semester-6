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