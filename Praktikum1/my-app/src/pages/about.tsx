import Image from "next/image";

export default function Home() {
    return (
        <>
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f4f4f4",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        width: "300px",
                    }}
                >
                <Image
                    src="/user.png"
                    alt="Foto Profil"
                    width={120}
                    height={120}
                    style={{ borderRadius: "50%" }}
                />

                    <h2 style={{ marginTop: "20px" }}>Tora Digda Kristiawan</h2>
                    <p><strong>NIM:</strong> 2341720161</p>
                    <p><strong>Program Studi:</strong> Teknik Informatika</p>
                </div>
            </main>
        </>
    );
}