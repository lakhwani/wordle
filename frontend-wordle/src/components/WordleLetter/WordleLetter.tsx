import { Box, Text } from "@chakra-ui/react";
import { Londrina_Outline } from "@next/font/google";

const lodrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

export function WordleLetter() {
  return (
    <Box
      border={"2px"}
      my={"0.5em"}
      mx={"0.5em"}
      borderColor={"gray.200"}
      minH={"7.5vh"}
      rounded={"3xl"}
    >
      <Text className={lodrinaOutline.className} fontSize={"60px"}><b>L</b></Text>
    </Box>
  );
}
