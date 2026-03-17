#### Implementasi ISR Otomatis
Bagian 1 – Tambahkan revalidate
menambahkan revalidate agar setiap 10 detik halaman akan dicek ulang
![alt text](gambar_dokumentasi/1.png)

Bagian 2 – Pengujian ISR
build 
![alt text](gambar_dokumentasi/2.png)
Hasil Awal
![alt text](gambar_dokumentasi/3.png)
Data pada firestore sebelum ada data baru
![alt text](gambar_dokumentasi/4.png)
tambah data baru di firestore
![alt text](gambar_dokumentasi/5.png)
Hasil tampilan website setelah 10 detik
![alt text](gambar_dokumentasi/6.png)

#### On-Demand Revalidation
Bagian 1 – Buat API Revalidate
![alt text](gambar_dokumentasi/7.png)

Bagian 2 – Tambahkan Parameter Data
![alt text](gambar_dokumentasi/8.png)
Hasil url http://localhost:3000/api/revalidate?data=produk
![alt text](gambar_dokumentasi/9.png)
hadil url http://localhost:3000/api/revalidate?data=
![alt text](gambar_dokumentasi/10.png)

Bagian 3 – Tambahkan Token Security
Menambahkan token revalidate ke file .env
![alt text](gambar_dokumentasi/11.png)
edit kde revalidate
![alt text](gambar_dokumentasi/12.png)

E. Pengujian Manual Revalidation
Hasil jika memasukkan parameter token dengan benar di url
![alt text](gambar_dokumentasi/13.png)
Hasil jika memasukkan parameter token yang salah di url
![alt text](gambar_dokumentasi/14.png)
Hasil jika tanpa memasukkan parameter token di url
![alt text](gambar_dokumentasi/15.png)