import { useEffect, useRef } from "react";
import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { DeleteAlert } from "../../../helper/helper";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogStore from "../../../store/blogStore";
import LoadingBar from "react-top-loading-bar";
import ReactPaginate from "react-paginate";
import Skeleton from "react-loading-skeleton";

const AllBlog = () => {
  const loadingBarRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const showItem = 12;
  let { allBlog, total, getAllBlogRequest, deleteBlogRequest } = blogStore();

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    (async () => {
      await getAllBlogRequest(showItem, 1);
      loadingBarRef.current.complete();
    })();
  }, [getAllBlogRequest]);

  //! handelPageClick
  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    loadingBarRef.current.continuousStart();
    await getAllBlogRequest(showItem, pageNo + 1);
    loadingBarRef.current.complete();
    navigate(`/all-blog/${pageNo + 1}`);
  };

  //! delete file
  let deleteBlog = async (id) => {
    DeleteAlert(deleteBlogRequest, id).then(async (res) => {
      if (res) {
        await getAllBlogRequest(showItem, parseInt(params.pageNo));
      }
    });
  };

  return (
    <div>
      <LoadingBar color='#FF014F' ref={loadingBarRef} height={2} />
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Blog
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
            {allBlog === null ? (
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
                {allBlog.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4'>
                      <img
                        src={`/api/v1/get-single-file/${item?.featureImg}`}
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
                          onClick={() => deleteBlog(item?._id)}
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
        <div className='flex justify-center mb-[50px]'>
          <div className='mt-[50px] '>
            <span>Showing 1 to 10 of {total} entries</span>
            {total > 10 ? (
              <div className='mt-4'>
                <ReactPaginate
                  className='flex gap-2'
                  previousLabel='<'
                  nextLabel='>'
                  activeClassName='active '
                  pageLinkClassName=' pagination'
                  previousLinkClassName='pagination'
                  nextLinkClassName='pagination'
                  activeLinkClassName='bg-red'
                  breakLabel='...'
                  pageCount={total / showItem}
                  initialPage={params.pageNo - 1}
                  pageRangeDisplayed={2}
                  onPageChange={handelPageClick}
                  type='button'
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
