import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import experienceStore from "../../../store/experienceStore";
import SubmitButton from "../../../common/SubmitButton";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditExperience = () => {
  let {
    singleExperienceRequest,
    singleExperience,
    updateExperienceRequest,
    isFormSubmit,
  } = experienceStore();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await singleExperienceRequest(params.id);
    })();
  }, [params.id, singleExperienceRequest]);

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Edit Experience
        </h2>
      </div>
      <Formik
        initialValues={{
          title: singleExperience?.title,
          subTitle: singleExperience?.subTitle,
          description: singleExperience?.description,
          time: singleExperience?.time,
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().min(6, "Too short").required("Required"),
          subTitle: Yup.string().min(6, "Too short").required("Required"),
          description: Yup.string().min(6, "Too short").required("Required"),
          time: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await updateExperienceRequest(params.id, values);
          setSubmitting(false);
          navigate("/all-expenses");
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
                    Sub Title
                  </label>
                  <Field
                    type='text'
                    name='subTitle'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='subTitle'
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
                text='Update profile'
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

export default EditExperience;
