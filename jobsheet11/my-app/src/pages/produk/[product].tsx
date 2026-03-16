import { useRouter } from "next/router";

const HalamanProduk = () => {
    const {query} = useRouter();
    // console.log(router);
    return (
        <div>
            <h1>Halaman Produk</h1>
            produk: {query.product}
        </div>
    )
}

export default HalamanProduk;