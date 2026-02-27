import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
    const [isLogin, setIsLogin] = useState(
        sessionStorage.getItem("isLogin") ? true : false
    );
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, [isLogin, push]);

    return (
        <div>
            <h1>Produk user page</h1>
                <button onClick={() => {
                    sessionStorage.removeItem("isLogin");
                    setIsLogin(false);
                }}>Logout</button>
        </div>
    )
}

export default Produk;