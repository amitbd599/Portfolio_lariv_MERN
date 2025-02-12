import SubmitButton from "../../helper/SubmitButton";

const CreateAdvantages = () => {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Advantages
        </h2>
      </div>
      <div className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <form className='p-[20px]'>
          <div className='grid gap-6 mb-6 md:grid-cols-2'>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Subject
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Position
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Percent
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Time
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              />
            </div>
          </div>

          {/* SubmitButton */}
          <SubmitButton text='Create advantages' submit={false} />
        </form>
      </div>
    </div>
  );
};

export default CreateAdvantages;
