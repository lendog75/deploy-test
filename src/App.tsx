import { Grid } from "@mui/material";
import "./App.css";

import { Home } from "./pages";

import Image2 from "src/assets/images/2.jpg";
import HeroImage from "src/assets/images/1.jpg";
import { About } from "./pages/home/components/About";
import Header from "./components/header/Header";
import { Quotes } from "./pages/home/components/Quotes";
import { OtherInterests } from "./pages/home/components/OtherInterests";

export const App = () => {
  return (
    <>
      <Header />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 32px",
        }}
      >
        <Grid container spacing={2} style={{ paddingTop: "32px" }}>
          <Grid item sm={12} md={6}>
            <About />
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src={HeroImage}
              style={{ width: "100%", touchAction: "none" }}
              alt="main hero"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <Quotes />
          </Grid>
          <Grid item sm={12} md={6}>
            <OtherInterests />
          </Grid>
        </Grid>

        <Home />

        <footer>
          <img src={Image2} style={{ width: "100%" }} alt="test" />
        </footer>
      </main>
    </>
  );
};

export default App;
