import { Grid } from "@mui/material";
import "./App.css";

import { Home } from "./pages";

import Image2 from "src/assets/images/2.jpg";
import HeroImage from "src/assets/images/1.jpg";
import { About } from "./pages/home/components/About";
import Header from "./components/header/Header";
export const App = () => {
  return (
    <div style={{ padding: "0 32px" }}>
      <Header />
      <main style={{ display: "flex", flexDirection: "column" }}>
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
        </Grid>

        <Home />

        <footer>
          <img src={Image2} style={{ width: "100%" }} alt="test" />
        </footer>
      </main>
    </div>
  );
};

export default App;
