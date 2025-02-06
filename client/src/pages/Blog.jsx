import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
import BlogComponent from "../components/BlogComponent";
const Blog = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Blog || Lariv - React Portfolio Template</title>
            <meta
              name="description"
              content="Lariv - React Portfolio Template"
            />
          </Helmet>
          <BlogComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Blog;
