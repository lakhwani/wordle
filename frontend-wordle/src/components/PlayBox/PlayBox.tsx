import { Box } from "@chakra-ui/react";
import Instructions from "../Instructions/Instructions";
import { Wordle } from "../Wordle/Wordle";

export default function PlayBox() {
  return (
    <Box
      border={"2px"}
      my={"3em"}
      mx={"8em"}
      borderColor={"gray.300"}
      minH={"60vh"}
      rounded={"3xl"}
    >
      <Wordle></Wordle>
      <Instructions></Instructions>
    </Box>
  );
}
