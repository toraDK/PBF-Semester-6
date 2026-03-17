import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/produk.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
    // Digunakan jika menggunakan client-side rendering
    // const { query } = useRouter();
    // const { data, error, isLoading } = useSWR( query.product ? `/api/produk/${query.product}` : null, fetcher);

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

// {/digunakan static-site generation/}
// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/produk');
//     const response = await res.json();

//     // Membuat daftar path berdasarkan ID produk yang ada di database
//     const paths = response.data.map((product: ProductType) => ({
//         params: { product: product.id }
//     }));

//     // console.log("Paths yang dihasilkan untuk produk:", paths); // Debugging

//     return {
//         paths,
//         fallback: false // Jika ID tidak ada di paths, akan menampilkan 404
//     };
// }

// export async function getStaticProps({ params }: { params: { product: string } }) {
//     // Mengambil data spesifik satu produk berdasarkan parameter ID
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.product}`);
//     const response: { data: ProductType } = await res.json();

//     // console.log("Data produk yang diambil dari API:", response);

//     return {
//         props: {
//         product: response.data,
//         }
//     };
// }