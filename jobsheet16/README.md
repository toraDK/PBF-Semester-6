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
![alt text](image.png)