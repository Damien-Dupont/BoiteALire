import React from "react";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div className="container p-5">
      <h1 className="display-2 text-light">About</h1>
    </div>
  );
};

export default AboutPage;
