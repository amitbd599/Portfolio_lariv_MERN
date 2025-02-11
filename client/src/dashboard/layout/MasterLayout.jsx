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
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const MasterLayout = ({ children }) => {
  let routerData = [
    {
      name: "Experience",
      route: [
        {
          name: "Create",
          path: "/create-expenses",
          icon: <FaHouseChimney />,
        },
        {
          name: "All",
          path: "/all-expenses",
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
          path: "/all-blog",
          icon: <FaList />,
        },
      ],
    },
  ];

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
                      variant='circular'
                      alt='tania andrew'
                      className='cursor-pointer'
                      src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                    />
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className='flex items-center gap-2'>
                      <span>
                        <FaPenToSquare />
                      </span>
                      <Typography variant='small' className='font-medium'>
                        Edit Profile
                      </Typography>
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

        <div className='flex overflow-hidden bg-white pt-16 '>
          <aside
            id='sidebar'
            className='fixed  z-20 h-full top-0 left-0 pt-16 hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75'
            aria-label='Sidebar'
          >
            <div className='relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0'>
              <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                <div className='flex flex-col items-center mt-6 -mx-2'>
                  <img
                    className='object-cover w-24 h-24 mx-2 rounded-full'
                    src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    alt='avatar'
                  />
                  <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'>
                    John Doe
                  </h4>
                  <p className='mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400'>
                    john@example.com
                  </p>
                </div>
                <div className='flex-1 px-3 bg-white pt-3 space-y-1'>
                  <hr />
                  <ul className='space-y-2 pb-2'>
                    <li>
                      <Link
                        to='/dashboard'
                        className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'
                      >
                        <FaHouseChimney />
                        <span className='ml-3'>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/media-center'
                        className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group'
                      >
                        <FaFile />
                        <span className='ml-3'>Media File</span>
                      </Link>
                    </li>
                  </ul>

                  {routerData.map((item, index) => (
                    <>
                      <hr />
                      <ul className='space-y-2 pb-2' key={index}>
                        <li>
                          <div className='text-base text-gray-900 font-normal rounded-lg flex items-center p-2  group'>
                            <FaRegCircleDot />
                            <span className='ml-3'>{item.name}</span>
                          </div>
                        </li>
                        {item.route.map((route, index) => (
                          <li className='ps-5' key={index}>
                            <NavLink
                              to={route.path}
                              className={({ isActive }) =>
                                `text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group ${
                                  isActive && "bg-gray-300 hover:bg-gray-300"
                                }`
                              }
                            >
                              <span>{route.icon}</span>
                              <span className='ml-3'>{route.name} </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
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
