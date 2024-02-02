import "@/styles/globals.css";
import "@/styles/slick.css";
import "@/styles/slick-theme.css";
import type { AppProps } from "next/app";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <UserProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
