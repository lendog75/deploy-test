import { Box, Typography } from "@mui/material";
import { SectionGroup } from "src/components";

export const About = () => {
  return (
    <SectionGroup
      heading="About"
      text="Family man, outdoorsman, and software developer who loves to work with
      React. Responsive Design and RESTFul
      API’s are also personal favorites. In everything I do I am a “maker”.
      Whether it is building a web application or building a table, it’s just
      what I do!"
    >
      <Box
        sx={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <>
          <Typography variant="h6" sx={{ ml: 0 }}>
            Latest Tech Interests
          </Typography>
          <Typography variant="body1" sx={{ ml: 0, mb: 2 }}>
            React, Next.JS, React Native, Typescript
          </Typography>
        </>
      </Box>
    </SectionGroup>
  );
};
