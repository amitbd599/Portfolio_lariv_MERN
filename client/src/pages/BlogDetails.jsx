import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
import BlogDetailsComponent from "../components/BlogDetailsComponent";

const BlogDetails = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>BlogDetails || Lariv - React Portfolio Template</title>
            <meta
              name="description"
              content="Lariv - React Portfolio Template"
            />
          </Helmet>
          <BlogDetailsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BlogDetails;
