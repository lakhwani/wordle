import { Box, SimpleGrid } from "@chakra-ui/react";
import { WordleLetter } from "../WordleLetter/WordleLetter";

export default function WordleRow() {
  return (
    <Box>
      <SimpleGrid columns={5} spacing={0}>
        <WordleLetter></WordleLetter>
        <WordleLetter></WordleLetter>
        <WordleLetter></WordleLetter>
        <WordleLetter></WordleLetter>
        <WordleLetter></WordleLetter>
      </SimpleGrid>
    </Box>
  );
}
