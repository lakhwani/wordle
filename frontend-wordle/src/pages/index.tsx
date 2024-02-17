// index.tsx
import Navbar from "@/components/Navbar/Navbar";
import { Box, Text, Button } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar></Navbar>
    </Box>
  );
}

/* <Button
  colorScheme="teal"
  mt={4}
  onClick={() => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL || "");
  }}
>
  Click Me!
</Button> */
