import "@/styles/globals.css";
import "@/styles/slick.css";
import "@/styles/slick-theme.css";
import type { AppProps } from "next/app";
import { UserProvider } from "./contexts/UserContext";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp;
