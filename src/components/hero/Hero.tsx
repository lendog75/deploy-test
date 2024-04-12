import HeroImage from "src/assets/images/1.jpg";

export const Hero = () => {
  return (
    <img
      src={HeroImage}
      style={{ width: "100%", touchAction: "none" }}
      alt="testing"
    />
  );
};
