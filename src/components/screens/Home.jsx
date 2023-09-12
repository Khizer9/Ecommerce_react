import React, { useState } from "react";
import TopNav from "../UI/TopNav";
import Stats from "../UI/Stats";
import Footer from "../UI/Footer";
import Team from "../UI/Team";
import Button from "../UI/Button";
import TestimonialAdvance from "../UI/TestimonialAdvance";
import MainSlider from "../UI/MainSlider";
import TestimonialManual from "../UI/TestimonialManual";
import FeatureCollection from "../UI/FeatureCollection";
import ProductCollections from "../UI/ProductCollections";
import FeatureSection from "../UI/FeatureSection";
import SearchInput from "../UI/SearchInput";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
      <TopNav />;
      <MainSlider />
      <Stats />
      <FeatureCollection />
      <FeatureSection />
      <SearchInput onSearch={handleSearch} style={{width: '50%', margin: 'auto'}}/>
      <ProductCollections searchQuery={searchQuery}/>
      <TestimonialManual />
      <TestimonialAdvance />
      <Team />
      <Button
        btnText={"Products"}
        linkAddress={"/products"}
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
