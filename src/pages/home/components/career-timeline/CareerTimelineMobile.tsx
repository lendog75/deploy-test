import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { IRoleModel } from "./careerTimelineHelpers";
import { SectionGroup } from "src/components";
import { roles } from "src/assets/data";
import { DutiesList } from "./components/DutiesList";

const CareerItemMobile = (props: any) => {
  const { begin, end, title, orgName, location, notes, duties } = props?.role;

  return (
    <Box sx={{ my: 2, mx: 1 }}>
      <Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5" component="p">
          {orgName}
        </Typography>

        <Box>
          {begin} - {end}
        </Box>
        <Box>{location}</Box>
        <Box sx={{ pt: 2 }}>
          {notes}
          <Typography variant="h6">Details:</Typography>
          <DutiesList duties={duties || []} />
        </Box>
      </Box>
    </Box>
  );
};

export const CareerTimelineMobile = () => {
  const careerRoles: IRoleModel[] = roles;

  return (
    <SectionGroup heading="Experience">
      <Stack>
        {React.Children.toArray(
          careerRoles.map((r: any) => <CareerItemMobile role={r} />)
        )}
      </Stack>
    </SectionGroup>
  );
};
