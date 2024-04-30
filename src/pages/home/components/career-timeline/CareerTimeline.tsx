import React from "react";

import { Timeline, timelineOppositeContentClasses } from "@mui/lab";
import { CareerTimelineItem } from "./components/CareerTimelineItem";
import { IRoleModel } from "./careerTimelineHelpers";
import { SectionGroup } from "src/components";
import { roles } from "src/assets/data";

export const CareerTimeline = () => {
  const careerRoles: IRoleModel[] = roles;

  return (
    <SectionGroup heading="Work Experience">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {React.Children.toArray(
          careerRoles.map((r: IRoleModel) => <CareerTimelineItem role={r} />)
        )}
      </Timeline>
    </SectionGroup>
  );
};
