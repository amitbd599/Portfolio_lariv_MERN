import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import fileStore from "../../../store/fileStore";
import serviceStore from "../../../store/serviceStore";

const CreateService = () => {
  let { createServiceRequest, isFormSubmit } = serviceStore();
  let { fileUploadRequest, rowFile } = fileStore();
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Service
        </h2>
      </div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().min(6, "Too short").required("Required"),
          description: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          if (rowFile !== null) {
            let filePath = await fileUploadRequest(rowFile);
            let result = await createServiceRequest({
              ...values,
              img: filePath,
            });

            if (result) {
              setSubmitting(false);
              navigate("/all-service");
            }
          } else {
            await createServiceRequest(values);
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
                    Description
                  </label>
                  <Field
                    as='textarea'
                    name='description'
                    rows={6}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  ></Field>
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='error text-red-400'
                  />
                </div>

                <div>
                  {/* SubmitButton */}
                  <SubmitButton
                    text='Create Service'
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

export default CreateService;
