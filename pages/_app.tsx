// ^ APP.JS FILE =====================================================================================================================================
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Toaster position='top-right' reverseOrder={false} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
