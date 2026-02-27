import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {
        sessionStorage.setItem("isLogin", "true");
        push("/produk");
    }

  return (
    <div>
        <h1>Halaman Login</h1>
        <button onClick={handlerLogin}>Login</button> <br/>
        <button onClick={() => push("/produk")}>Login</button> <br/>
        <button onClick={() => handlerLogin()}>Login</button> <br/>
        <Link href={"/auth/register"} className="link">ke Halaman Register</Link>
        <hr />
        <Link href={"/auth/register"} className="link">ke Halaman Register</Link>
        <button onClick={() => handlerLogin()}>ke halaman produk</button>
    </div>
  );
}

export default HalamanLogin;