import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SubmitButton from "../../../common/SubmitButton";
import educationStore from "../../../store/educationStore";
import { useNavigate } from "react-router-dom";

const CreateEducation = () => {
  let { createEducationRequest, isFormSubmit } = educationStore();
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Education
        </h2>
      </div>

      <Formik
        initialValues={{
          title: "",
          description: "",
          institution: "",
          time: "",
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().min(6, "Too short").required("Required"),
          institution: Yup.string().min(6, "Too short").required("Required"),
          description: Yup.string().min(6, "Too short").required("Required"),
          time: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await createEducationRequest(values);
          setSubmitting(false);
          navigate("/all-education");
        }}
      >
        {({ isSubmitting }) => (
          <Form className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
            <div className='p-[20px]'>
              <div className='grid gap-6 mb-6 md:grid-cols-2'>
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
                    Institution
                  </label>
                  <Field
                    type='text'
                    name='description'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Description
                  </label>
                  <Field
                    type='text'
                    name='institution'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='institution'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Time
                  </label>
                  <Field
                    type='text'
                    name='time'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='time'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
              </div>

              {/* SubmitButton */}
              <SubmitButton
                text='Create Education'
                type='submit'
                disabled={isSubmitting}
                isFormSubmit={isFormSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEducation;
