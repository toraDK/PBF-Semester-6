### PRAKTIKUM 1 – Membuat Repository GitHub
![alt text](../jobsheet20/gambar_dokumentasi/1.png)<br>
Saya sudah mengupload setiap jobsheet ke repository mulai jobsheet pertama<br>

### PRAKTIKUM 2 – Deployment ke Vercel
Login ke Vercel<br>
![alt text](../jobsheet20/gambar_dokumentasi/2.png)<br>
import Project<br>
![alt text](../jobsheet20/gambar_dokumentasi/3.png)<br>
![alt text](../jobsheet20/gambar_dokumentasi/4.png)<br>
Memilih root direktori<br>
![alt text](../jobsheet20/gambar_dokumentasi/5.png)<br><br>
#### Melakukan konfigurasi untuk mencegah error
Menghapus file static.tsx<br>
![alt text](../jobsheet20/gambar_dokumentasi/6.png)<br>
Comment pada line yang berhubungan dengan static-site pada file [produk].tsx <br>
![alt text](../jobsheet20/gambar_dokumentasi/7.png)<br>
Menggunakan SSR untuk produk<br>
![alt text](../jobsheet20/gambar_dokumentasi/8.png)<br>
Menambahkan variabel baru di .env.local<br>
![alt text](../jobsheet20/gambar_dokumentasi/9.png)<br>
Mengganti semua hardcode url<br>
pada file [produk].tsx<br>
![alt text](../jobsheet20/gambar_dokumentasi/10.png)<br>
pada file server.tsx<br>
![alt text](../jobsheet20/gambar_dokumentasi/11.png)<br>
commit dan push kode paling baru<br>
![alt text](../jobsheet20/gambar_dokumentasi/12.png)<br>
melakukkan pengaturan di vercel<br>
![alt text](../jobsheet20/gambar_dokumentasi/13.png)<br>
Hasil Deploy<br>
![alt text](../jobsheet20/gambar_dokumentasi/14.png)<br>
![alt text](../jobsheet20/gambar_dokumentasi/15.png)<br>
![alt text](../jobsheet20/gambar_dokumentasi/16.png)<br>

### PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel
Mengimport file env<br>
![alt text](../jobsheet20/gambar_dokumentasi/17.png)<br>
Mengganti isi variabel NEXT_PUBLIC_API_URL sesuai nama url hasil deploy<br>
![alt](../jobsheet20/gambar_dokumentasi/18.png)<br>
Melakukan redeploy<br>
![alt text](../jobsheet20/gambar_dokumentasi/19.png)<br>
Hasil :<br>
![alt text](../jobsheet20/gambar_dokumentasi/20.png)<br>

### PRAKTIKUM 4 – Konfigurasi Google OAuth Production
Menambahkan url hasil deploy pada Authorized Origins dan Redirect URI<br>
![alt text](../jobsheet20/gambar_dokumentasi/21.png)<br>

### PRAKTIKUM 5 – Pengujian Setelah Deployment
Akses /<br>
![alt text](../jobsheet20/gambar_dokumentasi/22.png)<br>
Akses /about<br>
![alt text](../jobsheet20/gambar_dokumentasi/23.png)<br>
Akses /product<br>
![alt text](../jobsheet20/gambar_dokumentasi/24.png)<br>
Akses /profile<br>
![alt text](../jobsheet20/gambar_dokumentasi/25.png)<br>
Login Google<br>
![alt](../jobsheet20/gambar_dokumentasi/gif1.gif)<br>
Login credential biasa<br>
![alt](../jobsheet20/gambar_dokumentasi/gif2.gif)<br>

Refleksi & Diskusi<br>
1. Mengapa localhost tidak boleh digunakan di production?<br>
-> karena localhost itu berjalan di laptop sendiri bukan di server. Jika kode mengandung localhost:3000, aplikasi yang berjalan di server Vercel akan mencoba mencari data di dalam server Vercel itu sendiri, bukan di laptop sendiri atau di internet.<br>
2. Mengapa SSG bisa gagal saat build?<br>
-> SSG membuat halaman HTML statis pada saat proses build. Kegagalan build bisa terjadi karena ada kesalahan tipe data, data tidak lengkap<br>
3. Apa perbedaan SSR dan SSG saat deployment?<br>
-> SSG = Waktu render Dilakukan sekali saat build time, Kecepatannya sangat cepat karena server hanya mengirim file HTML yang sudah jadi, Bbeban server sangat rendah, Jika ada data baru maka harus build ulang<br>
-> SSR = Waktu render selalu dilakukan setiap ada request, kecepatannya lebih lambat karena server harus memproses kode dulu sebelum kirim, Beban server lebih tinggi, Jika ada data baru tidak perlu build ulang karena langsung terupdate<br>
4. Mengapa perlu redeploy setelah menambahkan environment?<br>
-> Saat kamu menambahkan variabel baru di Dashboard Vercel, variabel tersebut tersimpan di server tapi belum masuk ke dalam paket aplikasi yang sudah di-deploy<br>
-> Redeploy diperlukan agar Next.js membaca ulang variabel baru tersebut dan memasukkannya ke dalam kode program yang akan dijalankan.<br>
5. Apa fungsi redirect URI pada OAuth?<br>
-> untuk mengarahkan user kealamat yang sudah didaftarkan secara resmi setelah user berhasil login