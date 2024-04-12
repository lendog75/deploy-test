import { Timeline, timelineOppositeContentClasses } from "@mui/lab";

import { CareerTimelineItem } from "./components/CareerTimelineItem";
import { IRoleModel } from "./careerTimelineHelpers";
import { SectionGroup } from "src/components";
import { roles } from "src/assets/data";
import React from "react";

export const CareerTimeline = () => {
  const careerRoles: IRoleModel[] = roles;

  return (
    <SectionGroup heading="Experience">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {React.Children.toArray(
          careerRoles.map((r: any) => <CareerTimelineItem role={r} />)
        )}
      </Timeline>
    </SectionGroup>
  );
};
