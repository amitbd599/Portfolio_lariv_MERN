import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const SubmitButton = ({ text, isFormSubmit }) => {
  if (isFormSubmit) {
    return (
      <button disabled className='btn flex gap-2 cursor-wait'>
        <Spinner className='h-6 w-6' />
        Processing
      </button>
    );
  } else {
    return <button className='btn'>{text}</button>;
  }
};

export default SubmitButton;
