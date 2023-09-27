"use client";
// React , Next Js packages
import React from "react";
// MUI packages
import { Box, Container } from "@mui/material";
import Heading from "@/feature/Heading";
import CandidateCard from "@/feature/CandidateCard";

function Home() {
  return (
    <Box>
      <Heading />
      {/* candidate card  section  */}
      <Container maxWidth="lg">
        <CandidateCard />
        {/* footer section  */}
      </Container>
    </Box>
  );
}

export default Home;
