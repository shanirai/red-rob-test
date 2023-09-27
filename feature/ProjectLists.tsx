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
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function ProjectsLists() {
  return (
    <Box>
      <Grid container>
        <Grid item sm={8}>
          <Box pt={1} pb={2} display={"flex"}>
            <Avatar
              alt="United Health group"
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
                  United Health group
                </Typography>
                <Stack direction={"row"}>
                  <Typography
                    variant="subtitle1"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Technology used :{" "}
                    <Chip
                      label="React JS "
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.main",
                        mr: 0.5,
                        px: 2,
                        py: 2,
                        fontSize: 14,
                        fontWeight: 500,
                        ml: 1,
                      }}
                    />
                    <Chip
                      label="Azure "
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
                      label="Java "
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
                      label="Redux  "
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
                      label="Rest APi  "
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
                  </Typography>
                </Stack>
                <Box>
                  <Typography variant="h6" mt={1.5}>
                    Description
                  </Typography>
                  <Box my={0.5}>
                    <Typography variant="body1">
                      UHG is a health care and well-being company with a misson
                      to help people live healthier lives and help make health
                      system works better for everyone.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectsLists;
