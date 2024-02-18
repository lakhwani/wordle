import { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
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

  // Resets the Wordle game to its initial state
  function resetWordle() {
    setWordleData(initialStateWordleData);
    setWord("");
    window.location.reload();
  }

  // Effect hook to listen for keyboard events
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (loading) return; // Ignore key presses while loading

      let newWord = word;
      const unusedIndex: number = findUnusedIndex(wordleData);
      let newWordleData: WordleData = wordleData;

      // Check if there's an unused index and it is within the guess limit
      if (unusedIndex > -1 && unusedIndex < 6) {
        if (event.key == "Backspace") {
          // Remove the last character on backspace
          newWord = newWord.slice(0, -1);
        } else if (isAlphabet(event.key) && newWord.length < 5) {
          // Add new character if it's an alphabet and less than 5 characters
          newWord = word + event.key.toUpperCase();
        }
        // When the word is 5 letters and enter is pressed, validate it
        if (newWord.length === 5 && event.key == "Enter") {
          setLoading(true);
          try {
            const response = await validateWord(newWord);
            // Calculate new score, use default if none returned from API
            const newScore =
              response.score.length === 0 ? defaultScore : response.score;
            // Update the wordleData with the response from the API
            Object.keys(newWordleData).forEach((value: string) => {
              const index = Number(value);
              if (index === unusedIndex) {
                // Update the guess details in the current index
                newWordleData[index].used = response.is_valid_word;
                newWordleData[index].guess = newWord;
                newWordleData[index].is_valid_word = response.is_valid_word;
                newWordleData[index].score = newScore;
              }
            });
            setWordleData(newWordleData);
            if (!response.is_valid_word) {
              // Show toast if the word is invalid
              toast({
                title: "Invalid word.",
                description: "Please try again with a valid word.",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else {
              // Reset word state if the word is valid
              setWord("");
            }
          } catch (error: any) {
            console.error(error);
          }
          // Remove loading state after a delay
          setTimeout(() => setLoading(false), 1000);
        } else {
          // Update word state as user types
          setWord(newWord);
          // Update only the guess of the current index in wordleData
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
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
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
        mb="1em"
      >
        ↻
      </Button>
    </Box>
  );
}
