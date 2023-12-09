import React from "react";
import HomeFirstPage from "../pages/home/HomeFirstPage";
import HomeSecondPage from "../pages/home/HomeSecondPage";
import HomeThirdPage from "../pages/home/HomeThirdPage";
import HomeFourthPage from "../pages/home/HomeFourthPage";

export default function Home(props) {
  return (
    <main className="home-container min-w-screen ">
      <HomeFirstPage />
      <HomeSecondPage />
      <HomeThirdPage projects = {props.projects}/>
      <HomeFourthPage reviews = {props.reviews}/>
    </main>
  );
}
