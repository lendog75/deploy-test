import { Typography } from "@mui/material";
import React from "react";
import { favQuotes } from "src/assets/data/quotes";

interface IQuoteModel {
  text: string;
  author?: string;
}
export const Quotes = () => {
  const quoteslist: IQuoteModel[] = favQuotes;

  return (
    <>
      <Typography variant="h6" sx={{ ml: 0 }}>
        Favorite Quotes
      </Typography>
      <ul>
        {React.Children.toArray(
          quoteslist?.map((i: IQuoteModel) => (
            <li style={{ marginBottom: "16px" }}>
              <Typography variant="body1" sx={{ ml: 0 }}>
                {i.text}
              </Typography>
              - {i.author}
            </li>
          ))
        )}
      </ul>
    </>
  );
};
