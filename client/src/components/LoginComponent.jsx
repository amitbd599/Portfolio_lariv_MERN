import { useNavigate } from "react-router";
import SubmitButton from "../common/SubmitButton";
import formStore from "../store/formStore";
import userStore from "../store/userStore";
import { useEffect } from "react";

const LoginComponent = () => {
  const navigate = useNavigate();
  let { formOnChange, formData } = formStore();
  let { loginRequest, isFormSubmit, isLogin } = userStore();

  useEffect(() => {
    if (isLogin()) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await loginRequest(formData);
    if (result) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* component */}
      <div className='flex items-center justify-center h-screen'>
        {/* Login Container */}
        <form
          onSubmit={handleSubmit}
          className='min-w-[400px] flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] '
        >
          <div className='mb-8 flex justify-center'>
            <img className='w-24' src='/assets/images/logo.svg' alt='' />
          </div>
          <div className='flex flex-col text-sm rounded-md'>
            <input
              onChange={(e) => {
                formOnChange("email", e.target.value);
              }}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 '
              type='email'
              placeholder='Email id'
              required
            />
            <br />
            <input
              onChange={(e) => {
                formOnChange("password", e.target.value);
              }}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              type='password'
              placeholder='Password'
              required
            />
          </div>
          <br />
          <div className='flex justify-center'>
            <SubmitButton
              text='Sign in'
              type='submit'
              isFormSubmit={isFormSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
