import { Box, Text } from "@chakra-ui/react";

export default function Instructions() {
  return (
    <Box
      border={"2px"}
      p={"5px"}
      my={"2em"}
      mx={"2em"}
      borderColor={"gray.300"}
      minH={"5vh"}
      rounded={"3xl"}
    >
      <Text fontSize="md">⌨️ &nbsp; use your keyboard to add a character</Text>
      <Text fontSize="md">
        ⌫ &nbsp;to remove a character &nbsp; | &nbsp; ⏎ &nbsp;to submit your
        guess
      </Text>
    </Box>
  );
}
