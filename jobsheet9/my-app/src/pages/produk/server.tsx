import TampilanProduk from "@/views/product";

const halamanProdukServer = () => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={[]} isLoading={true} />
    </div>
  );
};

export default halamanProdukServer;