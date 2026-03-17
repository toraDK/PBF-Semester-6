Bagian 1 – Membuat Dynamic Route
Edit di kode pages/prodduk/index.tsx
![alt text](gambar_dokumentasi/1.png)
Kode pages/produk/[product].tsx
![alt text](gambar_dokumentasi/2.png)

Hasil :
Halaman /produk
![alt text](gambar_dokumentasi/3.png)
Saat gambar di klik
![alt text](gambar_dokumentasi/4.png)


Bagian 2 – Implementasi CSR (Client Rendering)
Modifikasi file [produk].tsx
![alt text](gambar_dokumentasi/5.png)
Rename nama file produk.ts menjadi [[...produk]].ts
![alt text](gambar_dokumentasi/6.png)
Modifikasi file servicefirebase.ts
![alt text](gambar_dokumentasi/7.png)
Modifikasi file [[...produk]].ts
![alt text](gambar_dokumentasi/8.png)
alamat url http://localhost:3000/api/produk/DJ80rtBbWGmY4msr6Q3Q
![alt text](gambar_dokumentasi/9.png)
alamat url http://localhost:3000/api/produk/123
![alt text](gambar_dokumentasi/10.png)
Modifikasi file detailProduct.module.scss
![alt text](gambar_dokumentasi/11.png)
Modfikasi views/DetailProduct/index.tsx
![alt text](gambar_dokumentasi/12.png)
Modifikasi views/pages/produk/[product].tsx
![alt text](gambar_dokumentasi/13.png)
Modfikasi views/DetailProduct/index.tsx
![alt text](gambar_dokumentasi/14.png)
modifikasi file detailProduct.module.scss agar title ditengah
![alt text](gambar_dokumentasi/15.png)
Hasil :
![alt text](gambar_dokumentasi/16.png)

Bagian 3 – Implementasi SSR
Edit kode [product].tsx
![alt text](gambar_dokumentasi/17.png)
Hasil :
![alt text](gambar_dokumentasi/18.png)
![alt text](gambar_dokumentasi/19.png)

Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)
Edit kode [product].tsx
![alt text](gambar_dokumentasi/20.png)
Edit kode DetailProdduct/index.tsx
![alt text](gambar_dokumentasi/21.png)
Hasil :
![alt text](gambar_dokumentasi/22.png)
![alt text](gambar_dokumentasi/23.png)