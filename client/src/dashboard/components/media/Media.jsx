import { FaRegTrashCan } from "react-icons/fa6";

const Media = () => {
  return (
    <div>
      <>
        {/* component */}
        <div className='  p-4'>
          <div className='grid grid-cols-12  gap-4'>
            <div className='col-span-2'>
              <div className='relative'>
                <img
                  className='h-auto max-w-full rounded-lg'
                  src='https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large'
                  alt=''
                />

                <button className='absolute right-[10px] bottom-[10px] text-red-500 text-[24px] z-10 p-2'>
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Media;
