import { Link } from "react-router-dom";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import experienceStore from "../../../store/experienceStore";
import { useEffect, useRef } from "react";
import { DeleteAlert } from "../../../helper/helper";
import LoadingBar from "react-top-loading-bar";
import Skeleton from "react-loading-skeleton";
const AllExperience = () => {
  const loadingBarRef = useRef(null);
  let { allExperience, getAllExperienceRequest, deleteExperienceRequest } =
    experienceStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllExperienceRequest();
      loadingBarRef.current.complete();
    })();
  }, [getAllExperienceRequest]);

  //! delete file
  let deleteExperience = async (id) => {
    console.log(id);

    DeleteAlert(deleteExperienceRequest, id).then(async (res) => {
      if (res) {
        await getAllExperienceRequest();
      }
    });
  };

  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Experience
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Title
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Sub Title
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Date
              </th>

              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 flex justify-end'
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            {allExperience === null ? (
              <>
                {[...Array(6)].map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>
                      <Skeleton count={1} />
                    </td>
                    <td className='px-6 py-4'>
                      <Skeleton count={1} />
                    </td>
                    <td className='px-6 py-4'>
                      <Skeleton count={1} />
                    </td>
                    <td className='px-6 py-4'>
                      <Skeleton count={1} />
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {allExperience.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>{item?.title}</td>
                    <td className='px-6 py-4'>{item?.subTitle}</td>
                    <td className='px-6 py-4'>{item?.time}</td>

                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-2'>
                        <button
                          className='p-1'
                          onClick={() => deleteExperience(item?._id)}
                        >
                          <FaRegTrashCan className='text-[18px]' />
                        </button>
                        <Link
                          to={`/edit-experience/${item?._id}`}
                          className='p-1'
                        >
                          <FaPenToSquare className='text-[18px]' />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllExperience;
