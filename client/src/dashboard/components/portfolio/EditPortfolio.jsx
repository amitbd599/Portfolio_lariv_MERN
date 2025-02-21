import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import portfolioStore from "../../../store/portfolioStore";
import fileStore from "../../../store/fileStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditPortfolio = () => {
  let {
    updatePortfolioRequest,
    isFormSubmit,
    singlePortfolioRequest,
    singlePortfolio,
  } = portfolioStore();
  let { fileUploadRequest, rowFile } = fileStore();
  let navigate = useNavigate();

  let params = useParams();

  useEffect(() => {
    (async () => {
      await singlePortfolioRequest(params.id);
    })();
  }, [params.id, singlePortfolioRequest]);

  console.log(singlePortfolio);

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Edit Portfolio
        </h2>
      </div>
      <Formik
        initialValues={{
          title: singlePortfolio?.title,
          category: singlePortfolio?.category,
          link: singlePortfolio?.link,
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().min(6, "Too short").required("Required"),
          link: Yup.string().min(6, "Too short").required("Required"),
          category: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          // if (rowFile !== null) {
          //   let filePath = await fileUploadRequest(rowFile);
          //   let result = await createPortfolioRequest({
          //     ...values,
          //     img: filePath,
          //   });

          // if (result) {
          //   setSubmitting(false);
          //   navigate("/all-portfolio");
          // }
          // } else {
          //   await createPortfolioRequest(values);
          // }

          if (rowFile !== null) {
            let filePath = await fileUploadRequest(rowFile);
            let result = await updatePortfolioRequest(params.id, {
              ...values,
              img: filePath,
            });
            if (result) {
              setSubmitting(false);
              navigate("/all-portfolio");
            }
          } else {
            let result = await updatePortfolioRequest(params.id, {
              ...values,
              img: singlePortfolio?.img,
            });
            if (result) {
              setSubmitting(false);
              navigate("/all-portfolio");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
            <div className='p-[20px] flex gap-6'>
              <div className='grid gap-6 mb-6 w-[70%]'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Title
                  </label>
                  <Field
                    type='text'
                    name='title'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='title'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Category
                  </label>
                  <Field
                    type='text'
                    name='category'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='category'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Link
                  </label>
                  <Field
                    type='text'
                    name='link'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='link'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  {/* SubmitButton */}
                  <SubmitButton
                    text='Edit Portfolio'
                    type='submit'
                    disabled={isSubmitting}
                    isFormSubmit={isFormSubmit}
                  />
                </div>
              </div>
              <div className='w-[30%]'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Image
                  </label>

                  {/* FileUploadBox */}
                  <FileUploadBox src={singlePortfolio?.img} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPortfolio;
