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

// TODO
// adjust about to NOT say angular is my favorite thing
// TODO: Cleanup about, add tech stack section between photos

// Avatar
// Colors
// Fonts  roboto for body, need a heading font
// work on navigation, color, hide hamburger, make it mobile friendly
// Detail headings
// Add social media icons for linkedIn, Email, and Github
// Add resume download in word format
// Add the rest of my positions
// collapse or partially collapse roles
// look for sloppy styling or markup
// find a way to add team lead responsibilities
// find way to reference Solterra Workshop
// adjust some of my responsibilitied to include other stuff besides mentoring
// possibly add role filtering

// reference Security Clearance: DoD Secret (NACLC)- September 2009
// discuss responsive design
// discuss refactoring

// quotes:
// The trick isnt adding stuff, it is taking it away.
// - Mark Zuckerberg, Facebook -

//Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
// - Martin Fowler -

// Teaching peers is one of the best ways to develop mastery.
// - Jeff Atwood, Stackoverflow -
