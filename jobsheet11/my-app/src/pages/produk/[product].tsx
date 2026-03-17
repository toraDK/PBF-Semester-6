import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/produk.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
    // Digunakan jika menggunakan client-side rendering
    /*
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(
        query.produk ? `/api/products/${query.produk}` : null,
        fetcher
    );
    */

    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProduk;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, 
// dan akan mengambil data produk dari API sebelum merender halaman.
// (digunakan server-side rendering)
export async function getServerSideProps({ params }: { params: { product: string } }) {
    // Melakukan fetch ke API internal berdasarkan parameter 'produk' dari URL
    const res = await fetch(`http://localhost:3000/api/produk/${params?.product}`);
    const respone = await res.json();

    // console.log("Data produk yang diambil dari API:", respone);

    return {
        props: {
            product: respone.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
        },
    };
}