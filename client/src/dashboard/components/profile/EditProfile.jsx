import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import userStore from "../../../store/userStore";
import fileStore from "../../../store/fileStore";

const EditProfile = () => {
  let { userUpdateRequest, userData, userReadRequest, isFormSubmit } =
    userStore();
  let { fileUploadRequest, rowFile } = fileStore();

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Edit Profile
        </h2>
      </div>
      <div className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <Formik
          initialValues={{
            email: userData?.email,
            password: "",
            firstName: userData?.firstName,
            lastName: userData?.lastName,
          }}
          enableReinitialize={true}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().min(6, "Too short").required("Required"),
            firstName: Yup.string().min(6, "Too short").required("Required"),
            lastName: Yup.string().min(6, "Too short").required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (rowFile !== null) {
              let filePath = await fileUploadRequest(rowFile);
              await userUpdateRequest({
                ...values,
                img: filePath,
              });
            } else {
              await userUpdateRequest({
                ...values,
                img: userData?.img,
              });
            }
            await userReadRequest();
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className='form'>
              <div className='p-[20px] flex gap-6'>
                <div className='grid gap-6 mb-6 w-[70%]'>
                  <div className='flex gap-6'>
                    <div className='w-full'>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Email
                      </label>
                      <Field
                        type='email'
                        name='email'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='error text-red-400'
                      />
                    </div>
                    <div className='w-full'>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        First Name
                      </label>
                      <Field
                        type='text'
                        name='firstName'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                      />
                      <ErrorMessage
                        name='firstName'
                        component='div'
                        className='error text-red-400'
                      />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className='w-full'>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Last Name
                      </label>
                      <Field
                        type='text'
                        name='lastName'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                      />
                      <ErrorMessage
                        name='lastName'
                        component='div'
                        className='error text-red-400'
                      />
                    </div>
                    <div className='w-full'>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Password
                      </label>
                      <Field
                        type='password'
                        name='password'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                      />
                      <ErrorMessage
                        name='password'
                        component='div'
                        className='error text-red-400'
                      />
                    </div>
                  </div>

                  <div>
                    {/* SubmitButton */}

                    <SubmitButton
                      text='Update profile'
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
                    <FileUploadBox src={userData?.img} />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
