import { Box } from "@mui/material";
import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Home } from "./pages";
import Image2 from "src/assets/images/2.jpg";
export const App = () => {
  return (
    <Box className="App" sx={{ width: "100%" }}>
      <Header />
      <Hero />
      <Home />
      test
      <img src={Image2} style={{ width: "100%" }} alt="test" />;
    </Box>
  );
};

export default App;
