import React from "react";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="container p-5">
      <h1 className="display-2 text-light">Home</h1>
    </div>
  );
};

export default HomePage;
