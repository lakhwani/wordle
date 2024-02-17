import { Box, SimpleGrid } from "@chakra-ui/react";
import { WordleLetter } from "../WordleLetter/WordleLetter";

interface WordleRowProps {
  rowData: RowData;
}

export default function WordleRow(props: WordleRowProps) {
  return (
    <Box>
      <SimpleGrid columns={5} spacing={0}>
        {props.rowData.score.map((key: number, index: number) => {
          return (
            <WordleLetter
              key={String(key) + String(index)}
              letter={props.rowData.guess.charAt(index)}
              score={props.rowData.score[index]}
              is_valid_word={props.rowData.is_valid_word}
            ></WordleLetter>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
