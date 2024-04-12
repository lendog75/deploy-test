import { Box, Typography } from "@mui/material";

import { styles, SectionGroupModel } from "./sectionGroupHelpers";

export const SectionGroup = (props: SectionGroupModel) => {
  const { heading, text } = props;
  return (
    <Box sx={styles.section}>
      <Typography variant="h4" sx={styles.heading}>
        {heading}
      </Typography>

      <Typography variant="body1" sx={styles.content}>
        {text}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "start" }}>
        {props?.children}
      </Box>
    </Box>
  );
};
