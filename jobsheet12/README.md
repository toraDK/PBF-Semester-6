#### Implementasi ISR Otomatis
Bagian 1 – Tambahkan revalidate<br>
menambahkan revalidate agar setiap 10 detik halaman akan dicek ulang<br>
![alt text](gambar_dokumentasi/1.png)<br><br>

Bagian 2 – Pengujian ISR<br>
build <br>
![alt text](gambar_dokumentasi/2.png)<br>
Hasil Awal<br>
![alt text](gambar_dokumentasi/3.png)<br>
Data pada firestore sebelum ada data baru<br>
![alt text](gambar_dokumentasi/4.png)<br>
tambah data baru di firestore<br>
![alt text](gambar_dokumentasi/5.png)<br>
Hasil tampilan website setelah 10 detik<br>
![alt text](gambar_dokumentasi/6.png)<br><br>

#### On-Demand Revalidation
Bagian 1 – Buat API Revalidate<br>
![alt text](gambar_dokumentasi/7.png)<br><br>

Bagian 2 – Tambahkan Parameter Data<br>
![alt text](gambar_dokumentasi/8.png)<br>
Hasil url http://localhost:3000/api/revalidate?data=produk<br>
![alt text](gambar_dokumentasi/9.png)<br>
hadil url http://localhost:3000/api/revalidate?data=<br>
![alt text](gambar_dokumentasi/10.png)<br><br>

Bagian 3 – Tambahkan Token Security<br>
Menambahkan token revalidate ke file .env<br>
![alt text](gambar_dokumentasi/11.png)<br>
edit kde revalidate<br>
![alt text](gambar_dokumentasi/12.png)<br><br>

E. Pengujian Manual Revalidation<br>
Hasil jika memasukkan parameter token dengan benar di url<br>
![alt text](gambar_dokumentasi/13.png)<br>
Hasil jika memasukkan parameter token yang salah di url<br>
![alt text](gambar_dokumentasi/14.png)<br>
Hasil jika tanpa memasukkan parameter token di url<br>
![alt text](gambar_dokumentasi/15.png)<br><br>

H. Pertanyaan Analisis
1. Mengapa ISR lebih fleksibel dibanding SSG?
<br>-> SSG bersifat kaku karena halaman hanya dibuat sekali saat proses build. Jika ada perubahan data, maka harus melakukan build ulang seluruh aplikasi.
<br>-> ISR lebih fleksibel karena memungkinkan memperbarui halaman statis secara individu di latar belakang tanpa build ulang penuh.
2. Apa perbedaan revalidate waktu dan on-demand?
<br>-> Revalidate   : Halaman akan diperbarui otomatis secara berkala setiap waktu yang ditentukan jika ada pengunjung.
<br>-> On-Demand    : Menggunakan API Route manual seperti res.revalidate(). Halaman hanya akan diperbarui saat memicu endpoint tersebut, misalnya tepat setelah mengklik tombol simpan di Firebase.
3. Mengapa endpoint revalidation harus diamankan?
<br>-> Jika endpoint ini terbuka untuk publik, orang jahat bisa melakukan serangan DoS dengan memanggil URL tersebut ribuan kali secara terus-menerus, yang bisa membuat server crash karena kelelahan memproses render ulang.
4. Apa risiko jika token tidak digunakan?
<br>-> siapa pun dapat mengetahui URL API sehingga dapat memicu pembaruan data.Sehingga bisa jadi ada orang yang iseng memanggil URL tersebut ribuan kali secara terus-menerus dan dapat membuat server crash karena kelelahan memproses render ulang.
5. Kapan ISR lebih cocok dibanding SSR?
<br>-> ISR: Cocok jika memprioritaskan kecepatan akses seperti loading dan SEO, namun toleran terhadap sedikit keterlambatan perubahan data.
<br>-> SSR: Lebih cocok jika halaman tersebut sangat personal seperti keranjang belanja atau datanya berubah setiap detik dan harus 100% akurat saat itu juga seperti harga saham atau tiket konser.