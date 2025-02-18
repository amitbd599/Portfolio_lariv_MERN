import { useEffect, useRef } from "react";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { DeleteAlert } from "../../../helper/helper";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import advantagesStore from "../../../store/advantagesStore";
import LoadingBar from "react-top-loading-bar";

const AllAdvantages = () => {
  const loadingBarRef = useRef(null);
  let { allAdvantages, getAllAdvantagesRequest, deleteAdvantagesRequest } =
    advantagesStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllAdvantagesRequest();
      loadingBarRef.current.complete();
    })();
  }, [getAllAdvantagesRequest]);

  //! delete file
  let deleteAdvantages = async (id) => {
    DeleteAlert(deleteAdvantagesRequest, id).then(async (res) => {
      if (res) {
        await getAllAdvantagesRequest();
      }
    });
  };
  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Advantages
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Subject
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Position
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Percent
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Time
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
            {allAdvantages === null ? (
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
                {allAdvantages.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>{item?.subject}</td>
                    <td className='px-6 py-4'>{item?.position}</td>
                    <td className='px-6 py-4'>{item?.percent}</td>
                    <td className='px-6 py-4'>{item?.time}</td>

                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-2'>
                        <button
                          className='p-1'
                          onClick={() => deleteAdvantages(item?._id)}
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

export default AllAdvantages;
