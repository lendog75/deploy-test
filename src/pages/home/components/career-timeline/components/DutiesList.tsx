import { Box, Typography } from "@mui/material";
import React from "react";

export const DutiesList = (props: { duties: string[] | [] }) => {
  const { duties } = props;
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Box>
        <ul>
          {React.Children.toArray(
            duties?.map((d: string) => {
              if (Array.isArray(d)) {
                const a = d as Array<string>;
                return (
                  <ul>
                    {React.Children.toArray(
                      a?.map((z: string) => <li>{z}</li>)
                    )}
                  </ul>
                );
              } else {
                return <li>{d.toString()}</li>;
              }
            })
          )}
        </ul>
      </Box>
    </Box>
  );
};
