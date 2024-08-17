"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import React, { FC, useState } from "react";
import Header from "./components/Header";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer";
import Script from "next/script";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const pathname = usePathname();
  const text1 = pathname?.split("/")[1];

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PXZLWFQX');
        `}
    </Script>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-hsl-custom bg-no-repeat dark:bg-gradient-to-b dark:from-hsl-custom dark:to-hsl-custom duration-300`}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>
                {text1 !== "admin" && text1 !== "course" && text1 !== "livecourse" && (
                  <Header
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    route={route}
                  />
                )}
                {children}
              
<a href="https://api.whatsapp.com/send?phone=918882509194&text=Hey%2C%20%0ACan%20we%20connect%20%3F%2C%20I%20want%20to%20know%20about..."  target="_blank" className="fixed right-4 bottom-9"><Image src="/whatsapp-logo.svg" alt="Contact on Whatsapp" width={45} height={45}/></a>
              
                
                {text1 !== "admin" && <Footer />}
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
        {/* <!-- Meta Pixel Code --> */}
        <Script
                  id="fb-pixel"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        >
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', '787542220155425'); 
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=787542220155425&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
        <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXZLWFQX" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} 
    />
      </body>
    </html>
  );
}

const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});

  return <div>{isLoading ? <Loader /> : <div>{children}</div>}</div>;
};
