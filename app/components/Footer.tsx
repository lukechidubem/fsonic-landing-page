"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";

export const SocialButton = ({
  children,
  label,
  href,
  h,
  w,
  f,
}: {
  children: ReactNode;
  label: string;
  href: string;
  h?: number;
  w?: number;
  f?: string;
}) => {
  return (
    <chakra.button
      rounded={"full"}
      w={w ? w : 8}
      h={h ? h : 8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      fontSize={f ? f : "20px"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      bg={"blue.400"}
      color="gray.200"
      _hover={{
        bg: "blue.600",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box color={"gray.300"}>
      <Container
        as={Stack}
        maxW={"8xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 FSONICNFTs. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Discord"} href={"#"}>
            <FaDiscord />
          </SocialButton>
          <SocialButton label={"Telegram"} href={"#"}>
            <FaTelegram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
