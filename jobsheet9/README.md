Bagian 1 – Setup Halaman SSR
![alt text](gambar_dokumentasi/1.png)
Hasil :
![alt text](gambar_dokumentasi/2.png)

Bagian 2 – Implementasi getServerSideProps pada server.tsx
![alt text](gambar_dokumentasi/3.png)
Hasil :
![alt text](gambar_dokumentasi/4.png)

Bagian 3 – Refactor Type ( produk type )
![alt text](gambar_dokumentasi/5.png)
![alt text](gambar_dokumentasi/6.png)
Hasil :
![alt text](gambar_dokumentasi/7.png)

Bagian 4 – Uji Perbedaan SSR vs CSR
Uji 1 – Skeleton
-> Hasil CSR
![alt text](gambar_dokumentasi/8.png)
muncul sekeleton terlebih dahulu sebelum muncul data

-> Hasil SSR
![alt text](gambar_dokumentasi/9.png)
tidak muncul sekeleton sebelum muncul data

Uji 2 – Network Tab
-> Hasil CSR
![alt text](gambar_dokumentasi/10.png)

-> Hasil SSR
![alt text](gambar_dokumentasi/11.png)

Uji 3 – Response HTML
-> Hasil CSR
![alt text](gambar_dokumentasi/8.png)
muncul sekeleton terlebih dahulu sebelum muncul data

-> Hasil SSR
![alt text](gambar_dokumentasi/9.png)
tidak muncul sekeleton sebelum muncul data

Tugas :
1. Buat 2 halaman:
    - /products (CSR)
    ![alt text](gambar_dokumentasi/13.png)
    - /products/server (SSR)
    ![alt text](gambar_dokumentasi/12.png)

2. Dokumentasikan:
    - Screenshot CSR
    ![alt text](gambar_dokumentasi/14.png)
    Hasil :
    ![alt text](gambar_dokumentasi/13.png)
    - Screenshot SSR
    ![alt text](gambar_dokumentasi/15.png)
    Hasil :
    ![alt text](gambar_dokumentasi/12.png)
    - Perbedaan Network tab
    -> Hasil CSR
    ![alt text](gambar_dokumentasi/10.png)
    -> Hasil SSR
    ![alt text](gambar_dokumentasi/11.png)
    - Perbedaan View Source
    -> Hasil CSR
    ![alt text](gambar_dokumentasi/16.png)
    -> Hasil SSR
    ![alt text](gambar_dokumentasi/17.png)

E. Studi Analisis
1. Mengapa SSR lebih baik untuk SEO?
    -> SSR lebih baik untuk SEO karena halaman sudah dirender di server sebelum dikirim ke browser
2. Kapan sebaiknya menggunakan SSR?
    -> SSR sebaiknya digunakan ketika halaman membutuhkan data yang selalu berubah dan harus ditampilkan langsung saat halaman dibuka
3. Apa kekurangan SSR dibanding CSR?
    -> Kekurangan SSR dibandingkan CSR adalah proses rendering terjadi di server untuk setiap request pengguna. Hal ini dapat meningkatkan beban server dan membuat waktu respon menjadi lebih lambat jika trafik pengguna sangat tinggi.
4. Mengapa skeleton tidak muncul pada SSR?
    -> Skeleton loading tidak muncul pada SSR karena data sudah diambil di server sebelum halaman dirender.