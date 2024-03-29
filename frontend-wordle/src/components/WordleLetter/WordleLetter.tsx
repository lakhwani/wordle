import { getColour } from "@/utils/utils";
import { Box, Text } from "@chakra-ui/react";
import { Londrina_Outline } from "@next/font/google";

const lodrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

interface WordleLetterProps {
  letter: string;
  score: number;
  is_valid_word: boolean;
}

export function WordleLetter(props: WordleLetterProps) {
  return (
    <Box
      border={"2px"}
      my={"0.2em"}
      mx={"0.4em"}
      borderColor={"gray.200"}
      minH={"7.5vh"}
      rounded={"3xl"}
      backgroundColor={getColour(props.score)}
      transition="background-color 1s ease"
    >
      <Text
        className={lodrinaOutline.className}
        fontSize={"50px"}
        color={"gray.600"}
      >
        <b>{props.letter}</b>
      </Text>
    </Box>
  );
}
