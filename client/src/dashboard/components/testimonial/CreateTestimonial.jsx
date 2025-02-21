import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import fileStore from "../../../store/fileStore";
import testimonialStore from "../../../store/testimonialStore";
import { useNavigate } from "react-router-dom";

const CreateTestimonial = () => {
  let { createTestimonialRequest, isFormSubmit } = testimonialStore();
  let { fileUploadRequest, rowFile } = fileStore();
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Testimonial
        </h2>
      </div>
      <Formik
        initialValues={{
          clientName: "",
          address: "",
          reviewText: "",
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          clientName: Yup.string().min(6, "Too short").required("Required"),
          address: Yup.string().min(6, "Too short").required("Required"),
          reviewText: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          if (rowFile !== null) {
            let filePath = await fileUploadRequest(rowFile);
            let result = await createTestimonialRequest({
              ...values,
              img: filePath,
            });

            if (result) {
              setSubmitting(false);
              navigate("/all-testimonial");
            }
          } else {
            await createTestimonialRequest(values);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
            <div className='p-[20px] flex gap-6'>
              <div className='grid gap-6 mb-6 w-[70%]'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Client Name
                  </label>
                  <Field
                    type='text'
                    name='clientName'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='clientName'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Address
                  </label>
                  <Field
                    type='text'
                    name='address'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='address'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Review Text
                  </label>
                  <Field
                    rows={6}
                    type='text'
                    as='textarea'
                    name='reviewText'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='reviewText'
                    component='div'
                    className='error text-red-400'
                  />
                </div>

                <div>
                  {/* SubmitButton */}
                  <SubmitButton
                    text='Create Testimonial'
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
                  <FileUploadBox />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTestimonial;
