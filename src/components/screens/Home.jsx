import React from "react";
import TopNav from "../UI/TopNav";
import Hero from "../UI/Hero";
import Stats from "../UI/Stats";
import Footer from "../UI/Footer";
import Team from "../UI/Team";
import Button from "../UI/Button";

const Home = () => {
  return (
    <>
      <TopNav />;
      <Hero />
      <Stats />
      <Team />
      <Button
        className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
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
