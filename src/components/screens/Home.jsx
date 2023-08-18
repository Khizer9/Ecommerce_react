import React from "react";
import TopNav from "../UI/TopNav";
import Stats from "../UI/Stats";
import Footer from "../UI/Footer";
import Team from "../UI/Team";
import Button from "../UI/Button";
import TestimonialAdvance from "../UI/TestimonialAdvance";
import MainSlider from "../UI/MainSlider";
import TestimonialManual from "../UI/TestimonialManual";

const Home = () => {
  return (
    <>
      <TopNav />;
      <MainSlider />
      <Stats />
      <TestimonialManual />
      <TestimonialAdvance />
      <Team />
      <Button
        btnText={"About"}
        linkAddress={"/about-us"}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      />
      <Footer />
    </>
  );
};

export default Home;
