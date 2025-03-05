import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
const MasterLayout = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div>
        <div className='bg-img'></div>
        {/* Header Section */}
        <header className='relative z-[99]'>
          <div className=' container mx-auto  pt-[30px]'>
            <div className=' flex justify-between rounded-[10px] bg-card px-[15px]  py-[30px] md:px-[30px]'>
              <div className='logo flex items-center '>
                <Link to={"/"}>
                  <img
                    src={"/assets/images/logo.svg"}
                    alt='Lariv - React Portfolio Template'
                  />
                </Link>
              </div>
              <menu className='hidden items-center lg:flex'>
                <ul className='flex  gap-[40px]'>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive " : "navNotActive "
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                      to={"/about"}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                      to={"/portfolio"}
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                      to={"/service"}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                      to={"/blog/1"}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "navActive" : "navNotActive"
                      }
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </menu>
              <div className='block lg:hidden'>
                <div className='flex items-center gap-4	 px-[10px]'>
                  <span
                    onClick={sidebarControl}
                    className='rounded-full border border-[#919295] p-[10px] text-[25px] '
                  >
                    <BiMenuAltRight className='text-text ' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sidebar intro */}
        <div
          className={`sidebar fixed ${
            sidebar ? "left-0" : "left-[100%]"
          }  top-0 z-[999]  h-full w-full bg-btn/60 transition-all duration-500`}
        >
          <div className='ml-auto h-full min-h-[750px] w-[300px] bg-card  px-[30px] pt-[60px] md:min-h-[700px]'>
            <div className='relative flex justify-center'>
              <span
                onClick={sidebarControl}
                className='group absolute left-[-78px] rounded-lg bg-card   px-[15px] py-[10px] text-[26px]'
              >
                <FaXmark className='text-white  transition-all duration-500  group-hover:rotate-90 group-hover:text-theme' />
              </span>
              <div>
                <img
                  src='/assets/images/logo.svg'
                  alt='Lariv - React Portfolio Template'
                />
              </div>
            </div>
            <div className='my-[30px] border-t border-[#ddd] '></div>
            <nav className='mt-[30px]'>
              <ul className='grid gap-[14px]'>
                <li className='text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className=' text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/portfolio"}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className=' text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/blog/1"}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className=' text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/service"}
                  >
                    Services
                  </NavLink>
                </li>
                <li className=' text-[18px] font-semibold'>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px]  text-theme"
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className='my-[30px] border-t border-[#ddd] '></div>

            <div className='contact mt-[40px] pb-[20px] md:mt-[0px]'>
              <div>
                <p className='text-[20px] font-semibold  text-white'>
                  Follow Me:
                </p>

                <div className='mt-[20px] flex gap-3'>
                  <Link to={"/"}>
                    <button className='boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme '>
                      <FaFacebookF />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className='boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme '>
                      <FaTwitter />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className='boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme '>
                      <FaLinkedinIn />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className='boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme '>
                      <FaInstagram />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Card Section */}
        <section className='relative z-[99]'>
          <div className='main__body'>{props.children}</div>
        </section>
        {/* Footer Section */}
        <footer className='relative z-[9]'>
          <div className='container mx-auto  flex justify-center pb-[40px]'>
            <div>
              <p className='text-center text-text'>
                Copyright <span className='text-theme'>Lariv</span> ©2023. All
                rights reserved
              </p>
              <div className='mt-[20px] flex justify-center text-center'>
                <img
                  src='/assets/images/logo.svg'
                  alt='Lariv - React Portfolio Template'
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MasterLayout;
