import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import LoadingBar from "react-top-loading-bar";
import { DeleteAlert } from "../../../helper/helper";
import { useEffect, useRef } from "react";
import educationStore from "../../../store/educationStore";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const AllEducation = () => {
  const loadingBarRef = useRef(null);
  let { allEducation, getAllEducationRequest, deleteEducationRequest } =
    educationStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllEducationRequest();
      loadingBarRef.current.complete();
    })();
  }, [getAllEducationRequest]);

  //! delete file
  let deleteEducation = async (id) => {
    console.log(id);

    DeleteAlert(deleteEducationRequest, id).then(async (res) => {
      if (res) {
        await getAllEducationRequest();
      }
    });
  };

  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Education
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
                Institution
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
            {allEducation === null ? (
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
                {allEducation.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>{item?.title}</td>
                    <td className='px-6 py-4'>{item?.institution}</td>
                    <td className='px-6 py-4'>{item?.time}</td>

                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-2'>
                        <button
                          className='p-1'
                          onClick={() => deleteEducation(item?._id)}
                        >
                          <FaRegTrashCan className='text-[18px]' />
                        </button>
                        <Link
                          to={`/edit-education/${item?._id}`}
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

export default AllEducation;
