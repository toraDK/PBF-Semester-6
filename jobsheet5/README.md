1. Global CSS<br>
![global css](gambar_dokumentasi/1.png)<br>
![import css](gambar_dokumentasi/2.png)<br><br>

2. CSS Module (Local Scope)<br>
![alt text](gambar_dokumentasi/3.png)<br>
![alt text](gambar_dokumentasi/4.png)<br>
![alt text](gambar_dokumentasi/5.png)<br>
![alt text](gambar_dokumentasi/6.png)<br><br>

3. Styling untuk Pages (CSS Module)<br>
![alt text](gambar_dokumentasi/7.png)<br>
![alt text](gambar_dokumentasi/8.png)<br>
Hasil<br>
![alt text](gambar_dokumentasi/9.png)<br><br>

4. Conditional Rendering Navbar(Tanpa Navbar di Login)<br>
![alt text](gambar_dokumentasi/10.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/11.png)<br><br>

5. Refactoring Struktur Project (Best Practice)<br>
![alt text](gambar_dokumentasi/12.png)<br>
Hasil tetap sama<br>
![alt text](gambar_dokumentasi/13.png)<br><br>

6. Inline Styling (CSS-in-JS)<br>
![alt text](gambar_dokumentasi/14.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/15.png)<br><br>

7. Kombinasi Global CSS + CSS Module<br>
![alt text](gambar_dokumentasi/16.png)<br>
![alt text](gambar_dokumentasi/17.png)<br>
Hasil:<br>
![alt text](gambar_dokumentasi/18.png)<br><br>

8. SCSS (SASS)<br>
![alt text](gambar_dokumentasi/19.png)<br>
![alt text](gambar_dokumentasi/20.png)<br>
![alt text](gambar_dokumentasi/21.png)<br>
Hasil:<br>
![alt text](gambar_dokumentasi/22.png)<br><br>

9. Tailwind CSS<br>
![alt text](gambar_dokumentasi/23.png)<br>
![alt text](gambar_dokumentasi/24.png)<br>
![alt text](gambar_dokumentasi/25.png)<br>
Hasil:<br>
![alt text](gambar_dokumentasi/26.png)<br><br>

Tugas1<br>
![alt text](gambar_dokumentasi/27.png)<br>
![alt text](gambar_dokumentasi/28.png)<br>
Hasil<br>
![alt text](gambar_dokumentasi/29.png)<br><br>

Tugas2<br>
Struktur Folder<br>
![alt text](gambar_dokumentasi/30.png)<br>
Kode<br>
![alt text](gambar_dokumentasi/31.png)<br>
![alt text](gambar_dokumentasi/32.png)<br>
![alt text](gambar_dokumentasi/33.png)<br>
Hasil<br>
![alt text](gambar_dokumentasi/34.png)<br><br>

Tugas3<br>
![alt text](gambar_dokumentasi/35.png)<br>
![alt text](gambar_dokumentasi/36.png)<br>
Hasil<br>
![alt text](gambar_dokumentasi/37.png)<br><br>

F. Pertanyaan Refleksi<br>
1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?
<br>-> menggunakan css module ketika Styling hanya digunakan oleh 1 komponen tertentu, Ingin menghindari bentrok nama class
<br>-> menggunakan css global ketika mereset CSS, Styling dasar seperti body dan html, Theme global (font, warna utama, dll)
2. Apa kelemahan inline styling?
<br>-> Tidak bisa menggunakan pseudo-class, Tidak bisa menggunakan media query, Kode jadi tidak rapi jika styling banyak, tidak reusable
3. Mengapa SCSS cocok untuk project skala besar?
<br>-> karena memiliki fitur variabel, function, partials & modularisasi oleh karena itu Kode jadi lebih terstruktur, Mudah dikelola, reusable, Lebih scalable
4. Apa keunggulan Tailwind dibanding CSS tradisional?
<br>-> Lebih cepat development, langsung styling di file tsx tanpa perlu keluar dari file tsx, Tidak perlu bikin banyak file CSS, Minim konflik class