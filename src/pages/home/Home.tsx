import { Container, Grid } from "@mui/material";

import { About } from "./components/About";
import { Education } from "./components/Education";
import { CareerTimeline } from "./components/career-timeline/CareerTimeline";

// adjust about to NOT say angular is my favorite thing
// TODO: Cleanup about, add tech stack section between photos

// Avatar
// Colors
// Fonts  roboto for body, need a heading font
// work on navigation, color, hide hamburger, make it mobile friendly
// Detail headings
// Add social media icons for linkedIn, Email, and Github
// Add resume download in word format
// Add the rest of my positions
// collapse or partially collapse roles
// look for sloppy styling or markup
// find a way to add team lead responsibilities
// find way to reference Solterra Workshop
// adjust some of my responsibilitied to include other stuff besides mentoring
// possibly add role filtering

// reference Security Clearance: DoD Secret (NACLC)- September 2009
// discuss responsive design
// discuss refactoring

// quotes:
// The trick isnt adding stuff, it is taking it away.
// - Mark Zuckerberg, Facebook -

//Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
// - Martin Fowler -

// Teaching peers is one of the best ways to develop mastery.
// - Jeff Atwood, Stackoverflow -

export const Home = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 6 } }}>
        <About />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CareerTimeline />
          </Grid>
          {/* <Grid item xs={0} md={4}>
            <Stack
              sx={{
                display: "flex",
                flexGrow: 1,
                height: "100%",
                justifyContent: "space-between",
                border: "1px solid red",
              }}
            >
              <img src={Image3} style={{ width: "100%" }} />
              <Box>FAvorite Tech</Box>
              <img src={Image4} style={{ width: "100%" }} />
            </Stack>
          </Grid> */}
        </Grid>

        <Education />
      </Container>
    </>
  );
};
