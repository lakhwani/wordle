import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import WordleGrid from "../WordleGrid/WordleGrid";
import { isAlphabet } from "@/utils/utils";
import { rowData, wordleData } from "@/types/global";

export function Wordle() {
  const [word, setWord] = useState<string>("");
  const [wordleData, setWordleData] = useState<wordleData>(
    initialStateWordleData
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newWord = word;
      if (event.key == "Backspace") {
        newWord = newWord.slice(0, -1);
      } else if (isAlphabet(event.key) && newWord.length < 5) {
        newWord = word + event.key.toUpperCase();
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
      <WordleGrid data={wordleData}></WordleGrid>
      <Button onClick={() => setWordleData(initialStateWordleData)}>
        Reset Wordle 🔄
      </Button>
      <Text>{word}</Text>
    </Box>
  );
}

const initialStateWordleData = {
  0: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
  1: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
  2: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
  3: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
  4: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
  5: {
    used: false,
    guess: "",
    is_valid_word: false,
    score: [0, 0, 0, 0, 0],
  },
};
