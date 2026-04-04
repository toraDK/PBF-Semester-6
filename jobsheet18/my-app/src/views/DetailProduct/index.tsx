// import { ProductType } from "@/types/Product.type";
import { ProductType } from "@/types/produk.type";
import styles from "../DetailProduct/detailProduct.module.scss";
import Image from "next/image";

const DetailProduk = ({ products }: { products: ProductType }) => {
    // console.log(products);
    return (
        <>
        <h1 className={styles.title}>Detail Produk</h1>
        <div className={styles.produkdetail}>
            <div className={styles.produkdetail__image}>
                <Image width={500} height={500} src={products.image && products.image} alt={products.name} />
            </div>

            <div className={styles.produkdetail__info}>
                <h1 className={styles.produkdetail__name}>{products.name}</h1>
                <p className={styles.produkdetail__category}>{products.category}</p>
                <p className={styles.produkdetail__price}>
                    Rp {products.price && products.price.toLocaleString("id-ID")}
                </p>
            </div>
        </div>
        </>
    );
};

export default DetailProduk;