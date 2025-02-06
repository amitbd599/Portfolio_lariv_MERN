import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
import HomeComponent from "../components/HomeComponent";

const Home = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Home || Lariv - React Portfolio Template</title>
            <meta
              name="description"
              content="Lariv - React Portfolio Template"
            />
          </Helmet>
          <HomeComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Home;
