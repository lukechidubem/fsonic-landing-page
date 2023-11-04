"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Fsonic() {
  return (
    <>
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mt={6}
        fontFamily={inter.className}
      >
        <Box position="relative" paddingTop="10" id="fsonic">
          {/* <Divider bg={"black"} _dark={{ bg: "blue.600" }} /> */}
          <Box
            px="4"
            fontSize={{ base: "2xl", lg: "4xl", xl: "6xl" }}
            fontWeight={"bold"}
            color={"blue.400"}
          >
            FSONIC Token
          </Box>
        </Box>
      </Stack>

      <Flex
        p={{ base: 10, lg: 50 }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          // bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 2,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "8xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "30%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              bgImage={
                "url('https://fsonic.vercel.app/SonicNft/showcase/n7.jpeg')"
              }
              style={{
                backgroundImage:
                  "url('https://fsonic.vercel.app/SonicNft/showcase/n7.jpeg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={{ base: 2, md: 6 }}
            color="gray.300"
            maxW={{
              base: "full",
              lg: "8xl",
            }}
            w={{
              lg: "70%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.300"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              The Rise of <chakra.span color="blue.300">FSONIC</chakra.span>
            </chakra.h2>
            <chakra.p mt={4} color="gray.300" fontFamily={"Heebo"}>
              Empowering the Digital Art Market** Welcome to the world of
              $fsonic, a cutting-edge crypto token that is poised to
              revolutionize the way we engage with digital art. As a
              professional and secure currency, $fsonic serves as a gateway for
              art enthusiasts to acquire NFT art pieces from top artists within
              our esteemed platform. Within our exclusive marketplace, users
              gain access to a curated selection of NFTs crafted by renowned
              artists from around the globe. $fsonic enables art enthusiasts to
              explore a realm of captivating digital masterpieces that transcend
              boundaries and ignite the imagination.
            </chakra.p>

            <chakra.p mt={4} color="gray.300">
              What sets $fsonic apart is its unique staking mechanism, designed
              to reward holders of unique NFTs with dynamic APY % of $fsonic
              tokens, as well as other promising tokens in the future. This
              incentivization model fosters an active and engaged community,
              where stakeholders actively participate in the growth and success
              of our platform. Built upon the foundation of Fantom technology,
              $fsonic ensures secure and transparent transactions. Our
              decentralized platform guarantees the authenticity and provenance
              of each NFT, providing users with a seamless and trustworthy
              ownership experience.
            </chakra.p>

            <chakra.p mt={4} color="gray.300">
              As we move forward, $fsonic is dedicated to establishing strategic
              partnerships with leading artists, galleries, and collectors. By
              uniting these influential figures in the art world, we aim to
              create an inclusive ecosystem that empowers artists and offers
              enthusiasts unparalleled access to exceptional artworks. Join us
              on this transformative journey as we redefine the digital art
              market. With $fsonic, art becomes more than just a purchase; it
              becomes an immersive and rewarding experience that celebrates the
              power of artistic expression. Embrace the future of digital art
              acquisition with $fsonic and unlock a world of endless
              possibilities.
            </chakra.p>

            <Box mt={8}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                px={5}
                py={3}
                fontWeight="semibold"
                _hover={{
                  bg: "blue.600",
                }}
              >
                Buy $fSONIC Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
