Bagian 1 – Setup Halaman SSR<br>
![alt text](gambar_dokumentasi/1.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/2.png)<br><br>

Bagian 2 – Implementasi getServerSideProps pada server.tsx<br>
![alt text](gambar_dokumentasi/3.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/4.png)<br><br>

Bagian 3 – Refactor Type ( produk type )<br>
![alt text](gambar_dokumentasi/5.png)<br>
![alt text](gambar_dokumentasi/6.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/7.png)<br><br>

Bagian 4 – Uji Perbedaan SSR vs CSR<br>
Uji 1 – Skeleton<br>
-> Hasil CSR<br>
![alt text](gambar_dokumentasi/8.png)<br>
muncul sekeleton terlebih dahulu sebelum muncul data<br>

-> Hasil SSR<br>
![alt text](gambar_dokumentasi/9.png)<br>
tidak muncul sekeleton sebelum muncul data<br>

Uji 2 – Network Tab<br>
-> Hasil CSR<br>
![alt text](gambar_dokumentasi/10.png)<br>

-> Hasil SSR<br>
![alt text](gambar_dokumentasi/11.png)<br>

Uji 3 – Response HTML<br>
-> Hasil CSR<br>
![alt text](gambar_dokumentasi/8.png)<br>
muncul sekeleton terlebih dahulu sebelum muncul data<br>

-> Hasil SSR<br>
![alt text](gambar_dokumentasi/9.png)<br>
tidak muncul sekeleton sebelum muncul data<br><br>

Tugas :<br>
1. Buat 2 halaman:<br>
    - /products (CSR)<br>
    ![alt text](gambar_dokumentasi/13.png)<br>
    - /products/server (SSR)<br>
    ![alt text](gambar_dokumentasi/12.png)<br>

2. Dokumentasikan:<br>
    - Screenshot CSR<br>
    ![alt text](gambar_dokumentasi/14.png)<br>
    Hasil :<br>
    ![alt text](gambar_dokumentasi/13.png)<br>
    - Screenshot SSR<br>
    ![alt text](gambar_dokumentasi/15.png)<br>
    Hasil :<br>
    ![alt text](gambar_dokumentasi/12.png)<br>
    - Perbedaan Network tab<br>
    -> Hasil CSR<br>
    ![alt text](gambar_dokumentasi/10.png)<br>
    -> Hasil SSR<br>
    ![alt text](gambar_dokumentasi/11.png)<br>
    - Perbedaan View Source<br>
    -> Hasil CSR<br>
    ![alt text](gambar_dokumentasi/16.png)<br>
    -> Hasil SSR<br>
    ![alt text](gambar_dokumentasi/17.png)<br>

E. Studi Analisis
1. Mengapa SSR lebih baik untuk SEO?
    -> SSR lebih baik untuk SEO karena halaman sudah dirender di server sebelum dikirim ke browser
2. Kapan sebaiknya menggunakan SSR?
    -> SSR sebaiknya digunakan ketika halaman membutuhkan data yang selalu berubah dan harus ditampilkan langsung saat halaman dibuka
3. Apa kekurangan SSR dibanding CSR?
    -> Kekurangan SSR dibandingkan CSR adalah proses rendering terjadi di server untuk setiap request pengguna. Hal ini dapat meningkatkan beban server dan membuat waktu respon menjadi lebih lambat jika trafik pengguna sangat tinggi.
4. Mengapa skeleton tidak muncul pada SSR?
    -> Skeleton loading tidak muncul pada SSR karena data sudah diambil di server sebelum halaman dirender.