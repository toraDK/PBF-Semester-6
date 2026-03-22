Langkah 1 – Membuat Register View
edit kode pages/auth/register/index.tsx
![alt text](gambar_dokumentasi/1.png)
Membuat file baru dan isi kode pada file views/auth/register/index.tsx
![alt text](gambar_dokumentasi/2.png)
Menambahkan styling pada view register
![alt text](gambar_dokumentasi/3.png)
Hasil :
![alt text](gambar_dokumentasi/4.png)

Langkah 2 – Membuat API Register
edit file servicefirebase.ts
![alt text](gambar_dokumentasi/5.png)
membuat file register.ts
![alt text](gambar_dokumentasi/6.png)
edit view register
![alt text](gambar_dokumentasi/7.png)
Hasil :
![alt](gambar_dokumentasi/register1.gif)

Langkah 3 – Install bcrypt
menginstall bcrypt
![alt text](gambar_dokumentasi/8.png)
modifikasi file servicefirebase.ts
![alt text](gambar_dokumentasi/9.png)
###### melakukan beberapa perubahan agar sistem tidak memproses inputan user saat data yang dimasukkan sama dengan yang ada di database
view register
perubahan pada pesan error
![alt text](gambar_dokumentasi/10.png)
Menampilkan pemberitahuan kepada user saat ada error
![alt text](gambar_dokumentasi/11.png)
![alt text](gambar_dokumentasi/12.png)
styling error di file scss
![alt text](gambar_dokumentasi/13.png)
Hasil register:
![alt](gambar_dokumentasi/register2.gif)
Hasil saat melakukan registrasi dengan email yang sama :
![alt](gambar_dokumentasi/register3.gif)