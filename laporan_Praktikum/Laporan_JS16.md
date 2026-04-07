BAGIAN 1 – Custom Login Page<br>
Edit kode [...nextauth].ts<br>
![alt text](../jobsheet16/gambar_dokumentasi/1.png)<br>
Hasil :<br>
![alt](../jobsheet16/gambar_dokumentasi/gif1.gif)<br><br>
BAGIAN 2 – Handle Login di Frontend<br>
copy paste views login dari register<br>
![alt text](../jobsheet16/gambar_dokumentasi/2.png)<br>
edit view login<br>
![alt text](../jobsheet16/gambar_dokumentasi/3.png)<br>
edit style untuk views login<br>
![alt text](../jobsheet16/gambar_dokumentasi/4.png)<br>
edit pages/auth/login/index.tsx<br>
![alt text](../jobsheet16/gambar_dokumentasi/5.png)<br>
menambahkan kode di servicefirebase.ts untuk login<br>
![alt text](../jobsheet16/gambar_dokumentasi/6.png)<br>
Hasil :<br>
![alt text](../jobsheet16/gambar_dokumentasi/7.png)<br><br>
BAGIAN 3 – Authorize di NextAuth (Database Login)<br>
mengedit bagian providers pada [...nextauth].ts<br>
![alt text](../jobsheet16/gambar_dokumentasi/8.png)<br><br>
BAGIAN 4 – Tambahkan Role ke Token<br>
modifikasi jwt callback pada [...nextauth].ts<br>
![alt text](../jobsheet16/gambar_dokumentasi/9.png)<br>
Hasil :<br>
![alt](../jobsheet16/gambar_dokumentasi/gif2.gif)<br><br>
BAGIAN 5 – Callback URL Logic<br>
Edit middleware agar saat user login dapat kembali ke halaman sebelumnya<br>
![alt text](../jobsheet16/gambar_dokumentasi/9.png)<br><br>
BAGIAN 6 – Membuat halaman Admin dan authoriz<br>
Membuat halaman admin<br>
![alt text](../jobsheet16/gambar_dokumentasi/10.png)<br>
Modifikasi withAuth.ts untuk pengecekan role admin<br>
![alt text](../jobsheet16/gambar_dokumentasi/11.png)<br>
Hasil jika login role member<br>
![alt](../jobsheet16/gambar_dokumentasi/gif3.gif)<br>
Hasil jika login role admin<br>
![alt](../jobsheet16/gambar_dokumentasi/gif4.gif)<br><br>
Pengujian<br>
Uji 1 – Login Valid<br>
![alt](../jobsheet16/gambar_dokumentasi/gif5.gif)<br>
Uji 2 – Password Salah<br>
![alt text](../jobsheet16/gambar_dokumentasi/12.png)<br>
Uji 3 – Akses Admin sebagai User<br>
![alt](../jobsheet16/gambar_dokumentasi/gif3.gif)<br>
Uji 4 – Akses Admin sebagai Admin<br>
![alt](../jobsheet16/gambar_dokumentasi/gif4.gif)

Pertanyaan Analisis
1. Mengapa password harus diverifikasi dengan bcrypt.compare?
<br>-> password disimpan dalam bentuk hash saat disimpan tidak dalam bentuk teks biasa. bcrypt.compare digunakan untuk mencocokkan input user dengan hash di database
2. Mengapa role disimpan di token?
<br>-> Dengan menyimpan role di token, middleware bisa langsung membaca data tersebut dari cookie untuk menentukan apakah user boleh mengakses halaman admin atau tidak
3. Apa fungsi callbackUrl?
<br>-> callbackUrl berfungsi sebagai pengingat alamat asal pengguna.
4. Mengapa middleware penting untuk security?
<br>-> middleware penting sebagai gerbang utama aplikasi. Jika user tidak punya izin, middleware akan langsung memblokir akses user
5. Apa risiko jika role tidak dicek di middleware?
<br>-> Jika halaman admin berisi fungsi hapus user atau ubah harga, user biasa bisa merusak  data aplikasi hanya dengan mengetahui alamat URL-nya.