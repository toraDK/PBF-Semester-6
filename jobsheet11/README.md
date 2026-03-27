Bagian 1 – Membuat Dynamic Route<br>
Edit di kode pages/prodduk/index.tsx<br>
![alt text](gambar_dokumentasi/1.png)<br>
Kode pages/produk/[product].tsx<br>
![alt text](gambar_dokumentasi/2.png)<br><br>

Hasil :<br>
Halaman /produk<br>
![alt text](gambar_dokumentasi/3.png)<br>
Saat gambar di klik<br>
![alt text](gambar_dokumentasi/4.png)<br><br>


Bagian 2 – Implementasi CSR (Client Rendering)<br>
Modifikasi file [produk].tsx<br>
![alt text](gambar_dokumentasi/5.png)<br>
Rename nama file produk.ts menjadi [[...produk]].ts<br>
![alt text](gambar_dokumentasi/6.png)<br>
Modifikasi file servicefirebase.ts<br>
![alt text](gambar_dokumentasi/7.png)<br>
Modifikasi file [[...produk]].ts<br>
![alt text](gambar_dokumentasi/8.png)<br>
alamat url http://localhost:3000/api/produk/DJ80rtBbWGmY4msr6Q3Q<br>
![alt text](gambar_dokumentasi/9.png)<br>
alamat url http://localhost:3000/api/produk/123<br>
![alt text](gambar_dokumentasi/10.png)<br>
Modifikasi file detailProduct.module.scss<br>
![alt text](gambar_dokumentasi/11.png)<br>
Modfikasi views/DetailProduct/index.tsx<br>
![alt text](gambar_dokumentasi/12.png)<br>
Modifikasi views/pages/produk/[product].tsx<br>
![alt text](gambar_dokumentasi/13.png)<br>
Modfikasi views/DetailProduct/index.tsx<br>
![alt text](gambar_dokumentasi/14.png)<br>
modifikasi file detailProduct.module.scss agar title ditengah<br>
![alt text](gambar_dokumentasi/15.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/16.png)<br><br>

Bagian 3 – Implementasi SSR<br>
Edit kode [product].tsx<br>
![alt text](gambar_dokumentasi/17.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/18.png)<br>
![alt text](gambar_dokumentasi/19.png)<br><br>

Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)<br>
Edit kode [product].tsx<br>
![alt text](gambar_dokumentasi/20.png)<br>
Edit kode DetailProdduct/index.tsx<br>
![alt text](gambar_dokumentasi/21.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/22.png)<br>
![alt text](gambar_dokumentasi/23.png)<br><br>

Pengujian<br>
Uji 1 – CSR<br>
Kode pada [product].tsx untuk CSR<br>
![alt text](gambar_dokumentasi/24.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/HasilCSR.gif)<br><br>

Uji 2 – SSR<br>
Kode pada [product].tsx untuk SSR<br>
![alt text](gambar_dokumentasi/25.png)<br>
Hasil :<br>
![alt text](gambar_dokumentasi/HasilSSR.gif)<br><br>

Uji 3 – SSG<br>
Kode SSG pada [product].tsx<br>
![alt text](gambar_dokumentasi/26.png)<br>
Hasil Build<br>
![alt text](gambar_dokumentasi/27.png)<br>
Tampilan Web<br>
![alt text](gambar_dokumentasi/28.png)<br>
Data sebelum ditambah pada firestore<br>
![alt text](gambar_dokumentasi/29.png)<br>
Data Baru<br>
![alt text](gambar_dokumentasi/30.png)<br>
Hasil data baru tidak akan muncul<br>
![alt text](gambar_dokumentasi/HasilSSG.gif)<br>
Build Ulang<br>
![alt text](gambar_dokumentasi/31.png)<br>
Hasil Build ulang<br>
![alt text](gambar_dokumentasi/32.png)<br><br>

Tabel Perbandingan
| Aspek | CSR | SSR | SSG |
| :---: | :--- | :--- | :--- |
| Loading | Terasa lambat di awal (muncul loading spinner), tapi navigasi antar halaman sangat cepat. | Terasa sedikit lambat setiap kali pindah halaman karena server harus memproses data dulu. | Loading sangat cepat sebab halaman langsung muncul karena sudah berbentuk file HTML statis. |
| Build Required | Tidak perlu build ulang saat data berubah karena data diambil saat aplikasi berjalan | Tidak perlu build ulang saat data berubah karena data diambil setiap ada request | Wajib build ulang untuk memperbarui data statis |
| SEO | Kurang Optimal. Crawler mesin pencari terkadang sulit membaca konten yang dirender via JavaScript. | Sangat Bagus. Konten sudah utuh saat dikirim ke browser, sangat mudah diindeks Google. | Sangat Bagus. Konten statis adalah favorit mesin pencari karena kecepatan aksesnya. |
| Perubahan Data | Dinamis dan Real-time. Perubahan di database langsung terlihat saat data di-fetch ulang. | Dinamis. Data selalu paling baru karena diambil setiap kali halaman diakses. | Statis. Data hanya berubah jika dilakukan build ulang (atau lewat interval waktu tertentu di ISR). |

Pertanyaan Analisis
1. Mengapa getStaticPaths wajib pada dynamic SSG?
-> semua halaman harus diubah menjadi file HTML statis saat proses build. Karena rute dinamis seperti [product].tsx tidak memiliki nama file yang tetap, Next.js perlu mengetahui daftar ID atau parameter apa saja yang ada di database.Tanpa getStaticPaths, Next.js tidak akan tahu berapa banyak file HTML yang harus dibuat untuk folder tersebut.
2. Mengapa CSR membutuhkan loading state?
-> browser awalnya menerima file HTML yang hampir kosong. Pengambilan data baru dilakukan setelah halaman dimuat di browser menggunakan JavaScript seperti useSWR. Selama proses menunggu data dari API atau Firebase selesai, variabel data akan bernilai undefined, sehingga dibutuhkan loading state agar aplikasi tidak crash dan pengguna tahu bahwa data sedang diproses.
3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?
-> Karena pada SSG, data diambil menjadi file HTML statis pada saat menjalankan perintah npm run build. Jika ada data baru di Firebase setelah proses tersebut, file HTML yang sudah terlanjur dibuat tidak akan berubah secara otomatis. Next.js hanya akan menyajikan file yang sudah ada di server kecuali jika melakukan build ulang
4. Mana metode terbaik untuk halaman detail e-commerce?
-> SSR metode yang bagus karena jika harga atau stok produk berubah sangat cepat setiap detik misalnya maka data selalu diambil yang paling baru setiap kali halaman diakses.
5. Apa risiko menggunakan SSG untuk produk yang sering berubah?
-> nformasi seperti stok atau harga mungkin sudah berubah di database, tetapi user masih melihat data lama yang ada di file HTML statis
-> User mungkin bisa memesan produk yang sebenarnya sudah habis karena tampilan masih menunjukkan stok tersedia.