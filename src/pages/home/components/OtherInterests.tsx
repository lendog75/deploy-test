import { Typography } from "@mui/material";
import React from "react";

import { otherInterests } from "src/assets/data/otherInterests";

interface IInterestModel {
  text: string;
}

export const OtherInterests = () => {
  const interests: IInterestModel[] = otherInterests;
  return (
    <>
      <Typography variant="h6" sx={{ ml: 0 }}>
        Other Interests
      </Typography>
      <Typography variant="body1" sx={{ ml: 0, mb: 2 }}>
        <ul>
          {React.Children.toArray(
            interests.map((i: IInterestModel) => <li>{i.text}</li>)
          )}
        </ul>
      </Typography>
    </>
  );
};
