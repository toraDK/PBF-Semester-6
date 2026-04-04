import { useRouter } from "next/router";
import Script from "next/script";
import Navbar from "../navbar";
import Footer from "../footer";
import { Roboto } from "next/font/google";

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

    return (
        <>
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
                {!disableNavbar.includes(pathname) && <Navbar />}
                {children}
                {!disableNavbar.includes(pathname) && <Footer />}
            </main>
        </>
    );
}

export default AppShell;