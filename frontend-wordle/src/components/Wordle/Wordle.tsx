import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import WordleGrid from "../WordleGrid/WordleGrid";
import { findUnusedIndex, isAlphabet } from "@/utils/utils";

export function Wordle() {
  const [word, setWord] = useState<string>("");
  const [wordleData, setWordleData] = useState<WordleData>(
    initialStateWordleData
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newWord = word;
      if (event.key == "Backspace") {
        newWord = newWord.slice(0, -1);
      } else if (isAlphabet(event.key) && newWord.length < 5) {
        newWord = word + event.key.toUpperCase();
      } else if (newWord.length < 5 && event.key == "Enter") {
      }
      setWord(newWord);
      const unusedIndex: number = findUnusedIndex(wordleData);
      let newWordleData: WordleData = wordleData;
      Object.keys(newWordleData).forEach((value: string) => {
        const index = Number(value);
        if (index == unusedIndex) {
          newWordleData[index].guess = newWord;
        }
      });
      setWordleData({ ...newWordleData });
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
      <Button
        variant={"outline"}
        colorScheme="gray"
        fontWeight={"400"}
        onClick={() => setWordleData(initialStateWordleData)}
      >
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
    score: [-1, -1, -1, -1, -1],
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
