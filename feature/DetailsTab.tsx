"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExperianceCard from "./ExperianceCard";
import EducationalDetails from "./EducationalDetails";
import ProfileDetailsCard from "./ProfileDetails";
import ProjectsLists from "./ProjectLists";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mt={2.5}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingX: 2.5 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Work & Experience"
            {...a11yProps(0)}
            sx={{ color: "text.primary", fontSize: 16 }}
          />
          <Tab
            label="Educational Details"
            {...a11yProps(1)}
            sx={{ color: "text.primary", fontSize: 16 }}
          />
          <Tab
            label="Profile Details "
            {...a11yProps(2)}
            sx={{ color: "text.primary", fontSize: 16 }}
          />
          <Tab
            label="Project Lists "
            {...a11yProps(3)}
            sx={{ color: "text.primary", fontSize: 16 }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ExperianceCard
          company="Spotify Inc ."
          designation={"Product Designer"}
        />
        <ExperianceCard
          company="Netflix ."
          designation={"Sr . Software Engineer "}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EducationalDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProfileDetailsCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ProjectsLists />
      </CustomTabPanel>
    </Box>
  );
}
