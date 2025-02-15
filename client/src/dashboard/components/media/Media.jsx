import { FaRegTrashCan } from "react-icons/fa6";
import fileStore from "../../../store/fileStore";
import { useEffect } from "react";

const Media = () => {
  let { getAllFileRequest, allFile, total } = fileStore();

  useEffect(() => {
    (async () => {
      await getAllFileRequest(10, 1);
    })();
  }, [getAllFileRequest]);

  console.log(allFile[0]?.fileName);
  console.log(total);

  return (
    <div>
      <>
        {/* component */}
        <div className='  p-4'>
          <div className='grid grid-cols-12  gap-4'>
            {allFile.map((item, index) => (
              <div className='col-span-2' key={index}>
                <div className='relative'>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src={`/api/v1/get-single-file/${item?.fileName}`}
                    alt=''
                  />

                  <button className='absolute right-[10px] bottom-[10px] text-red-500 text-[24px] z-10 p-2'>
                    <FaRegTrashCan />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-row gap-2'>
            <div className='animate-pulse bg-gray-300 w-14 h-14 rounded-lg' />
            <div className='flex flex-col gap-2'>
              <div className='animate-pulse bg-gray-300 w-28 h-5 rounded-lg' />
              <div className='animate-pulse bg-gray-300 w-36 h-3 rounded-lg' />
              <div className='animate-pulse bg-gray-300 w-36 h-2 rounded-lg' />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Media;
