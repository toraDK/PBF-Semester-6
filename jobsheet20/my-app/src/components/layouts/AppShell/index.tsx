import { useRouter } from "next/router";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react"; // 1. Import hooks

const Navbar = dynamic(() => import("../navbar"));
const Footer = dynamic(() => import("../footer"));

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const disableNavbar = ["/auth/login", "/auth/register", '/404'];

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    // 2. Tambahkan state untuk mengecek mounting
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    return (
        <>
            {/* Script Analytics tetap aman di sini */}
            {gaId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gaId}');
                        `}
                    </Script>
                </>
            )}

            <main className={roboto.className}>
                {/* 3. Bungkus logika Navbar/Footer dengan isMounted */}
                {isMounted && !disableNavbar.includes(pathname) && <Navbar />}
                {children}
                {isMounted && !disableNavbar.includes(pathname) && <Footer />}
            </main>
        </>
    );
}

export default AppShell;