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
        <>
          <Typography variant="h6" sx={{ ml: 0 }}>
            Favorite Quotes
          </Typography>
          <ul>
            <li style={{ marginBottom: "16px" }}>
              <Typography variant="body1" sx={{ ml: 0 }}>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </Typography>
              <em>- Martin Fowler</em>
            </li>
            <li style={{ marginBottom: "16px" }}>
              <Typography variant="body1" sx={{ ml: 0 }}>
                Teaching peers is one of the best ways to develop mastery.
              </Typography>
              <em>- Jeff Atwood, Stackoverflow</em>
            </li>
            <li style={{ marginBottom: "16px" }}>
              <Typography variant="body1" sx={{ ml: 0 }}>
                The trick isnt adding stuff, it is taking it away.
              </Typography>
              <em>- Mark Zuckerberg, Facebook</em>
            </li>
          </ul>
        </>

        <>
          <Typography variant="h6" sx={{ ml: 0 }}>
            Non Tech Interests
          </Typography>
          <Typography variant="body1" sx={{ ml: 0, mb: 2 }}>
            Corvettes, Woodworking, Watching Football, and Hiking
          </Typography>
        </>
      </Box>
    </SectionGroup>
  );
};
