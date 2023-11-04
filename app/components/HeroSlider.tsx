"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import styled from "@emotion/styled";
// @ts-ignore
import { keyframes } from "@emotion/react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const cards = [
    {
      title: "NFT Projects 1",
      text: "This project is an exclusive Fsonic based on fantom speed. It's perfect for All Artist, Defi lovers and all Crypto enthusias.",
      image: "/NFT1.png",
    },
    {
      title: "NFT Projects 2",
      text: "This project is an exclusive Fsonic based on fantom speed. It's perfect for All Artist, Defi lovers and all Crypto enthusias.",
      image: "/NFT2.png",
    },
    {
      title: "NFT Projects 3",
      text: "This project is an exclusive Fsonic based on fantom speed. It's perfect for All Artist, Defi lovers and all Crypto enthusias.",
      image: "/NFT3.png",
    },

    {
      title: "NFT Projects 4",
      text: "This project is an exclusive Fsonic based on fantom speed. It's perfect for All Artist, Defi lovers and all Crypto enthusias.",
      image: "/NFT4.png",
    },
  ];

  const rotatingAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const RotatingImage = styled("div")`
    animation: ${rotatingAnimation} 3s linear;
  `;

  return (
    domLoaded && (
      <Box
        position={"relative"}
        height={{ base: "400px", md: "350", lg: "450px", xl: "600px" }}
        width={{ base: "350px", lg: "450px", xl: "600px" }}
        className="rounded-tr-[100px] rounded-bl-[100px] mt-10"
        overflow={"hidden"}
        backgroundImage="linear-gradient(90deg, rgba(0, 0, 0, 0), #007BFF, rgba(0, 0, 0, 0))"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <RotatingImage key={index}>
              <Box
                key={index}
                // height={"fit-content"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
                className="flex justify-center items-center rounded-tr-[100px] rounded-bl-[100px]"
                height={{ base: "400px", md: "350", lg: "450px", xl: "600px" }}
                width={{ base: "350px", lg: "450px", xl: "600px" }}
              >
                <Container
                  size="container.lg"
                  height="600px"
                  position="relative"
                  className="flex justify-center items-center "
                >
                  <Stack
                    spacing={4}
                    w={"full"}
                    maxW={"lg"}
                    position="absolute"
                    color={"gray.700"}
                    top="50%"
                    transform="translate(0, -50%)"
                    bg={`rgba(173,216,230, 0.7)`}
                    className="rounded-2xl px-4 py-2"
                  >
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="">
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            </RotatingImage>
          ))}
        </Slider>
      </Box>
    )
  );
}
