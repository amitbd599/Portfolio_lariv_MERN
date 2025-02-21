import { useEffect, useRef } from "react";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { DeleteAlert } from "../../../helper/helper";
import portfolioStore from "../../../store/portfolioStore";
import LoadingBar from "react-top-loading-bar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const AllPortfolio = () => {
  const loadingBarRef = useRef(null);
  let { allPortfolio, getAllPortfolioRequest, deletePortfolioRequest } =
    portfolioStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllPortfolioRequest();
      loadingBarRef.current.complete();
    })();
  }, [getAllPortfolioRequest]);

  //! delete file
  let deleteAdvantages = async (id) => {
    DeleteAlert(deletePortfolioRequest, id).then(async (res) => {
      if (res) {
        await getAllPortfolioRequest();
      }
    });
  };

  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Portfolio
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Image
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Title
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Category
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
            {allPortfolio === null ? (
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
                {allPortfolio.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>
                      <img
                        src={`/api/v1/get-single-file/${item?.img}`}
                        alt='Placeholder'
                        className='h-[60px] w-[60px] object-cover rounded-lg'
                      />
                    </td>
                    <td className='px-6 py-4'>{item?.title}</td>
                    <td className='px-6 py-4'>{item?.category}</td>

                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-2'>
                        <button
                          className='p-1'
                          onClick={() => deleteAdvantages(item?._id)}
                        >
                          <FaRegTrashCan className='text-[18px]' />
                        </button>
                        <Link
                          to={`/edit-portfolio/${item?._id}`}
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

export default AllPortfolio;
