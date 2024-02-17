import { Box, SimpleGrid } from "@chakra-ui/react";
import { WordleLetter } from "../WordleLetter/WordleLetter";
import { rowData } from "@/types/global";
import { Rowdies } from "@next/font/google";

interface WordleRowProps {
  rowData: rowData;
}

export default function WordleRow(props: WordleRowProps) {
  return (
    <Box>
      <SimpleGrid columns={5} spacing={0}>
        {props.rowData.score.map((key: string, index: number) => {
          return (
            <WordleLetter
              key={key + String(index)}
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
