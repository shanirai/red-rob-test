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

function ExperianceCard(props: any) {
  //**  props -- components   */
  const { company, designation } = props;

  return (
    <Box>
      <Grid container>
        <Grid item sm={8}>
          <Box pt={1} pb={2} display={"flex"}>
            <Avatar
              alt="Software"
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
                  {designation}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  color={"primary.main"}
                >
                  {company}{" "}
                  <Chip
                    label="2016 - 2019 "
                    sx={{
                      bgcolor: "text.secondary",
                      color: "primary.main",
                    }}
                    size="small"
                  />
                </Typography>
                <Box>
                  <Typography variant="h6" mt={1.5}>
                    Skills
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
                      label=".Net"
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
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  mt={0.5}
                  fontWeight={500}
                  display={"flex"}
                  alignItems={"baseline"}
                >
                  <CircleIcon sx={{ width: 10, height: 10, mr: 1 }} />
                  As a UI Designer I have gained expertise in Web application
                  design . I was responsible for integrating azure B2c login and
                  various login authentication in the applications so that only
                  authorized user can access the application.
                </Typography>
                <Typography
                  variant="body1"
                  mt={0.5}
                  fontWeight={500}
                  display={"flex"}
                  alignItems={"baseline"}
                >
                  <CircleIcon sx={{ width: 10, height: 10, mr: 1 }} /> As a UI
                  Designer I have gained expertise in Web application design . I
                  was responsible for integrating azure B2c login and various
                  login authentication in the applications so that only
                  authorized user can access the application.
                </Typography>
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
                Top 50% in National
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
                Top 10% in International
              </Typography>
            </Stack>
            <Stack mt={1}>
              <Typography variant="subtitle1">{company}</Typography>
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
                HQ - Delhi India , | IT Services and Consultancy
              </Typography>
            </Stack>
            <Box mt={0.5}>
              <Typography variant="subtitle2">
                Company Founded : 2005 | Company Ranking : 1404
              </Typography>
              <Typography variant="subtitle2"></Typography>
              <Typography variant="subtitle2">
                Company Size : 50 - 200 | Type of Company : National
              </Typography>
            </Box>
            <Box mt={0.5}>
              <Typography variant="subtitle1">
                Softonic solutions Employee Benefits
              </Typography>
              <Box>
                <Chip
                  label="Continuous Learning "
                  size="small"
                  sx={{
                    bgcolor: "text.secondary",
                    color: "primary.main",
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    my: 0.5,
                    mr: 0.5,
                  }}
                />
                <Chip
                  label="WIFI Bill  "
                  size="small"
                  sx={{
                    bgcolor: "text.secondary",
                    color: "primary.main",
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    my: 0.5,
                    mr: 0.5,
                  }}
                />
                <Chip
                  label="Health Insurance  "
                  size="small"
                  sx={{
                    bgcolor: "text.secondary",
                    color: "primary.main",
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    my: 0.5,
                    mr: 0.5,
                  }}
                />
                <Chip
                  label="Rewards  "
                  size="small"
                  sx={{
                    bgcolor: "text.secondary",
                    color: "primary.main",
                    fontSize: 14,
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    my: 0.5,
                    mr: 0.5,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExperianceCard;
