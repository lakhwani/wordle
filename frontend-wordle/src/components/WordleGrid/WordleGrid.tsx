import { Box, SimpleGrid } from "@chakra-ui/react";
import WordleRow from "../WordleRow/WordleRow";

export default function WordleGrid() {
  return (
    <Box p="1em">
      <SimpleGrid columns={1} spacing={1}>
        <WordleRow></WordleRow>
        <WordleRow></WordleRow>
        <WordleRow></WordleRow>
        <WordleRow></WordleRow>
        <WordleRow></WordleRow>
      </SimpleGrid>
    </Box>
  );
}
