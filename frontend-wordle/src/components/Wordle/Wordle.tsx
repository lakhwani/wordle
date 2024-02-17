import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import WordleGrid from "../WordleGrid/WordleGrid";

export function Wordle() {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newWord = word;
      if (event.key == "Backspace") {
        newWord = newWord.slice(0, -1);
      } else {
        newWord = word + event.key;
      }
      setWord(newWord);
      console.log(event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [word]);

  return (
    <Box
      border={"2px"}
      my={"2em"}
      mx={"2em"}
      borderColor={"gray.300"}
      minH={"50vh"}
      rounded={"3xl"}
    >
      <WordleGrid></WordleGrid>
      <Text>{word}</Text>
    </Box>
  );
}
