import { useNavigate } from "react-router";

import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import formStore from "../../../store/formStore";
import userStore from "../../../store/userStore";
import { useEffect, useState } from "react";
import fileStore from "../../../store/fileStore";
import { ErrorToast } from "../../../helper/helper";

const EditProfile = () => {
  let [data, setData] = useState([]);
  let { formOnChange, formData } = formStore();
  let { fileUploadRequest } = fileStore();
  let { userUpdateRequest, userReadRequest, isFormSubmit } = userStore();

  useEffect(() => {
    (async () => {
      let result = await userReadRequest();
      setData(result);
      formOnChange("email", result.email);
      formOnChange("password", "");
      formOnChange("firstName", result.firstName);
      formOnChange("lastName", result.lastName);
      formOnChange("img", result.img || null);
      // console.log(result);
    })();
  }, [formOnChange, userReadRequest]);

  const handleSubmit = async (event) => {
    console.log(!!formData.fileName);
    console.log(!!formData.img);

    event.preventDefault();
    if (!!formData.fileName === true) {
      const fileFormData = new FormData();
      fileFormData.append("file", formData.fileName);
      let fileName = await fileUploadRequest(fileFormData);
      await formOnChange("img", fileName);
      console.log(fileName);
      console.log(formData);
      await userUpdateRequest(formData);
      return;
    } else if (!!formData.img === true) {
      await userUpdateRequest(formData);
      return;
    } else {
      ErrorToast("Please select a file");
      return;
    }
  };

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Edit Profile
        </h2>
      </div>
      <div className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <form onSubmit={handleSubmit} className='p-[20px] flex gap-6'>
          <div className='grid gap-6 mb-6 w-[70%]'>
            <div className='flex gap-6'>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Email
                </label>
                <input
                  defaultValue={data?.email}
                  onChange={(e) => {
                    formOnChange("email", e.target.value);
                  }}
                  type='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  First Name
                </label>
                <input
                  defaultValue={data?.firstName}
                  onChange={(e) => {
                    formOnChange("firstName", e.target.value);
                  }}
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Last Name
                </label>
                <input
                  defaultValue={data?.lastName}
                  onChange={(e) => {
                    formOnChange("lastName", e.target.value);
                  }}
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <input
                  onChange={(e) => {
                    formOnChange("password", e.target.value);
                  }}
                  type='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
            </div>

            <div>
              {/* SubmitButton */}

              <SubmitButton
                text='Update profile'
                type='submit'
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
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
