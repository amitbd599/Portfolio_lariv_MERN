import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
import PortfolioComponent from "../components/PortfolioComponent";

const Portfolio = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Portfolio || Lariv - React Portfolio Template</title>
            <meta
              name="description"
              content="Lariv - React Portfolio Template"
            />
          </Helmet>
          <PortfolioComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Portfolio;
