import "./App.css";
import { Hero } from "./components/hero/Hero";
import { Home } from "./pages";
import Image2 from "src/assets/images/2.jpg";
export const App = () => {
  return (
    <>
      <Hero />
      <Home />
      <img src={Image2} style={{ width: "100%" }} alt="test" />
    </>
  );
};

export default App;
