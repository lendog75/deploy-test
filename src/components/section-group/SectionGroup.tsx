import { Box, Typography } from "@mui/material";

import { styles, SectionGroupModel } from "./sectionGroupHelpers";

export const SectionGroup = (props: SectionGroupModel) => {
  const { heading, text } = props;
  return (
    <section style={styles.section}>
      <Typography variant="h4" sx={styles.heading}>
        {heading}
      </Typography>

      <Typography variant="body1" sx={styles.body}>
        {text}
      </Typography>

      <Box sx={styles.content}>{props?.children}</Box>
    </section>
  );
};
