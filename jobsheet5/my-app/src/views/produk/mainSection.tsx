import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const MainSection = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("isLogin") ? true : false
  );

  useEffect(() => {
          if (!isLogin) {
              push("/auth/login");
          }
      }, [isLogin, push]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Produk User Page</h2>
        <p>Ini adalah halaman khusus user yang sudah login.</p>
            <button
            style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
            }}
            onClick={() => {
                sessionStorage.removeItem("isLogin");
                setIsLogin(false);
            }}>Logout</button>
    </div>
  );
};

export default MainSection;