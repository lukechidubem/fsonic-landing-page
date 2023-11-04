"use client";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Artists from "./components/Artists";
import Fsonic from "./components/Fsonic";
import ContactUs from "./components/Contact-us";
import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";
import Footer from "./components/Footer";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return !domLoaded ? (
    <section className="h-screen w-screen flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />{" "}
    </section>
  ) : (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      style={{ background: "#1a1938" }}
    >
      <NavBar />
      <Hero />
      <Artists />
      <Fsonic />
      <ContactUs />
      <Footer />
    </Box>
  );
}
