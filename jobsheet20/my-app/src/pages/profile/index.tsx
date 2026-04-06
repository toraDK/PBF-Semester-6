import { useSession } from "next-auth/react";
import styles from "./profile.module.scss";

const HalamanProfile = () => {
    const { data }: any = useSession();
    const fullname = data?.user?.fullname || "Pengguna";
    
    return (
        <section className={styles.profile}>
            <div className={styles.profile__card}>
                <h1>Halaman Profile</h1>
                <h2>Selamat Datang {fullname}</h2>
                <p className={styles.profile__subtitle}>
                    Ini adalah Halaman Profil
                </p>
                <div className={styles.profile__meta}>
                    <span className={styles.profile__pill}>Nim : 2341720161</span>
                    <span className={styles.profile__pill}>Kelas : 3D</span>
                </div>
            </div>
        </section>
    );
};

export default HalamanProfile