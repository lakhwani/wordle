// index.tsx
import Navbar from "@/components/Navbar/Navbar";
import PlayBox from "@/components/PlayBox/PlayBox";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar></Navbar>
      <PlayBox></PlayBox>
    </Box>
  );
}
