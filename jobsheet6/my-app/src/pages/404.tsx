import styles from '@/styles/404.module.scss'

const Costum404 = () => {
  return (
    <>
        <head>
            <title>404 - Halaman Tidak Ditemukan</title>
        </head>
        <div className={styles.error}>
            <img src="/page-not-found.svg" alt="404" className={styles.error_image
            } />
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        </div>
    </>
  )
}

export default Costum404