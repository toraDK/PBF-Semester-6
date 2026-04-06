import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/404.module.scss'

const Costum404 = () => {
  return (
    <>
        <Head>
            <title>404 - Halaman Tidak Ditemukan</title>
        </Head>
        <div className={styles.error}>
            <img src="/page-not-found.svg" alt="404" className={styles.error_image
            } />
        <h1 data-testid="title" className={styles.error_title}>Custom 404 Page</h1>
        <h1 className={styles.error_title}>404 - Halaman Tidak Ditemukan</h1>
        <p className={styles.error_description}>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        <Link href={"/"}>
            <button className={styles.error_button}>
                Kembali ke Beranda
            </button>
        </Link>
        </div>
    </>
  )
}

export default Costum404