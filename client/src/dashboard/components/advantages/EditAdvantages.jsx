import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SubmitButton from "../../../common/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import advantagesStore from "../../../store/advantagesStore";

const EditAdvantages = () => {
  let {
    singleAdvantagesRequest,
    singleAdvantages,
    updateAdvantagesRequest,
    isFormSubmit,
  } = advantagesStore();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await singleAdvantagesRequest(params.id);
    })();
  }, [params.id, singleAdvantagesRequest]);
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Edit Advantages
        </h2>
      </div>

      <Formik
        initialValues={{
          subject: singleAdvantages?.subject,
          position: singleAdvantages?.position,
          percent: singleAdvantages?.percent,
          time: singleAdvantages?.time,
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          subject: Yup.string().min(6, "Too short").required("Required"),
          position: Yup.string().min(6, "Too short").required("Required"),
          percent: Yup.string()
            .min(1, "Too short")
            .max(2, "Too long")
            .required("Required"),
          time: Yup.string().min(6, "Too short").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await updateAdvantagesRequest(params.id, values);
          setSubmitting(false);
          navigate("/all-advantages");
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
                    name='subject'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='subject'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Position
                  </label>
                  <Field
                    type='text'
                    name='position'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='position'
                    component='div'
                    className='error text-red-400'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Percent
                  </label>
                  <Field
                    type='text'
                    name='percent'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='percent'
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
                text='Update Advantages'
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

export default EditAdvantages;
