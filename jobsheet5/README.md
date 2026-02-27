1. Global CSS
![global css](gambar_dokumentasi/1.png)
![import css](gambar_dokumentasi/2.png)

2. CSS Module (Local Scope)
![alt text](gambar_dokumentasi/3.png)
![alt text](gambar_dokumentasi/4.png)
![alt text](gambar_dokumentasi/5.png)
![alt text](gambar_dokumentasi/6.png)

3. Styling untuk Pages (CSS Module)
![alt text](gambar_dokumentasi/7.png)
![alt text](gambar_dokumentasi/8.png)
Hasil
![alt text](gambar_dokumentasi/9.png)

4. Conditional Rendering Navbar(Tanpa Navbar di Login)
![alt text](gambar_dokumentasi/10.png)
Hasil :
![alt text](gambar_dokumentasi/11.png)

5. Refactoring Struktur Project (Best Practice)
![alt text](gambar_dokumentasi/12.png)
Hasil tetap sama
![alt text](gambar_dokumentasi/13.png)

6. Inline Styling (CSS-in-JS)
![alt text](gambar_dokumentasi/14.png)
Hasil :
![alt text](gambar_dokumentasi/15.png)

7. Kombinasi Global CSS + CSS Module
![alt text](gambar_dokumentasi/16.png)
![alt text](gambar_dokumentasi/17.png)
Hasil:
![alt text](gambar_dokumentasi/18.png)

8. SCSS (SASS)
![alt text](gambar_dokumentasi/19.png)
![alt text](gambar_dokumentasi/20.png)
![alt text](gambar_dokumentasi/21.png)
Hasil:
![alt text](gambar_dokumentasi/22.png)

9. Tailwind CSS
![alt text](gambar_dokumentasi/23.png)
![alt text](gambar_dokumentasi/24.png)
![alt text](gambar_dokumentasi/25.png)
Hasil:
![alt text](gambar_dokumentasi/26.png)

Tugas1
![alt text](gambar_dokumentasi/27.png)
![alt text](gambar_dokumentasi/28.png)
Hasil
![alt text](gambar_dokumentasi/29.png)

Tugas2
Struktur Folder
![alt text](gambar_dokumentasi/30.png)
Kode
![alt text](gambar_dokumentasi/31.png)
![alt text](gambar_dokumentasi/32.png)
![alt text](gambar_dokumentasi/33.png)
Hasil
![alt text](gambar_dokumentasi/34.png)

Tugas3
![alt text](gambar_dokumentasi/35.png)
![alt text](gambar_dokumentasi/36.png)
Hasil
![alt text](gambar_dokumentasi/37.png)

F. Pertanyaan Refleksi
1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?
-> menggunakan css module ketika Styling hanya digunakan oleh 1 komponen tertentu, Ingin menghindari bentrok nama class
-> menggunakan css global ketika mereset CSS, Styling dasar seperti body dan html, Theme global (font, warna utama, dll)
2. Apa kelemahan inline styling?
-> Tidak bisa menggunakan pseudo-class, Tidak bisa menggunakan media query, Kode jadi tidak rapi jika styling banyak, tidak reusable
3. Mengapa SCSS cocok untuk project skala besar?
-> karena memiliki fitur variabel, function, partials & modularisasi oleh karena itu Kode jadi lebih terstruktur, Mudah dikelola, reusable, Lebih scalable
4. Apa keunggulan Tailwind dibanding CSS tradisional?
-> Lebih cepat development, langsung styling di file tsx tanpa perlu keluar dari file tsx, Tidak perlu bikin banyak file CSS, Minim konflik class