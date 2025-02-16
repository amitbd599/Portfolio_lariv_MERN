import { FaRegTrashCan } from "react-icons/fa6";
import fileStore from "../../../store/fileStore";
import { useEffect } from "react";
import { DeleteAlert } from "../../../helper/helper";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
const Media = () => {
  let { getAllFileRequest, allFile, total, deleteProductRequest } = fileStore();
  const params = useParams();
  const navigate = useNavigate();
  const showItem = 12;

  useEffect(() => {
    (async () => {
      await getAllFileRequest(showItem, 1);
    })();
  }, [getAllFileRequest]);

  //! handelPageClick
  const handelPageClick = (event) => {
    let pageNo = event.selected;
    getAllFileRequest(showItem, pageNo + 1);
    navigate(`/media-center/${pageNo + 1}`);
  };

  //! delete file
  let deleteFile = async (id, fileName) => {
    DeleteAlert(deleteProductRequest, id, fileName).then(async (res) => {
      if (res) {
        await getAllFileRequest(showItem, parseInt(params.pageNo));
      }
    });
  };

  return (
    <div>
      <>
        {/* component */}
        <div className='  p-4'>
          <div className='grid grid-cols-12  gap-[20px]'>
            {allFile.map((item, index) => (
              <div className='col-span-2' key={index}>
                <div className='relative border w-full h-[200px] rounded-xl overflow-hidden'>
                  <img
                    className='h-full w-full object-cover'
                    src={`/api/v1/get-single-file/${item?.fileName}`}
                    alt=''
                  />

                  <button
                    onClick={() => deleteFile(item?._id, item?.fileName)}
                    className='absolute right-[10px] bottom-[10px] bg-red-500 rounded-full z-10 p-[10px]'
                  >
                    <FaRegTrashCan className='text-white text-[18px]' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center absolute bottom-[50px]'>
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
      </>
    </div>
  );
};

export default Media;
