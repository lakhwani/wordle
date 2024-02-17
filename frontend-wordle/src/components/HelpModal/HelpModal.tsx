import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { Londrina_Outline } from "@next/font/google";

const lodrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HelpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize={"40px"}
        color="gray.700"
        className={lodrinaOutline.className}
      >
        [?]
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to Play?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3} fontWeight="bold">
              Objective:
            </Text>
            <Text mb={3}>
              Your goal is to guess a secret word within 6 tries.
            </Text>

            <Text mb={3} fontWeight="bold">
              Making a Guess:
            </Text>
            <Text mb={3}>
              Enter a valid English word using your keyboard and press enter to
              submit your guess. Each guess must be exactly 5 letters long. The
              game will only accept valid words. Use the provided API endpoint
              to check if your guesses are valid.
            </Text>

            <Text mb={3} fontWeight="bold">
              Feedback on Your Guess:
            </Text>
            <Text mb={3}>
              After each guess, the squares will change color to give you hints:
            </Text>
            <Text ml={5} mb={1}>
              Green: A letter is exactly correct (right letter, right position).
            </Text>
            <Text ml={5} mb={1}>
              Yellow: A letter is in the secret word but in the wrong position.
            </Text>
            <Text ml={5} mb={3}>
              Grey: A letter is not in the word at all. Use these hints to guide
              your next guess.
            </Text>

            <Text mb={3} fontWeight="bold">
              Guesses:
            </Text>
            <Text mb={3}>
              You have a total of 6 guesses to find the secret word. Guesses
              that are not valid words do not count against your total guesses.
            </Text>

            <Text mb={3} fontWeight="bold">
              Winning:
            </Text>
            <Text mb={3}>
              You win by guessing the secret word within your allowed number of
              guesses. The game ends either when you guess the word correctly or
              when you run out of guesses.
            </Text>

            <Text mb={3} fontWeight="bold">
              Tips for Players:
            </Text>
            <Text mb={3}>
              Think about common letter placements and word patterns in the
              English language. Use your initial guesses to test out common
              vowels and consonants. Pay attention to the feedback colors after
              each guess to narrow down your options.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
