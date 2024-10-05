import React from "react";

import Home from "@/components/home-15";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-15 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const HomePage15 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Home />
    </>
  );
};

export default HomePage15;
