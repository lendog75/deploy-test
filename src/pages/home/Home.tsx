import { Box, Grid } from "@mui/material";

import { Education } from "./components/Education";
import { CareerTimeline } from "./components/career-timeline/CareerTimeline";
import { CareerTimelineMobile } from "./components/career-timeline/CareerTimelineMobile";

export const Home = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
          <CareerTimelineMobile />
        </Grid>

        <Grid item xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
          <CareerTimeline />
        </Grid>
      </Grid>

      <Education />
    </Box>
  );
};
