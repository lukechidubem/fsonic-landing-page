"use client";

import {
  Button,
  Flex,
  Heading,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import CaptionCarousel from "./HeroSlider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <Stack
      id="home"
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      className="items-center justify-center"
    >
      <Flex flex={1} className="flex justify-center items-center mt-10">
        <CaptionCarousel />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              fontFamily={inter.className}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
              color={"#fff"}
            >
              FSONICNFT
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Where Art and Utility Unite
            </Text>{" "}
          </Heading>
          <StatGroup color={"#fff"}>
            <Stat>
              <StatLabel>Total NFTs</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                5,670
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Claimed NFTs</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                2,354
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15.05%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Unclaimed NFTs</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                5,670
              </StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                5.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Total Stacked</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                2,670
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                40.36%
              </StatHelpText>
            </Stat>
          </StatGroup>
          <Text
            color={"blue.400"}
            as={"h2"}
            fontSize={{ base: "lg", md: "lg", lg: "xl" }}
          >
            Reword Pools:
          </Text>{" "}
          <StatGroup color={"#fff"}>
            <Stat>
              <StatLabel>$fsonic</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                30 $fsonic
              </StatNumber>
            </Stat>

            <Stat>
              <StatLabel>$love</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                500000
              </StatNumber>
            </Stat>

            <Stat>
              <StatLabel>$mrr</StatLabel>
              <StatNumber fontSize={{ base: "smaller", md: "xl", xl: "2xl" }}>
                1000
              </StatNumber>
            </Stat>
          </StatGroup>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.600",
              }}
            >
              Claim NFT
            </Button>
            <Button
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              rounded={"full"}
              variant={"outline"}
              color={"#fff"}
            >
              How To Claim
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
