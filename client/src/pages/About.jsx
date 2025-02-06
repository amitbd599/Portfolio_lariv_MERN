import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
import AboutComponent from "../components/AboutComponent";

const About = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>About || Lariv - React Portfolio Template</title>
            <meta
              name="description"
              content="Lariv - React Portfolio Template"
            />
          </Helmet>
          <AboutComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default About;
