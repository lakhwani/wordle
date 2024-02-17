// _app.tsx
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bg="gray.50" minH="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
