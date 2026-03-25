import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    // const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    //mengambil data dari response
    const result = await response.json();

    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.message); 
    }
  };

  return (
    <div className={style.login}>
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
        </form>
        <br />
        <p className={style.login__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanLogin;  