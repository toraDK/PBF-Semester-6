### PRAKTIKUM 1 – Membuat Repository GitHub
![alt text](gambar_dokumentasi/1.png)<br>
Saya sudah mengupload setiap jobsheet ke repository mulai jobsheet pertama<br>

### PRAKTIKUM 2 – Deployment ke Vercel
Login ke Vercel<br>
![alt text](gambar_dokumentasi/2.png)<br>
import Project<br>
![alt text](gambar_dokumentasi/3.png)<br>
![alt text](gambar_dokumentasi/4.png)<br>
Memilih root direktori<br>
![alt text](gambar_dokumentasi/5.png)<br><br>
#### Melakukan konfigurasi untuk mencegah error
Menghapus file static.tsx<br>
![alt text](gambar_dokumentasi/6.png)<br>
Comment pada line yang berhubungan dengan static-site pada file [produk].tsx <br>
![alt text](gambar_dokumentasi/7.png)<br>
Menggunakan SSR untuk produk<br>
![alt text](gambar_dokumentasi/8.png)<br>
Menambahkan variabel baru di .env.local<br>
![alt text](gambar_dokumentasi/9.png)<br>
Mengganti semua hardcode url<br>
pada file [produk].tsx<br>
![alt text](gambar_dokumentasi/10.png)<br>
pada file server.tsx<br>
![alt text](gambar_dokumentasi/11.png)<br>
commit dan push kode paling baru<br>
![alt text](gambar_dokumentasi/12.png)<br>
melakukkan pengaturan di vercel<br>
![alt text](gambar_dokumentasi/13.png)<br>
Hasil Deploy<br>
![alt text](gambar_dokumentasi/14.png)<br>
![alt text](gambar_dokumentasi/15.png)<br>
![alt text](gambar_dokumentasi/16.png)<br>

### PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel
Mengimport file env
![alt text](gambar_dokumentasi/17.png)
Mengganti isi variabel NEXT_PUBLIC_API_URL sesuai nama url hasil deploy
![alt](gambar_dokumentasi/18.png)
Melakukan redeploy
![alt text](gambar_dokumentasi/19.png)
Hasil :
![alt text](gambar_dokumentasi/20.png)

### PRAKTIKUM 4 – Konfigurasi Google OAuth Production
Menambahkan url hasil deploy pada Authorized Origins dan Redirect URI
![alt text](gambar_dokumentasi/21.png)