// _app.tsx
import Head from "next/head";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Wordle! </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Box bg="gray.50" minH="100vh">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}
