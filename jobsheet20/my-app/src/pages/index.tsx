import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
// import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image src="/landing-page.svg" width={300} height={300} alt="landing page" />
        <h1>Praktikum Next.js Pages Router</h1> <br />
        <p>Mahasiswa D4 Pengembangan Web</p>
        <p>Ini adalah halaman landing page</p>
      </div>
    </>
  )
}