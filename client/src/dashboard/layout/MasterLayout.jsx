import {
  FaArrowRight,
  FaBars,
  FaFile,
  FaHouseChimney,
  FaList,
  FaPenToSquare,
  FaRegCircleDot,
  FaRegEnvelope,
} from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import userStore from "../../store/userStore";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const MasterLayout = ({ children }) => {
  let { userData, userReadRequest } = userStore();

  useEffect(() => {
    (async () => {
      await userReadRequest();
    })();
  }, [userReadRequest]);

  let routerData = [
    {
      name: "Home",
      route: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <FaHouseChimney />,
        },
        {
          name: "Media",
          path: "/media-center/1",
          icon: <FaFile />,
        },
      ],
    },
    {
      name: "Experience",
      route: [
        {
          name: "Create",
          path: "/create-experience",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-experience",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Education",
      route: [
        {
          name: "Create",
          path: "/create-education",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-education",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Advantages",
      route: [
        {
          name: "Create",
          path: "/create-advantages",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-advantages",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Portfolio",
      route: [
        {
          name: "Create",
          path: "/create-portfolio",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-portfolio",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Service",
      route: [
        {
          name: "Create",
          path: "/create-service",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-service",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Testimonial",
      route: [
        {
          name: "Create",
          path: "/create-testimonial",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-testimonial",
          icon: <FaList />,
        },
      ],
    },
    {
      name: "Blog",
      route: [
        {
          name: "Create",
          path: "/create-blog",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-blog/1",
          icon: <FaList />,
        },
      ],
    },
  ];

  const location = useLocation(); // Get current route
  const [openMenu, setOpenMenu] = useState(null);

  // Auto open the menu if the active route is inside it
  useEffect(() => {
    const activeMenu = routerData.find((menu) =>
      menu.route.some((route) => route.path === location.pathname)
    );
    setOpenMenu(activeMenu ? activeMenu.name : null);
  }, []);

  const handleToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <>
      <div>
        {/* Top bar */}
        <nav className='bg-white border-b border-gray-200 fixed z-30 w-full '>
          <div className='px-3 py-3 lg:px-5 lg:pl-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-start'>
                <button className='lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded'>
                  <span>
                    <FaBars />
                  </span>
                </button>
                <a
                  href='#'
                  className='text-xl font-bold flex items-center lg:ml-2.5'
                >
                  <img
                    src='/assets/images/logo.svg'
                    className='h-6 mr-2'
                    alt=' Logo'
                  />
                </a>
              </div>
              <div className='flex items-center'>
                <Menu>
                  <MenuHandler>
                    <Avatar
                      variant='rounded'
                      alt='tania andrew'
                      className='cursor-pointer rounded-full w-[50px] h-[50px] object-cover'
                      src={`/api/v1/get-single-file/${userData?.img}`}
                    />
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className='flex items-center gap-2'>
                      <span>
                        <FaPenToSquare />
                      </span>
                      <Link
                        to='/edit-profile'
                        className='text-base text-gray-900 font-normal rounded-lg flex items-center  hover:bg-gray-100 '
                      >
                        Edit Profile
                      </Link>
                    </MenuItem>
                    <MenuItem className='flex items-center gap-2'>
                      <span>
                        <FaRegEnvelope />
                      </span>

                      <Typography variant='small' className='font-medium'>
                        Inbox
                      </Typography>
                    </MenuItem>

                    <hr className='my-2 border-blue-gray-50' />
                    <MenuItem className='flex items-center gap-2 '>
                      <span>
                        <FaArrowRight />
                      </span>
                      <Typography variant='small' className='font-medium'>
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </nav>

        <div className='flex overflow-hidden bg-white pt-16  '>
          <aside
            id='sidebar'
            className='fixed  z-20 h-full top-0 left-0 pt-16 hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75'
            aria-label='Sidebar'
          >
            <div className='relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0'>
              <div className='flex-1 flex flex-col pt-5 pb-4 overflow-x-hidden'>
                <div className='flex flex-col items-center mt-6 -mx-2'>
                  <img
                    className='object-cover w-24 h-24 mx-2 rounded-full'
                    src={`/api/v1/get-single-file/${userData?.img}`}
                    alt='avatar'
                  />
                  <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'>
                    {userData?.firstName} {userData?.lastName}
                  </h4>
                  <p className='mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400'>
                    {userData?.email}
                  </p>
                </div>
                <div className='flex-1 px-3 bg-white pt-3 space-y-1'>
                  {routerData.map((item, index) => (
                    <div
                      key={index}
                      className='text-base  border-t text-gray-900 font-normal   items-center p-2  group'
                    >
                      {/* Parent Menu */}
                      <button
                        onClick={() => handleToggle(item.name)}
                        className={`w-full text-left p-2 rounded-md transition flex items-center gap-1 ${
                          openMenu === item.name ? " font-bold" : ""
                        }  hover:bg-gray-300`}
                      >
                        <FaRegCircleDot className='m-[5px] text-[16px]' />{" "}
                        {item.name}
                      </button>

                      {/* Submenu - Show only if active */}
                      {openMenu === item.name && (
                        <div className='pl-[30px]  rounded-md '>
                          {item.route.map((subItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subItem.path}
                              className={({ isActive }) =>
                                `text-base text-gray-900 font-normal  rounded-lg flex gap-2 items-center mt-2 p-2 hover:bg-gray-100 group ${
                                  isActive && "bg-gray-300 hover:bg-gray-300"
                                }`
                              }
                            >
                              <span>{subItem.icon}</span>
                              <span>{subItem.name}</span>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div
            className='bg-gray-900 opacity-50 hidden fixed inset-0 z-10'
            id='sidebarBackdrop'
          />

          {/* Inner content */}
          <div className='pl-[256px] pt-[20px] min-h-screen text-[#333]  border w-full'>
            <div className='p-[20px]'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
