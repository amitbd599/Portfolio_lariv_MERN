import React from "react";
import {
  FaBlog,
  FaClockRotateLeft,
  FaFacebookF,
  FaGitAlt,
  FaLinkedinIn,
  FaQuoteLeft,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogDetailsComponent = () => {
  return (
    <>
      <section className="py-[30px] md:py-[80px]">
        <div className="container">
          <div className="menuBox" data-aos="fade-up" data-aos-delay="50">
            <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
              <div className="flex items-center gap-[6px]">
                <span>
                  <FaBlog className="fa-light fa-user text-[14px] text-white" />
                </span>
                <span className="pl-[6px] text-[14px] text-white">
                  Blog Details
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[60px]  ">
            <div>
              <div
                className="w-full overflow-hidden lg:h-[720px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/assets/images/blog/blog-feature.png"
                  alt="Lariv - React Portfolio Template"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div
                className="title mt-[40px]"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h2 className="text-[26px] font-semibold capitalize leading-[36px] text-white md:text-[32px] md:leading-[42px]">
                  Open-source software to speed up quantum research
                </h2>
              </div>
              <div
                className="mt-[20px] flex items-center gap-[20px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-[10px]">
                  <span>
                    <FaClockRotateLeft className="text-base text-theme" />
                  </span>
                  <span className="text-sm text-text">November 22, 2023</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span>
                    <FaRegCommentDots className="text-base text-theme" />
                  </span>
                  <span className="text-sm text-text">2 Comments</span>
                </div>
              </div>
              <div
                className="mt-[30px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-text">
                  Quantum technology is expected to fundamentally change many
                  key areas of society. Researchers are convinced that there are
                  many more useful quantum properties and applications to
                  explore than those we know today. A team of researchers at
                  Chalmers University of Technology in Sweden have now developed
                  open-source, freely available software that will pave the way
                  for new discoveries in the field and accelerate quantum
                  research significantly.
                </p>
                <p className="mt-[30px] text-text">
                  Within a few decades, quantum technology is expected to become
                  a key technology in areas such as health, communication,
                  defence and energy. The power and potential of the technology
                  lie in the odd and very special properties of quantum
                  particles. Of particular interest to researchers in the field
                  are the superconducting properties of quantum particles that
                  give components perfect conductivity with unique magnetic
                  properties. These superconducting properties are considered
                  conventional today and have already paved the way for entirely
                  new technologies used in applications such as magnetic
                  resonance imaging equipment, maglev trains and quantum
                  computer components. However, years of research and
                  development remain before a quantum computer can be expected
                  to solve real computing problems in practice, for example. The
                  research community is convinced that there are many more
                  revolutionary discoveries to be made in quantum technology
                  than those we know today.
                </p>
                <div className="mt-[30px] rounded-xl bg-btn p-[30px]">
                  <div className="gap-[20px] md:flex">
                    <div className="w-[50px] md:w-[120px]">
                      <FaQuoteLeft className="text-[100px] text-theme" />
                    </div>
                    <p className="text-[16px]  text-white">
                      Quantum technology is expected to fundamentally change
                      many key areas of society. Researchers are convinced that
                      there are many more useful quantum properties and
                      applications to explore than those we know today. many key
                      areas of society. Researchers are convinced that there are
                      many more useful quantum properties and applications to
                      explore than those we know today.
                    </p>
                  </div>{" "}
                </div>
                <p className="mt-[30px] text-text">
                  hese new superconductors continue to be highly enigmatic
                  materials -- just as their conventional siblings once were
                  when they were discovered in a laboratory more than a hundred
                  years ago. After that discovery, it would be more than 40
                  years before researchers could describe them in theory.many
                  more useful quantum properties and applications to explore
                  than those we know today. many key areas of society.
                  Researchers are convinced that there are many more useful
                  quantum properties and applications to explore than those we
                  know today.
                </p>
                <div className="w-100 mt-[30px] gap-[30px] lg:flex">
                  <div className="h-auto w-full overflow-hidden lg:w-6/12">
                    <img
                      src="/assets/images/blog/blog-2.png"
                      alt="Lariv - React Portfolio Template"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="mt-[30px] lg:mt-0 lg:w-6/12">
                    <p className="text-text">
                      Vuexy React The most developer-friendly &amp; highly
                      customizable React Admin Template. It is based on Create
                      React App, Redux &amp; Reactstrap BS4. Furthermore, this
                      template. customizable React Admin Template. It is based
                      on Create React App, Redux &amp; Template. It is based on
                      Create React App, Redux &amp; Reactstrap BS4. Furthermore,
                      this template. customizable React Admin Template. It is
                      based on Create React App, Redux &amp; Reactstrap BS4.
                      Furthermore, this template.
                    </p>
                    <ul className="mt-[20px] grid gap-5">
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        User account creation with email login options.
                      </li>
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        Password reset and account recovery options.
                      </li>
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        Advanced search functionality to find specific cuisines,
                        dishes, or restaurants
                      </li>
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        User account creation with email login options.
                      </li>
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        Password reset and account recovery options.
                      </li>
                      <li className="flex items-start text-text">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 256 512"
                          className="mr-[8px] mt-[5px]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                        </svg>{" "}
                        Advanced search functionality to find specific cuisines,
                        dishes, or restaurants
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-[30px] text-text">
                  Hese new superconductors continue to be highly enigmatic
                  materials -- just as their conventional siblings once were
                  when they were discovered in a laboratory more than a hundred
                  years ago. After that discovery, it would be more than 40
                  years before researchers could describe them in theory.
                  materials -- just as their conventional siblings once were
                  when they were discovered in a laboratory more than a hundred
                  years ago. After that discovery, it would be more than 40
                  years before researchers could describe them in theory.
                </p>
                <div className="mt-[30px] grid gap-[30px] md:flex">
                  <div>
                    <img
                      src="/assets/images/blog/blog-4.png"
                      alt="Lariv - React Portfolio Template"
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/images/blog/blog-5.png"
                      alt="Lariv - React Portfolio Template"
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/images/blog/blog-6.png"
                      alt="Lariv - React Portfolio Template"
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/images/blog/blog-7.png"
                      alt="Lariv - React Portfolio Template"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
                <p className="mt-[30px] text-text">
                  To be able to explore revolutionary new discoveries, tools are
                  needed that can study and utilise the extraordinary quantum
                  properties at the minimal particle level, and can also be
                  scaled up large enough to be used in practice. Researchers
                  need to work at meso scopic scale. To be able to explore
                  revolutionary new discoveries, tools are needed that can study
                  and utilise the extraordinary quantum properties at the
                  minimal particle level, and can also be scaled up large enough
                  to be used in practice. Researchers need to work at meso
                  scopic scale.
                </p>
              </div>
              <div className="mt-[30px]">
                <div className="grid items-center justify-between md:flex">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <p className="text-[18px] font-semibold text-white">
                      By Alex Johan
                    </p>
                  </div>
                  <div
                    className="mt-[20px] md:mt-0"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className=" mt-[30px] flex  justify-center gap-3">
                      <Link to="/" className="block">
                        <FaFacebookF className=" socialRound" />
                      </Link>
                      <Link to="/" className="block">
                        <FaTwitter className=" socialRound" />
                      </Link>
                      <Link to="/" className="block">
                        <FaLinkedinIn className=" socialRound" />
                      </Link>
                      <Link to="/" className="block">
                        <FaGitAlt className=" socialRound" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] md:mt-[10px]">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-[22px] font-semibold text-white">
                    03 Comments
                  </h2>
                </div>
                <div className="my-[15px] border-t border-[#ddd] " />
                <div className="parent mt-[40px] grid gap-[30px]">
                  <div
                    className="flex w-full gap-[30px]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="w-[20%] md:w-auto">
                      <img
                        src="/assets/images/user/user-1.png"
                        alt="Lariv - React Portfolio Template"
                        className="w-[120px] rounded-full"
                      />
                    </div>
                    <div className="w-[80%] md:w-auto">
                      <div className="flex w-full justify-between">
                        <div>
                          <h2 className="text-[18px] font-medium text-white">
                            Jose K. King
                          </h2>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="text-text">
                          We want to find out about all the other exciting
                          properties of unconventional superconductors. Our
                          software is powerful, educational and user-friendly,
                          and we hope that it will help generate new
                          understanding and suggest entirely new applications
                          for these unexplored superconductors
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex w-full gap-[30px]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="w-[20%] md:w-auto">
                      <img
                        src="/assets/images/user/user-2.png"
                        alt="Lariv - React Portfolio Template"
                        className="w-[120px] rounded-full"
                      />
                    </div>
                    <div className="w-[80%] md:w-auto">
                      <div className="flex w-full justify-between">
                        <div>
                          <h2 className="text-[18px] font-medium text-white">
                            Rock Sendro
                          </h2>
                        </div>
                      </div>
                      <div className="mt-[10px]">
                        <p className="text-text">
                          We want to find out about all the other exciting
                          properties of unconventional superconductors. Our
                          software is powerful, educational and user-friendly,
                          and we hope that it will help generate new
                          understanding and suggest entirely new applications
                          for these unexplored superconductors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[60px]">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-[22px] font-semibold text-white">
                      Post a Comment
                    </h2>
                    <p className="mt-[2px] text-text">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="mt-[20px]">
                      <div className="grid w-full gap-[20px] md:flex">
                        <div className="md:w-1/2">
                          <input
                            className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                            type="text"
                            placeholder="Full Name:"
                          />
                        </div>
                        <div className="md:w-1/2">
                          <input
                            className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                            type="text"
                            placeholder="Your Email:"
                          />
                        </div>
                      </div>
                      <div className="mt-[20px]">
                        <textarea
                          placeholder="Write your Comment here:"
                          name=""
                          id=""
                          cols={30}
                          rows={16}
                          className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <div className="mb-6 mt-[20px] flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className=" h-4 w-4 rounded  bg-btn "
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="remember"
                              className="font-medium text-text"
                            >
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-[30px]">
                        <button className="btn">Post Comment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
