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

