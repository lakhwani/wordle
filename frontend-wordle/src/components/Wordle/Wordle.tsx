import { useEffect, useState } from "react";
import { Box, Text, Button, useToast } from "@chakra-ui/react";
import { findUnusedIndex, isAlphabet } from "@/utils/utils";
import { validateWord } from "@/api/api";
import { initialStateWordleData, defaultScore } from "@/utils/constants";
import WordleGrid from "../WordleGrid/WordleGrid";

export function Wordle() {
  const [word, setWord] = useState<string>("");
  const [wordleData, setWordleData] = useState<WordleData>(
    initialStateWordleData
  );
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  function resetWordle() {
    setWordleData(initialStateWordleData);
    setWord("");
    window.location.reload();
  }

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (loading) return; // Ignore key presses while loading

      let newWord = word;
      const unusedIndex: number = findUnusedIndex(wordleData);
      let newWordleData: WordleData = wordleData;

      if (unusedIndex > -1 && unusedIndex < 6) {
        if (event.key == "Backspace") {
          newWord = newWord.slice(0, -1);
        } else if (isAlphabet(event.key) && newWord.length < 5) {
          newWord = word + event.key.toUpperCase();
        }
        if (newWord.length === 5 && event.key == "Enter") {
          setLoading(true);
          try {
            const response = await validateWord(newWord);
            const newScore =
              response.score.length === 0 ? defaultScore : response.score;
            Object.keys(newWordleData).forEach((value: string) => {
              const index = Number(value);
              if (index === unusedIndex) {
                newWordleData[index].used = response.is_valid_word;
                newWordleData[index].guess = newWord;
                newWordleData[index].is_valid_word = response.is_valid_word;
                newWordleData[index].score = newScore;
              }
            });
            setWordleData(newWordleData);
            if (!response.is_valid_word) {
              toast({
                title: "Invalid word.",
                description: "Please try again with a valid word.",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else {
              setWord("");
            }
          } catch (error: any) {
            console.log(error);
          }
          setTimeout(() => setLoading(false), 1000); // Remove loading state
        } else {
          setWord(newWord);
          Object.keys(newWordleData).forEach((value: string) => {
            const index = Number(value);
            if (index === unusedIndex) {
              newWordleData[index].guess = newWord;
            }
          });
          setWordleData(newWordleData);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [word, loading]);

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
        onClick={() => resetWordle()}
      >
        Reset Wordle 🔄
      </Button>
      <Text>{word}</Text>
    </Box>
  );
}
