1. Bagian 1 – Setup Halaman Static<br>
![alt text](gambar_dokumentasi/1.png)<br>
![alt text](gambar_dokumentasi/2.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/3.png)<br><br>

2. Bagian 3 – Build Production Mode<br>
![alt text](gambar_dokumentasi/4.png)<br>
![alt text](gambar_dokumentasi/5.png)<br>
![alt text](gambar_dokumentasi/6.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/7.png)<br><br>

3. Bagian 4 – Pengujian Perubahan Data<br>
Uji 1 – Tambah Data di Database<br>
Tamabah data di firebase<br>
![alt text](gambar_dokumentasi/8.png)<br>
Hasil /products (CSR)<br>
![alt text](gambar_dokumentasi/9.png)<br>
Hasil /products/server (SSR)<br>
![alt text](gambar_dokumentasi/10.png)<br>
Hasil /products/static (SSG)<br>
![alt text](gambar_dokumentasi/11.png)<br><br>

Uji 2 – Build Ulang<br>
build ulang<br>
![alt text](gambar_dokumentasi/12.png)<br>
Hasil /products/static (SSG) Setelah di build<br>
![alt text](gambar_dokumentasi/13.png)<br><br>


Studi Analisis
1. Mengapa SSG tidak menampilkan data terbaru?
-> SSG tidak menampilkan data terbaru karena halaman dibuat saat proses build, sehingga data yang ditampilkan adalah data yang diambil pada saat build tersebut. Jika data pada server berubah setelah build selesai, halaman tidak akan otomatis memperbarui datanya sampai dilakukan build ulang
2. Mengapa SSG lebih cepat?
-> SSG lebih cepat karena halaman sudah di-generate menjadi file HTML statis saat build, sehingga server tidak perlu memproses data atau menjalankan kode setiap kali ada request dari pengguna.
3. Kapan SSG tidak cocok digunakan?
-> SSG tidak cocok digunakan ketika aplikasi membutuhkan data yang sering berubah atau harus selalu terbaru, seperti dashboard real-time, aplikasi monitoring, atau sistem yang datanya terus diperbarui oleh pengguna.
4. Mengapa e-commerce tidak cocok menggunakan SSG murni?
-> E-commerce tidak cocok menggunakan SSG murni karena data seperti stok produk, harga, atau promo dapat berubah dengan cepat. Jika menggunakan SSG saja, perubahan data tidak langsung terlihat oleh pengguna karena halaman hanya diperbarui saat proses build ulang.
5. Apa perbedaan build mode dan development mode?
-> Development mode adalah mode yang digunakan saat proses pengembangan aplikasi perubahan kode dapat langsung terlihat tanpa perlu melakukan build ulang. Sedangkan build mode adalah proses untuk menghasilkan versi production