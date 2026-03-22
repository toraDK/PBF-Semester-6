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

Pengujian
Uji 1 – Register Baru
![alt](gambar_dokumentasi/register2.gif)

Uji 2 – Email Sudah Ada
![alt](gambar_dokumentasi/register3.gif)

Uji 3 – Method GET
![alt text](gambar_dokumentasi/14.png)

Tugas
1. menambahkan validasi untuk email dan password minimal 6 karakter
Mengedit file servicefirebase.ts untuk menambahkan validasi email dan password
![alt text](gambar_dokumentasi/15.png)

2. menampilkan pessan error di ui
edit file api/register.ts untuk bisa mengirimkan hasil erro dari servicefirebase ke view register
![alt text](gambar_dokumentasi/16.png)
mengambil data dari response dan menampilkan messagenya
![alt text](gambar_dokumentasi/17.png)

3. menambahkan role default "member"
![alt text](gambar_dokumentasi/18.png)

Hasil error :
![alt](gambar_dokumentasi/register4.gif)

Hasil berhasil :
![alt](gambar_dokumentasi/register5.gif)

H. Pertanyaan Analisis
1. Mengapa password harus di-hash?
-> agar saat password disimpan di database aman.dengan hasing orang lain tidak bisa melihat apa passwordnya yang mengetahui password hanya orang yang membuat passwordnya
2. Apa perbedaan addDoc dan setDoc?
-> addDoc pada firestore akan membuatkan ID dokumen secara otomatis yang bersifat acak dan unik.
-> setDoc adalah kebalikan dari addDoc kegunaannya untuk menambahkan ID dokumen secara manual.
3. Mengapa perlu validasi method POST?
-> Method POST dirancang untuk mengirim data sensitif dalam request body, bukan di URL, sehingga lebih aman dan terstruktur untuk operasi yang mengubah isi database.
4. Apa risiko jika email tidak dicek unik?
-> Satu email bisa terdaftar berkali-kali dengan password yang berbeda-beda.
5. Apa fungsi role pada user?
-> untuk membatasi akses apa yang bisa dan tidak bisa dilakukan oleh user