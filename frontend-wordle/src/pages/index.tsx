// index.tsx
import { Box, Text, Button } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box textAlign="center" fontSize="xl" p={8}>
      <Text>Wordle!</Text>
      <Button
        colorScheme="teal"
        mt={4}
        onClick={() => {
          console.log(process.env.NEXT_PUBLIC_BACKEND_URL || "");
        }}
      >
        Click Me!
      </Button>
    </Box>
  );
}
