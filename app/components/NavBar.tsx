"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../../public/resources/logo/logo_fantomsonic.png";
import Image from "next/image";
import { Link } from "react-scroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  id?: any;
}

const Links = ["Home", "Artists", "Fsonic", "About", "Contact Us"];

const NavLink = (props: Props) => {
  const { children, id } = props;

  return (
    <Link
      to={id.toLowerCase().replace(" ", "-")}
      spy={true}
      smooth={true}
      offset={-70} // Adjust this value for the desired offset
      duration={500}
    >
      <Box
        fontFamily={inter.className}
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          bg: "blue.500",
          color: "gray.700",
        }}
        href={`#${id.toLowerCase().replace(" ", "-")}`}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={"#1a1938"} px={4} className="fixed w-full z-20" color={"#fff"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="lg:px-10"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Image
              src={Logo as unknown as string}
              alt={"Logo"}
              height={40}
              width={40}
            />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Box key={link}>
                <NavLink key={link} id={link}>
                  {link}
                </NavLink>
              </Box>
            ))}
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.600",
              }}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box>
                  <NavLink key={link} id={link}>
                    {link}
                  </NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
