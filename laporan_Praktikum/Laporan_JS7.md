1. Langkah 1 – Menjalankan Project<br>
![alt text](../jobsheet7/gambar_dokumentasi/1.png)<br><br>

2. Langkah 2 – Membuat API Produk<br>
![alt text](../jobsheet7/gambar_dokumentasi/2.png)<br>
Hasil :<br>
![alt text](../jobsheet7/gambar_dokumentasi/3.png)<br><br>

3. Langkah 3 – Fetch Data API di Frontend<br>
![alt text](../jobsheet7/gambar_dokumentasi/4.png)<br>
Hasil :<br>
![alt text](../jobsheet7/gambar_dokumentasi/5.png)<br><br>

4. Langkah 5 – Setup Firebase<br>
![alt text](../jobsheet7/gambar_dokumentasi/6.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/7.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/8.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/9.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/10.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/11.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/12.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/13.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/14.png)<br><br>

5. Langkah 6 – Install Firebase<br>
![alt text](../jobsheet7/gambar_dokumentasi/15.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/16.png)<br><br>

6. Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush
di repository<br>
![alt text](../jobsheet7/gambar_dokumentasi/17.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/18.png)<br><br>

7. Langkah 8 – Konfigurasi Firebase<br>
![alt text](../jobsheet7/gambar_dokumentasi/19.png)<br><br>

8. Langkah 9 – Ambil Data dari Firestore<br>
![alt text](../jobsheet7/gambar_dokumentasi/20.png)<br><br>

9. Langkah 10 – API Mengambil Data Firebase<br>
![alt text](../jobsheet7/gambar_dokumentasi/22.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/21.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/23.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/24.png)<br><br>

Tugas1<br>
![alt text](../jobsheet7/gambar_dokumentasi/25.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/26.png)<br>
Hasil :<br>
![alt text](../jobsheet7/gambar_dokumentasi/27.png)<br><br>

Tugas2<br>
![alt text](../jobsheet7/gambar_dokumentasi/28.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/29.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/30.png)<br>
Hasil :<br>
![alt text](../jobsheet7/gambar_dokumentasi/31.png)<br>
![alt text](../jobsheet7/gambar_dokumentasi/32.png)<br><br>

Tugas3<br>
![alt text](../jobsheet7/gambar_dokumentasi/33.png)<br>
Hasil :<br>
![alt text](../jobsheet7/gambar_dokumentasi/34.png)<br><br>

Pertanyaan Evaluasi
1. Apa fungsi API Routes pada Next.js?
<br>-> Menghubungkan aplikasi ke database, Menyimpan logic server, Menangani request GET, POST, PUT, DELETE
2. Mengapa .env.local tidak boleh di-push ke repository?
<br>-> karena beris key key yang bersifat privasi.Jika terupload maka orang lain bisa mengakses database firebase menggunakan key tersebut
3. Apa perbedaan data statis dan data dinamis?
<br>-> Data statis : Tidak berubah, Sudah tersedia saat build, langsung ditulis dikode
<br>-> Data Dinamis : Bisa berubah, Diambil dari API atau database
4. Mengapa Next.js disebut framework fullstack?
<br>-> karena bisa mengatasi pada frontend : React component, Routing, Styling dan pada backend nya API Routes, Server-side rendering (SSR), Middleware, Integrasi database