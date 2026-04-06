import { signIn } from "next-auth/react";
import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    setIsLoading(true);
    setError("");
    await signIn(provider, { callbackUrl: "/" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("Password") as string; 

    try {
      const res = await signIn("credentials", {
        redirect: false, // Agar tidak otomatis pindah halaman jika error
        email,
        password,
        callbackUrl: "/", // Halaman tujuan setelah sukses login
      });

      if (res?.error) {
        // Jika login gagal (misal: password salah)
        setIsLoading(false);
        setError("Email atau Password salah!");
      } else {
        // Jika sukses login
        setIsLoading(false);
        push("/"); // Arahkan ke dashboard atau beranda
      }
    } catch (err) {
      setIsLoading(false);
      setError("Terjadi kesalahan sistem.");
    }
  };

  return (
    <>
      <div className={style.login} data-testid="login-view">
        {error && <p className={style.login__error}>{error}</p>}
        <h1 className={style.login__title}>Halaman Login</h1>
        <div className={style.login__form}>
          <form onSubmit={handleSubmit}>
            <div className={style.login__form__item}>
              <label
                htmlFor="email"
                className={style.login__form__item__label}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.login__form__item__input}
              />
            </div>

            <div className={style.login__form__item}>
              <label
                htmlFor="Password"
                className={style.login__form__item__label}
              >
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="Password"
                className={style.login__form__item__input}
              />
            </div>
            
            <button 
              type="submit" 
              className={style.login__form__item__button}
              disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
            <br /> <br />
            <button
              type="button"
              onClick={() => handleOAuthSignIn("google")}
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign in with Google"}
            </button>
            <br /> <br />
            <button
              type="button"
              onClick={() => handleOAuthSignIn("github")}
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign in with GitHub"}
            </button>
          </form>
          <br />
          <p className={style.login__form__item__text}>
            Belum punya akun? <Link href="/auth/register">Daftar di sini</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TampilanLogin;  