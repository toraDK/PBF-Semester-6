Bagian 1 – Membuat Middleware
Modifikasi file index.tsx pada folder src/pages/produk
![alt text](gambar_dokumentasi/1.png)
Buat file: src/middleware.ts
![alt text](gambar_dokumentasi/2.png)

Bagian 2 – Struktur Dasar Middleware
Kode dasar middleware
![alt text](gambar_dokumentasi/3.png)
Masih bisa mengakses halaman produk
![alt text](gambar_dokumentasi/4.png)

Bagian 3 – Redirect Sederhana
kode middleware
![alt text](gambar_dokumentasi/5.png)
Saat ke url produk hasilnya akan auto redirect ke home dan error karena terus menerus loading
![alt text](gambar_dokumentasi/6.png)

Bagian 4 – Batasi Route Tertentu
![alt text](gambar_dokumentasi/7.png)
Hasil :
![alt](gambar_dokumentasi/hasilMiddleware.gif)

Bagian 5 – Simulasi Sistem Login
![alt text](gambar_dokumentasi/8.png)
Hasil :
![alt](gambar_dokumentasi/hasilMiddlewareKeLogin.gif)

##### Pengujian
Uji 1 – isLogin = false
Hasil :
![alt](gambar_dokumentasi/hasilMiddlewareKeLogin.gif)

Uji 2 – isLogin = true
![alt text](gambar_dokumentasi/9.png)
![alt](gambar_dokumentasi/isLoginTrue.gif)

Uji 3 – Tambahkan Multiple Route
![alt text](gambar_dokumentasi/10.png)
![alt](gambar_dokumentasi/uji3.gif)