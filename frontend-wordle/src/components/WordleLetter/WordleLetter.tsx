import { Box, Text } from "@chakra-ui/react";

export function WordleLetter() {
  return (
    <Box
      border={"2px"}
      my={"0.5em"}
      mx={"0.5em"}
      borderColor={"gray.200"}
      minH={"10vh"}
      rounded={"3xl"}
    >
      <Text>L</Text>
    </Box>
  );
}
