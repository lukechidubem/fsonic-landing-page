import {
  Box,
  Flex,
  VStack,
  Text,
  Link,
  Icon,
  IconButton,
  chakra,
  Stack,
} from "@chakra-ui/react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { SocialButton } from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Flex
        w="full"
        direction={"column"}
        alignItems="center"
        justifyContent="center"
        id="contact-us"
        my={{ base: 1, md: 5 }}
      >
        <Box position="relative" padding="2">
          <Box
            fontSize={{ base: "2xl", lg: "4xl", xl: "6xl" }}
            fontWeight={"bold"}
            color={"blue.400"}
          >
            Reach Us
          </Box>
        </Box>
        <Flex
          justify="center"
          width={{ base: "95%", md: "80%" }}
          className="shadow-xl"
        >
          <Box
            w={{
              base: "full",
              md: "75%",
              lg: "50%",
            }}
            px={4}
            py={{ base: 2, md: 5, lg: 10 }}
            textAlign={{
              base: "left",
              md: "center",
            }}
          >
            <chakra.span
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.300"
              mb={6}
            >
              <chakra.span
                display="block"
                fontSize={{ base: "2xl", lg: "4xl", xl: "6xl" }}
              >
                Join our Community.
              </chakra.span>
              <chakra.span
                display="block"
                color="gray.600"
                my={6}
                fontSize={{ base: "xl", lg: "3xl", xl: "4xl" }}
              >
                Reach out to us for partnerships, questions, and guides.
              </chakra.span>
            </chakra.span>

            <Flex
              justifyContent={{
                base: "space-between",
                md: "space-around",
              }}
              direction={{
                base: "row",
                sm: "row",
              }}
              mt={2}
              width="100%"
            >
              <SocialButton label={"Twitter"} href={"#"} h={14} w={14} f="40px">
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Telegram"}
                href={"#"}
                h={14}
                w={14}
                f="40px"
              >
                <FaTelegram />
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"} h={14} w={14} f="40px">
                <FaDiscord />
              </SocialButton>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      ;
    </>
  );
};

export default ContactUs;
