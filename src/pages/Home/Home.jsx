import AppDownload from "../../components/appDownload/AppDownload";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import Header from "../../components/header/Header";
import "./home.css";
import React, { useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState("all");
  return (
    <>
      <Header />
      <ExploreMenu categories={categories} setCategories={setCategories} />
      <FoodDisplay categories={categories} />
      <AppDownload/>
    </>
  );
};

export default Home;
