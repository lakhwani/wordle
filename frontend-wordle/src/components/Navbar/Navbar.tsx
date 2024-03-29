// Navbar.tsx
import { Box, Flex, Text } from "@chakra-ui/react";
import { Londrina_Outline } from "@next/font/google";
import HelpModal from "../HelpModal/HelpModal";

const lodrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <Box
      borderBottom="2px"
      borderColor="gray.400"
      bg="gray.100"
      p={4}
      color="white"
    >
      <Flex justifyContent={"center"} justifyItems={"center"} ml="1em">
        <Text
          fontSize={"56px"}
          color="black"
          className={lodrinaOutline.className}
        >
          <b>Wordle!</b>
        </Text>
        <HelpModal></HelpModal>
      </Flex>
    </Box>
  );
};

export default Navbar;
