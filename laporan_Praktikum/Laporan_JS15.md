Langkah 1 – Membuat Register View<br>
edit kode pages/auth/register/index.tsx<br>
![alt text](../jobsheet15/gambar_dokumentasi/1.png)<br>
Membuat file baru dan isi kode pada file views/auth/register/index.tsx<br>
![alt text](../jobsheet15/gambar_dokumentasi/2.png)<br>
Menambahkan styling pada view register<br>
![alt text](../jobsheet15/gambar_dokumentasi/3.png)<br>
Hasil :<br>
![alt text](../jobsheet15/gambar_dokumentasi/4.png)<br><br>
Langkah 2 – Membuat API Register<br>
edit file servicefirebase.ts<br>
![alt text](../jobsheet15/gambar_dokumentasi/5.png)<br>
membuat file register.ts<br>
![alt text](../jobsheet15/gambar_dokumentasi/6.png)<br>
edit view register<br>
![alt text](../jobsheet15/gambar_dokumentasi/7.png)<br>
Hasil :<br>
![alt](../jobsheet15/gambar_dokumentasi/register1.gif)<br><br>
Langkah 3 – Install bcrypt<br>
menginstall bcrypt<br>
![alt text](../jobsheet15/gambar_dokumentasi/8.png)
modifikasi file servicefirebase.ts<br>
![alt text](../jobsheet15/gambar_dokumentasi/9.png)<br><br>

#### melakukan beberapa perubahan agar sistem tidak memproses inputan user saat data yang dimasukkan sama dengan yang ada di database
view register<br>

perubahan pada pesan error
![alt](../jobsheet15/gambar_dokumentasi/10.png)<br>

Menampilkan pemberitahuan kepada user saat ada error<br>
![alt text](../jobsheet15/gambar_dokumentasi/11.png)<br>
![alt text](../jobsheet15/gambar_dokumentasi/12.png)<br>
styling error di file scss<br>
![alt text](../jobsheet15/gambar_dokumentasi/13.png)<br>
Hasil register:<br>
![alt](../jobsheet15/gambar_dokumentasi/register2.gif)
Hasil saat melakukan registrasi dengan email yang sama :<br>
![alt](../jobsheet15/gambar_dokumentasi/register3.gif)<br><br>
Pengujian
Uji 1 – Register Baru<br>
![alt](../jobsheet15/gambar_dokumentasi/register2.gif)<br>
Uji 2 – Email Sudah Ada<br>
![alt](../jobsheet15/gambar_dokumentasi/register3.gif)<br>
Uji 3 – Method GET<br>
![alt text](../jobsheet15/gambar_dokumentasi/14.png)<br><br>

Tugas
<br>

1. menambahkan validasi untuk email dan password minimal 6 karakter<br>
Mengedit file servicefirebase.ts untuk menambahkan validasi email dan password<br>
![alt text](../jobsheet15/gambar_dokumentasi/15.png)<br>

2. menampilkan pessan error di ui<br>
edit file api/register.ts untuk bisa mengirimkan hasil erro dari servicefirebase ke view register<br>
![alt text](../jobsheet15/gambar_dokumentasi/16.png)<br>
mengambil data dari response dan menampilkan messagenya<br>
![alt text](../jobsheet15/gambar_dokumentasi/17.png)<br>

3. menambahkan role default "member"<br>
![alt text](../jobsheet15/gambar_dokumentasi/18.png)<br>

Hasil error :<br>
![alt](../jobsheet15/gambar_dokumentasi/register4.gif)<br>

Hasil berhasil :<br>
![alt](../jobsheet15/gambar_dokumentasi/register5.gif)<br>

H. Pertanyaan Analisis
1. Mengapa password harus di-hash?
<br>-> agar saat password disimpan di database aman.dengan hasing orang lain tidak bisa melihat apa passwordnya yang mengetahui password hanya orang yang membuat passwordnya
2. Apa perbedaan addDoc dan setDoc?
<br>-> addDoc pada firestore akan membuatkan ID dokumen secara otomatis yang bersifat acak dan unik.
<br>-> setDoc adalah kebalikan dari addDoc kegunaannya untuk menambahkan ID dokumen secara manual.
3. Mengapa perlu validasi method POST?
<br>-> Method POST dirancang untuk mengirim data sensitif dalam request body, bukan di URL, sehingga lebih aman dan terstruktur untuk operasi yang mengubah isi database.
4. Apa risiko jika email tidak dicek unik?
<br>-> Satu email bisa terdaftar berkali-kali dengan password yang berbeda-beda.
5. Apa fungsi role pada user?
<br>-> untuk membatasi akses apa yang bisa dan tidak bisa dilakukan oleh user