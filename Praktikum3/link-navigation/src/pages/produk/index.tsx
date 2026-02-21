import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    return (
        <div>
            <h1>Produk user page</h1>
        </div>
    )
}

export default Produk;