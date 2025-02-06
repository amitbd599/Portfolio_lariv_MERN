import React from "react";
import { FaBlog, FaClockRotateLeft, FaRegCommentDots } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="menuBox" data-aos="fade-up" data-aos-delay="50">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaBlog className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">Blog</span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[10px] md:mt-[20px]">
          <h2
            className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Never Compromise For Our <br className="hidden md:block" />
            Portfolio to
            <span className="text-theme"> Quality!</span>
          </h2>
          <p
            className="mt-[20px] text-text lg:w-[60%]"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            The imperative for integrated, expansive, and seamless digital
            experiences is fueling software product design and development
            across organizations at an unprecedented scale. These demands
            require capabilities to imagine, build, and run digital products and
            services for new and existing.
          </p>
        </div>

        <div className="mt-[60px] md:mt-[80px]">
          <div className="grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-1.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full   object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-2.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full  object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-3.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full  object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-4.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full  object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-5.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full  object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group rounded-xl bg-card p-[25px]">
                <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/blog/blog-6.png"
                    alt="Lariv - React Portfolio Template"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
                    App Development
                  </p>
                  <Link to={"/blog-details"}>
                    <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                      All that You Believe Should Realize About Making
                    </h2>
                  </Link>

                  <p className="mt-[14px] text-base text-text">
                    SASS is poised to revolutionize how businesses operate by,
                    and scalable software platform.
                  </p>
                  <div className="mt-[20px] flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaClockRotateLeft className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">
                        September 16, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span>
                        <FaRegCommentDots className="text-base text-theme" />
                      </span>
                      <span className="text-sm text-text">3 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pagination */}
          <div className="mt-[60px]" data-aos="fade-up" data-aos-delay="100">
            <ul className=" flex justify-center space-x-4">
              <li className="group">
                <Link to={"/blog-details"} className="pagination">
                  <svg
                    className="fill-white group-hover:fill-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" />
                  </svg>
                </Link>
              </li>
              <li className="group">
                <Link to={"/blog-details"} className="pagination">
                  1
                </Link>
              </li>
              <li className="group">
                <Link href="#" className="pagination">
                  2
                </Link>
              </li>
              <li className="group">
                <Link to="#" className="pagination">
                  ...
                </Link>
              </li>
              <li className="group">
                <Link to="#" className="pagination">
                  10
                </Link>
              </li>
              <li className="group">
                <Link to="#" className="pagination">
                  <svg
                    className="fill-white group-hover:fill-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
