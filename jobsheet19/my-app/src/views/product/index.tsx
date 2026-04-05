import styles from "@/pages/produk/product.module.scss";
import Image from "next/image";
import Link from "next/link";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[]; }) => {
    const isLoading = !products || products.length === 0;

    return (
        <div className={styles.produk}>
            {/* Tambahkan data-testid agar unit test kamu tidak error */}
            <h1 className={styles.produk__title} data-testid="title">
                Daftar Produk
            </h1>

            <div className={styles.produk__content}>
                {isLoading
                    ? // Tampilkan Skeleton saat loading
                    Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={`skeleton-${index}`}
                            className={styles.produk__content__skeleton}
                        >
                            <div className={styles.produk__content__skeleton__image}></div>
                            <div className={styles.produk__content__skeleton__name}></div>
                            <div className={styles.produk__content__skeleton__category}></div>
                            <div className={styles.produk__content__skeleton__price}></div>
                        </div>
                    ))
                    : // Tampilkan Produk asli saat data tersedia
                    products.map((product: ProductType) => (
                        <Link 
                            href={`/produk/${product.id}`} 
                            key={product.id} 
                            className={`${styles.produk__content__item} ${styles.fadeIn}`}
                        >
                            <div className={styles.produk__content__item__image}>
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    width={200} 
                                    height={200} 
                                    priority={true}
                                />
                            </div>

                            <h4 className={styles.produk__content__item__name}>
                                {product.name}
                            </h4>

                            <p className={styles.produk__content__item__category}>
                                {product.category}
                            </p>

                            <p className={styles.produk__content__item__price}>
                                {/* Gunakan optional chaining atau default value 0 */}
                                Rp {(product.price || 0).toLocaleString("id-ID")}
                            </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default TampilanProduk;