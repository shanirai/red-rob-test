"use client";
// React , Next Js packages
import React from "react";
// MUI packages
import {
  Avatar,
  Badge,
  Box,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// Mui icons
import CircleIcon from "@mui/icons-material/Circle";
import GradeIcon from "@mui/icons-material/Grade";

function EducationalDetails() {
  return (
    <Box>
      <Grid container>
        <Grid item sm={8}>
          <Box pt={1} pb={2} display={"flex"}>
            <Avatar
              alt="Amity"
              src="/static/images/avatar/1.jpg"
              sx={{
                height: "40px",
                width: "40px",
                fontSize: 18,
                bgcolor: "text.secondary",
                color: "primary.main",
              }}
            />
            <Box>
              <Box flexDirection={"column"} ml={2}>
                <Typography variant="h5" fontWeight={600}>
                  Bachelor of Technology in Computer Science
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  color={"primary.main"}
                >
                  Amity University
                  <Chip
                    label="2016 - 2019 "
                    sx={{
                      bgcolor: "text.secondary",
                      color: "primary.main",
                      ml: 1,
                    }}
                    size="small"
                  />
                  <Chip
                    label=" 80% CV Similarity  "
                    sx={{
                      bgcolor: "darkcyan",
                      color: "#fff",
                      ml: 1,
                    }}
                    size="small"
                  />
                </Typography>
                <Box>
                  <Typography variant="h6" mt={1.5}>
                    Technical Skills
                  </Typography>
                  <Box my={1.5}>
                    <Chip
                      label="Java"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="ReactJs"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="Python"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                </Box>
                {/* other skills */}
                <Box>
                  <Typography variant="h6" mt={1.5}>
                    Other Skills
                  </Typography>
                  <Box my={1.5}>
                    <Chip
                      label="Google FCM"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="Xcode"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="Android "
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                    <Chip
                      label="MS Office"
                      size="small"
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6">About</Typography>
                  <Typography
                    variant="body1"
                    mt={0.5}
                    fontWeight={500}
                    display={"flex"}
                    alignItems={"baseline"}
                  >
                    <CircleIcon sx={{ width: 10, height: 10, mr: 1 }} />
                    Very well thought out and articulate communication. Clear
                    milestones, deadlines and fast work. Patience. Infinite
                    patience. No shortcuts. Even if the client is being
                    careless.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: 1.5 }} />
        <Grid item sm={3.8}>
          <Box>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="subtitle2"
                color={"darkcyan"}
                bgcolor={"text.secondary"}
                px={1}
                py={0.5}
                borderRadius={1}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Top 5% in National
              </Typography>
              <Typography
                variant="subtitle2"
                color={"darkcyan"}
                bgcolor={"text.secondary"}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                px={1}
                py={0.5}
                borderRadius={1}
              >
                Top 0.01% in International
              </Typography>
            </Stack>
            <Stack mt={1}>
              <Typography variant="subtitle1">Amity University</Typography>
              <Typography
                variant="subtitle2"
                display={"flex"}
                alignItems={"center"}
              >
                <Typography
                  component={"span"}
                  variant="subtitle2"
                  bgcolor={"darkcyan"}
                  p={0.5}
                  display={"flex"}
                  alignItems={"center"}
                  borderRadius={1}
                  color={"#fff"}
                  mr={1}
                >
                  4.1{" "}
                  <GradeIcon sx={{ color: "#fff", fontSize: 14, ml: 0.25 }} />
                </Typography>
                Based on Reviews
              </Typography>
              <Typography variant="subtitle2" mt={0.5}>
                HQ - Delhi India , | Engineering College
              </Typography>
              <Typography variant="subtitle2" mt={0.5}>
                Amity University Affiliation | AICTE
              </Typography>
              <Typography variant="subtitle2" mt={0.5}>
                Amity University Accredited | NAAC A++
              </Typography>
              <Typography variant="subtitle2" mt={0.5}>
                Amity University Private Certification | ISO Certified
              </Typography>
              <Typography variant="subtitle2" mt={0.5}>
                Amity University Program Ranking | 10% of National
              </Typography>
            </Stack>
            <Box mt={0.5}>
              <Typography variant="subtitle2">
                College Founded : 1996 | College Ranking : 50
              </Typography>
              <Typography variant="subtitle2"></Typography>
              <Typography variant="subtitle2">
                College Student Strength : 5000+ | Type of College : National
              </Typography>
              <Typography variant="subtitle2">
                practical Experiences : 100% Based on Syllabus
              </Typography>
              <Typography variant="subtitle2">
                Flexibility in Coursework : Autonomous
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EducationalDetails;
