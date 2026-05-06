import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import GitHubContributions from "./Components/GitHubContributions";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Nawang Gurung",
  title: "Software Developer",
  email: "nawang4mail@gmail.com",
  gitHub: "nawang4mail",
  instagram: "",
  linkedIn: "",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#0f172a";
const secondaryColor = "#e0e7ff";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <GitHubContributions username={siteProps.gitHub} />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
