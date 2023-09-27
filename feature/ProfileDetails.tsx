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

function ProfileDetailsCard() {
  return (
    <Box>
      <Grid container>
        <Grid item sm={8}>
          <Box pt={1} pb={2} display={"flex"}>
            <Avatar
              alt="Crystal Kumar"
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
                  Crystal Jones
                </Typography>
                <Stack direction={"row"}>
                  <Typography
                    variant="subtitle1"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <EmailIcon sx={{ color: "grey.600", mr: 1 }} />
                    <a
                      href="mailto: crystal.jones@yahoo.com"
                      style={{ textDecoration: "none", fontSize: 14 }}
                    >
                      crystal.jones@yahoo.com
                    </a>
                  </Typography>
                  <Typography variant="subtitle1" display={"flex"} ml={2}>
                    <LocalPhoneIcon sx={{ color: "grey.600", mr: 1 }} />
                    <a
                      href="phone: 8005903527"
                      style={{ textDecoration: "none", fontSize: 14 }}
                    >
                      8005903527
                    </a>
                  </Typography>
                </Stack>
                <Box>
                  <Typography variant="h6" mt={1.5}>
                    Hobbies
                  </Typography>
                  <Box my={1.5}>
                    <Chip
                      label="Reading"
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
                      label="Dancing"
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
                      label="Painting"
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
                  <Typography variant="h6">Achievement Lists</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileDetailsCard;
