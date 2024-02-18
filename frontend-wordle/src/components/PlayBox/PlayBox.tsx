import { Box } from "@chakra-ui/react";
import Instructions from "../Instructions/Instructions";
import { Wordle } from "../Wordle/Wordle";

export default function PlayBox() {
  return (
    <Box
      border={"2px"}
      my={"3em"}
      mx={"8em"}
      borderColor={"gray.400"}
      minH={"60vh"}
      minW={"30em"}
      maxW={"40em"}
      rounded={"3xl"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="100%">
        <Wordle></Wordle>
        <Instructions></Instructions>
      </Box>
    </Box>
  );
}
