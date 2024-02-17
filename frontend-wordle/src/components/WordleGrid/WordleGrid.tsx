import { Box, SimpleGrid } from "@chakra-ui/react";
import WordleRow from "../WordleRow/WordleRow";

interface WordleGridProps {
  data: WordleData;
}

export default function WordleGrid(props: WordleGridProps) {
  return (
    <Box p="1em">
      <SimpleGrid columns={1} spacing={1}>
        {Object.keys(props.data).map((key: string, index: number) => {
          return <WordleRow key={key} rowData={props.data[index]}></WordleRow>;
        })}
      </SimpleGrid>
    </Box>
  );
}
