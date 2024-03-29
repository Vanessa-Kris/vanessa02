import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "../App.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <Box className="Landing">
      <Box container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "700",
            paddingTop: { xs: 17, md: 25 },
          }}
        >
          Hi, I'm Vanessa Christopher
        </Typography>
        <Typography variant="h4" align="center">
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Designer",
              1000,
              "Pro foodie",
              1000,
              "Open Source lover",
              1000,
              "Singer",
              1000,
            ]}
            repeat={Infinity}
            speed={10}
            deletionSpeed={10}
          />
        </Typography>
      </Box>
      <a href="/about">
        <Box sx={{ p: 15 }}>
          About Me <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </a>
    </Box>
  );
}
