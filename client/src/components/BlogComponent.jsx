import { FaBlog, FaClockRotateLeft, FaRegCommentDots } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlogCardSkeleton from "../skeleton/BlogCardSkeleton";
import blogStore from "../store/blogStore";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const BlogComponent = () => {
  let { getAllBlogRequest, allBlog, total } = blogStore();
  const params = useParams();
  const navigate = useNavigate();
  const showItem = 9;

  useEffect(() => {
    (async () => {
      await getAllBlogRequest(showItem, 1);
    })();
  }, [getAllBlogRequest]);

  //! handelPageClick
  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    await getAllBlogRequest(showItem, pageNo + 1);
    navigate(`/blog/${pageNo + 1}`);
  };

  console.log(allBlog);

  return (
    <section className='py-[30px] md:py-[80px]'>
      <div className='container'>
        <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
          <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
            <div className='flex items-center gap-[6px]'>
              <span>
                <FaBlog className='fa-light fa-user text-[14px] text-white' />
              </span>
              <span className='pl-[6px] text-[14px] text-white'>Blog</span>
            </div>
          </div>
        </div>
        <br />
        <div className='mt-[10px] md:mt-[20px]'>
          <h2
            className='text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px]'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Never Compromise For Our <br className='hidden md:block' />
            Portfolio to
            <span className='text-theme'> Quality!</span>
          </h2>
          <p
            className='mt-[20px] text-text lg:w-[60%]'
            data-aos='fade-up'
            data-aos-delay='150'
          >
            The imperative for integrated, expansive, and seamless digital
            experiences is fueling software product design and development
            across organizations at an unprecedented scale. These demands
            require capabilities to imagine, build, and run digital products and
            services for new and existing.
          </p>
        </div>

        <div className='mt-[60px] md:mt-[80px]'>
          <div className='grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]'>
            {allBlog === null ? (
              <>
                {[...Array(6)].map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4 '
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <BlogCardSkeleton />
                  </div>
                ))}
              </>
            ) : (
              <>
                {allBlog.map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4 '
                    data-aos='fade-up'
                    data-aos-delay='150'
                  >
                    <div className='group rounded-xl bg-card p-[25px]'>
                      <div className='h-[260px] w-full overflow-hidden rounded-2xl'>
                        <img
                          src={`/api/v1/get-single-file/${item?.featureImg}`}
                          alt='Lariv - React Portfolio Template'
                          className='h-full w-full  object-cover transition-all duration-500 group-hover:scale-[110%]'
                        />
                      </div>
                      <div>
                        <p className='mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme'>
                          {item?.category}
                        </p>
                        <Link to={`/blog-details/${item?._id}`}>
                          <h2 className='mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]'>
                            {item?.title}
                          </h2>
                        </Link>

                        <p className='mt-[14px] text-base text-text'>
                          {item?.sortDescription}
                        </p>
                        <div className='mt-[20px] flex items-center gap-[20px]'>
                          <div className='flex items-center gap-[10px]'>
                            <span>
                              <FaClockRotateLeft className='text-base text-theme' />
                            </span>
                            <span className='text-sm text-text'>
                              {item?.date}
                            </span>
                          </div>
                          <div className='flex items-center gap-[10px]'>
                            <span>
                              <FaRegCommentDots className='text-base text-theme' />
                            </span>
                            <span className='text-sm text-text'>
                              {item?.commentCount} Comments
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* pagination */}
          <div className='flex justify-center '>
            <div className='mt-[50px] '>
              {total > 9 ? (
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
    </section>
  );
};

export default BlogComponent;
