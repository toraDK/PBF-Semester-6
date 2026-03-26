BAGIAN 1 – Custom Login Page
Edit kode [...nextauth].ts
![alt text](gambar_dokumentasi/1.png)
Hasil :
![alt](gambar_dokumentasi/gif1.gif)

BAGIAN 2 – Handle Login di Frontend
copy paste views login dari register
![alt text](gambar_dokumentasi/2.png)
edit view login
![alt text](gambar_dokumentasi/3.png)
edit style untuk views login
![alt text](gambar_dokumentasi/4.png)
edit pages/auth/login/index.tsx
![alt text](gambar_dokumentasi/5.png)
menambahkan kode di servicefirebase.ts untuk login
![alt text](gambar_dokumentasi/6.png)
Hasil :
![alt text](gambar_dokumentasi/7.png)

BAGIAN 3 – Authorize di NextAuth (Database Login)
mengedit bagian providers pada [...nextauth].ts
![alt text](gambar_dokumentasi/8.png)

BAGIAN 4 – Tambahkan Role ke Token
modifikasi jwt callback pada [...nextauth].ts
![alt text](gambar_dokumentasi/9.png)
Hasil :
![alt](gambar_dokumentasi/gif2.gif)

BAGIAN 5 – Callback URL Logic
Edit middleware agar saat user login dapat kembali ke halaman sebelumnya
![alt text](gambar_dokumentasi/9.png)

BAGIAN 6 – Membuat halaman Admin dan authoriz
Membuat halaman admin
![alt text](gambar_dokumentasi/10.png)
Modifikasi withAuth.ts untuk pengecekan role admin
![alt text](gambar_dokumentasi/11.png)
Hasil jika login role member
![alt](gambar_dokumentasi/gif3.gif)
Hasil jika login role admin
![alt](gambar_dokumentasi/gif4.gif)


Pengujian
Uji 1 – Login Valid
![alt](gambar_dokumentasi/gif5.gif)
Uji 2 – Password Salah
![alt text](gambar_dokumentasi/12.png)
Uji 3 – Akses Admin sebagai User
![alt](gambar_dokumentasi/gif3.gif)
Uji 4 – Akses Admin sebagai Admin
![alt](gambar_dokumentasi/gif4.gif)

Pertanyaan Analisis
1. Mengapa password harus diverifikasi dengan bcrypt.compare?
-> password disimpan dalam bentuk hash saat disimpan tidak dalam bentuk teks biasa. bcrypt.compare digunakan untuk mencocokkan input user dengan hash di database
2. Mengapa role disimpan di token?
-> Dengan menyimpan role di token, middleware bisa langsung membaca data tersebut dari cookie untuk menentukan apakah user boleh mengakses halaman admin atau tidak
3. Apa fungsi callbackUrl?
-> callbackUrl berfungsi sebagai pengingat alamat asal pengguna.
4. Mengapa middleware penting untuk security?
-> middleware penting sebagai gerbang utama aplikasi. Jika user tidak punya izin, middleware akan langsung memblokir akses user
5. Apa risiko jika role tidak dicek di middleware?
-> Jika halaman admin berisi fungsi hapus user atau ubah harga, user biasa bisa merusak  data aplikasi hanya dengan mengetahui alamat URL-nya.