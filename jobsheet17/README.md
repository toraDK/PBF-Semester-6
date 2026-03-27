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
![alt text](image.png)<br><br>