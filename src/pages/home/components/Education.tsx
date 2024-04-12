import { Box, Typography } from "@mui/material";
import { SectionGroup } from "src/components";

export const Education = () => {
  return (
    <>
      <SectionGroup heading="Education">
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Typography variant="h6" sx={{ ml: 0 }}>
            University of Central Florida
          </Typography>
          <Typography variant="body1" sx={{ ml: 0 }}>
            Bachelors of Science, Management Information Systems
          </Typography>
          <li>Brother in Alpha Kappa Psi Professional Business Fraternity</li>
        </Box>
      </SectionGroup>
      {/* <Box sx={{ border: "1px sold green", width: "100%" }}> */}
      {/* <h4>1University of Central Florida</h4> */}
      {/* </Box> */}
    </>
  );
};
