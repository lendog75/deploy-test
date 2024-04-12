import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box, Grid } from "@mui/material";
import { DutiesList } from "./DutiesList";
import { IRoleModel, styles } from "../careerTimelineHelpers";

interface ICareerTimelineItemModel {
  role: IRoleModel;
}

export const CareerTimelineItem = (props: ICareerTimelineItemModel) => {
  const { begin, end, title, orgName, location, notes, duties } = props?.role;
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        <Box>
          {begin} - {end}
        </Box>
        <Box>{location}</Box>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box sx={styles.timelineContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography gutterBottom variant="h6">
                {orgName}
              </Typography>
              {/* <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                > */}

              {notes}
              <Typography variant="h6">Details:</Typography>
              {/* </AccordionSummary>
                <AccordionDetails> */}
              <DutiesList duties={duties || []} />
              {/* </AccordionDetails>
              </Accordion> */}
            </Grid>
          </Grid>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};
