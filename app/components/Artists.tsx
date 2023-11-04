"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";

import Slide1 from "../../public/NFT1.png";

interface CardProps {
  heading: string;
  description?: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "275px", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={40}
          h={40}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading color={"gray.300"} size="md">
            {heading}
          </Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
          p={2}
          _hover={{
            bg: "blue.500",
            color: useColorModeValue("white", "gray.700"),
          }}
        >
          Know more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Artists() {
  const artistArr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box p={4} id="artists">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Box position="relative" padding="7">
          <Box
            px="4"
            fontSize={{ base: "2xl", lg: "4xl", xl: "6xl" }}
            fontWeight={"bold"}
            color={"blue.400"}
          >
            Our Artists
          </Box>
        </Box>
        <Text color={"gray.300"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={{ base: "full", xl: "7xl" }} mt={12}>
        <Flex
          flexWrap="wrap"
          gridGap={{ base: 6 }}
          justify="center"
          alignItems="center"
        >
          {artistArr.map((a: any, i: number) => (
            <Card
              key={i}
              heading={"Name of Artist"}
              icon={<Image src={Slide1} alt="" className="rounded-[50%]" />}
              // description={
              //   "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              // }
              href={"#"}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
