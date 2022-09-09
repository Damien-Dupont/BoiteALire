import React from "react";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  console.log(props);

  return (
    <div className="container p-5">
      <h1 className="display-2 text-light"></h1>
    </div>
  );
};

export default AboutPage;
