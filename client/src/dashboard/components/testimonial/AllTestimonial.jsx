import { useEffect, useRef } from "react";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { DeleteAlert } from "../../../helper/helper";
import LoadingBar from "react-top-loading-bar";
import testimonialStore from "../../../store/testimonialStore";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const AllTestimonial = () => {
  const loadingBarRef = useRef(null);
  let { allTestimonial, getAllTestimonialRequest, deleteTestimonialRequest } =
    testimonialStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllTestimonialRequest();
      loadingBarRef.current.complete();
    })();
  }, [getAllTestimonialRequest]);

  //! delete file
  let deleteTestimonial = async (id) => {
    DeleteAlert(deleteTestimonialRequest, id).then(async (res) => {
      if (res) {
        await getAllTestimonialRequest();
      }
    });
  };

  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Testimonial
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
                Client Name
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Address
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
            {allTestimonial === null ? (
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
                {allTestimonial.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>
                      <img
                        src={`/api/v1/get-single-file/${item?.img}`}
                        alt='Placeholder'
                        className='h-[60px] w-[60px] object-cover rounded-lg'
                      />
                    </td>
                    <td className='px-6 py-4'>{item?.clientName}</td>
                    <td className='px-6 py-4'>{item?.address}</td>

                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-2'>
                        <button
                          className='p-1'
                          onClick={() => deleteTestimonial(item?._id)}
                        >
                          <FaRegTrashCan className='text-[18px]' />
                        </button>
                        <Link
                          to={`/edit-testimonial/${item?._id}`}
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

export default AllTestimonial;
