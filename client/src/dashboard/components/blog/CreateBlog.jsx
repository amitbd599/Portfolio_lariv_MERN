import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";

const CreateBlog = () => {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Blog
        </h2>
      </div>
      <div className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <form className='p-[20px] flex gap-6'>
          <div className='grid gap-6 mb-6 w-[70%]'>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Title
              </label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              />
            </div>

            <div className='flex gap-4'>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Category
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
              <div className='w-full'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Sort Description
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                />
              </div>
            </div>

            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Long Description
              </label>
              <textarea
                rows={6}
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
              ></textarea>
            </div>

            <div>
              {/* SubmitButton */}
              <SubmitButton text='Create blog' submit={false} />
            </div>
          </div>
          <div className='w-[30%]'>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Feature Image
              </label>
              {/* <div className='w-full'>
                <div className='relative  h-[226px] rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center'>
                  <div className='absolute'>
                    <div className='flex flex-col items-center'>
                      <i className='fa fa-folder-open fa-4x text-blue-700' />
                      <span className='block text-gray-400 font-normal'>
                        Attach you files here
                      </span>
                    </div>
                  </div>
                  <input
                    type='file'
                    className='h-full w-full opacity-0'
                    name=''
                  />
                </div>
              </div> */}

              {/* FileUploadBox */}
              <FileUploadBox />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
