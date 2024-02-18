// index.tsx
import Navbar from "@/components/Navbar/Navbar";
import PlayBox from "@/components/PlayBox/PlayBox";
import { Box, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar></Navbar>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <PlayBox></PlayBox>
      </Flex>
    </Box>
  );
}
