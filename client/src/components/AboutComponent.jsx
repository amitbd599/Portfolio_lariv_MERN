import { Progress, Typography } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaGitAlt,
  FaGripfire,
  FaLinkedinIn,
  FaTwitter,
  FaUserTie,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import experienceStore from "../store/experienceStore";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import educationStore from "../store/educationStore";
const AboutComponent = () => {
  let { getAllExperienceRequest, allExperience } = experienceStore();
  let { getAllEducationRequest, allEducation } = educationStore();

  useEffect(() => {
    (async () => {
      await getAllExperienceRequest();
      await getAllEducationRequest();
    })();
  }, []);

  console.log(allEducation);

  return (
    <section className='py-[30px] md:py-[80px]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-[20px]'>
          <div className='col-span-12 lg:col-span-4 lg:pr-[30px]'>
            <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
              <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
                <div className='flex items-center gap-[6px]'>
                  <span>
                    <FaUserTie className='fa-light fa-user text-[14px] text-white' />
                  </span>
                  <span className='pl-[6px] text-[14px] text-white'>
                    About Us
                  </span>
                </div>
              </div>
            </div>
            <br />
            {/* Profile Info */}
            <div className='info-card mt-[10px] md:mt-[30px]'>
              <div className='rounded-[20px]  bg-card px-[30px] py-[40px]'>
                <div>
                  <div className='mt-[25px]'>
                    <div className='text-center'>
                      <h3
                        className='wow fadeIn animated text-[24px] font-semibold   text-white'
                        data-aos='fade-up'
                        data-aos-delay='100'
                      >
                        Hy! I’m
                        <span className='text-theme'> AMIT!</span>
                      </h3>
                      <p
                        className='mt-[6px] text-text'
                        data-aos='fade-up'
                        data-aos-delay='150'
                      >
                        Software Developer
                      </p>
                      <div
                        className='  mt-[26px] flex justify-center'
                        data-aos='fade-up'
                        data-aos-delay='200'
                      >
                        <img
                          src='assets/images/profile/user.png'
                          alt='Lariv portfolio web template'
                          className='w-full rounded-2xl object-cover'
                        />
                      </div>
                      <div
                        className='mt-[26px]'
                        data-aos='fade-up'
                        data-aos-delay='250'
                      >
                        <p
                          className='text-[20px] text-text'
                          data-aos='fade-up'
                          data-aos-delay='100'
                        >
                          admin@demo.com
                        </p>
                        <p
                          className='mt-[10px] text-text'
                          data-aos='fade-up'
                          data-aos-delay='150'
                        >
                          4688 Hickman Street <br />
                          Chicago, IL 60605
                        </p>
                      </div>
                      <div
                        className=' mt-[30px] flex  justify-center gap-3'
                        data-aos='fade-up'
                        data-aos-delay='200'
                      >
                        <Link to='#' className='block'>
                          <FaFacebookF className=' socialRound' />
                        </Link>
                        <Link to='#' className='block'>
                          <FaTwitter className=' socialRound' />
                        </Link>
                        <Link to='#' className='block'>
                          <FaLinkedinIn className=' socialRound' />
                        </Link>
                        <Link to='#' className='block'>
                          <FaGitAlt className=' socialRound' />
                        </Link>
                      </div>
                      <div
                        className=' mt-[30px]'
                        data-aos='fade-up'
                        data-aos-delay='250'
                      >
                        <a
                          href='assets/pdf/Resume-of-Amit-Biswas-MERN.pdf'
                          className='block rounded-full border-2 border-theme bg-theme py-[10px] font-medium text-white transition-all duration-300 hover:bg-transparent '
                        >
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-8'>
            <div className='mt-[80px]'>
              <h2
                className='text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px]'
                data-aos='fade-up'
                data-aos-delay='50'
              >
                I can develop that
                <br className='hidden md:block' />
                help
                <span className='text-theme'> people!</span>
              </h2>
              <p
                className='mt-[20px] text-text'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                Since starting my excursion as an independent creator almost
                quite a while back, I've accomplished remote work for
                organizations, counseled for new companies, and teamed up with
                capable individuals to make computerized items for both business
                and purchaser use. I'm discreetly sure, normally inquisitive,
                and ceaselessly dealing with further developing my chops each
                plan issue in turn.
              </p>
            </div>

            {/* Personal Information */}
            <div className='mt-[60px]'>
              <h2
                className='text-[32px] font-semibold'
                data-aos='fade-up'
                data-aos-delay='150'
              >
                Personal Info:
              </h2>
              <div className='mt-[20px] grid grid-cols-12 '>
                <div
                  className='col-span-6'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <p className=' text-[18px] font-medium'>Name</p>
                  <p className='mt-2 text-[16px] text-text'>Amit Biswas</p>
                </div>
                <div
                  className='col-span-6'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <p className=' text-[18px] font-medium'>Birthday</p>
                  <p className='mt-2 text-[16px] text-text'>22 Dec, 1994</p>
                </div>
              </div>
              <div className='mt-[20px] grid grid-cols-12'>
                <div
                  className='col-span-6'
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <p className=' text-[18px] font-medium'>Email</p>
                  <p className='mt-2 text-[16px] text-text'>
                    contact@amitjs.com
                  </p>
                </div>
                <div
                  className='col-span-6'
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <p className=' text-[18px] font-medium'>Skype</p>
                  <p className='mt-2 text-[16px] text-text'>amitjs963</p>
                </div>
              </div>
            </div>

            {/* Working Experience Information */}
            <div className='mt-[60px]'>
              <h2
                className='text-[32px] font-semibold'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Working <span className='text-theme'>Experience:</span>
              </h2>
              <div className='items mt-[40px] grid gap-[40px]'>
                <div className='item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]'>
                  <FaGripfire className='absolute left-[-16px] top-[-25px] text-[30px] text-text' />

                  {allExperience === null ? (
                    <>
                      {[...Array(2)].map((item, index) => (
                        <div
                          key={index}
                          className='grid grid-flow-col gap-[30px]'
                        >
                          <p data-aos='fade-up' data-aos-delay='50'>
                            <Skeleton
                              count={5}
                              height={12}
                              style={{ background: "#ddd" }}
                            />
                          </p>
                          <p data-aos='fade-up' data-aos-delay='50'>
                            <Skeleton
                              count={5}
                              height={12}
                              style={{ background: "#ddd" }}
                            />
                          </p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {allExperience.map((item, index) => (
                        <div key={index}>
                          <p
                            className='text-text'
                            data-aos='fade-up'
                            data-aos-delay='50'
                          >
                            {item?.time}
                          </p>
                          <h3
                            className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'
                            data-aos='fade-up'
                            data-aos-delay='100'
                          >
                            {item?.title}
                          </h3>
                          <p
                            className='mt-[5px] text-[18px] font-medium text-text'
                            data-aos='fade-up'
                            data-aos-delay='150'
                          >
                            {item?.subTitle}
                          </p>
                          <p
                            className='mt-[15px] text-text'
                            data-aos='fade-up'
                            data-aos-delay='200'
                          >
                            {item?.description}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Education Information */}
            <div className='mt-[60px]'>
              <h2
                className='text-[32px] font-semibold'
                data-aos='fade-up'
                data-aos-delay='50'
              >
                Educational <span className='text-theme'>Qualifications:</span>
              </h2>
              <div className='items mt-[40px] grid gap-[40px]'>
                <div className='item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]'>
                  <FaGripfire className='absolute left-[-16px] top-[-25px] text-[30px] text-text' />

                  {allEducation === null ? (
                    <>
                      {[...Array(2)].map((item, index) => (
                        <div
                          key={index}
                          className='grid grid-flow-col gap-[30px]'
                        >
                          <p data-aos='fade-up' data-aos-delay='50'>
                            <Skeleton
                              count={5}
                              height={12}
                              style={{ background: "#ddd" }}
                            />
                          </p>
                          <p data-aos='fade-up' data-aos-delay='50'>
                            <Skeleton
                              count={5}
                              height={12}
                              style={{ background: "#ddd" }}
                            />
                          </p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {allEducation.map((item, index) => (
                        <div key={index}>
                          <p
                            className='text-text'
                            data-aos='fade-up'
                            data-aos-delay='50'
                          >
                            {item?.time}
                          </p>
                          <h3
                            className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'
                            data-aos='fade-up'
                            data-aos-delay='100'
                          >
                            {item?.title}
                          </h3>
                          <p
                            className='mt-[5px] text-[18px] font-medium text-text'
                            data-aos='fade-up'
                            data-aos-delay='150'
                          >
                            {item?.institution}
                          </p>
                          <p
                            className='mt-[15px] text-text'
                            data-aos='fade-up'
                            data-aos-delay='200'
                          >
                            {item?.description}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Skill Information */}
            <div className='mt-[60px]'>
              <h2
                className='text-[32px] font-semibold'
                data-aos='fade-up'
                data-aos-delay='50'
              >
                My <span className='text-theme'>Advantages:</span>
              </h2>
              <div className='items mt-[40px] grid gap-[40px]'>
                <div className='item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]'>
                  <FaGripfire className='absolute left-[-16px] top-[-25px] text-[30px] text-text' />

                  <div>
                    <p
                      className='text-text'
                      data-aos='fade-up'
                      data-aos-delay='100'
                    >
                      2016 - 2020
                    </p>
                    <h3
                      className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'
                      data-aos='fade-up'
                      data-aos-delay='150'
                    >
                      Figma
                    </h3>
                    <p
                      className='mt-[5px] text-[18px] font-medium text-text'
                      data-aos='fade-up'
                      data-aos-delay='200'
                    >
                      UI/UX Design
                    </p>
                    <div className='mt-[20px] w-full'>
                      <div
                        className='mb-2 flex items-center justify-between gap-4'
                        data-aos='fade-up'
                        data-aos-delay='250'
                      >
                        <Typography
                          className='text-[16px] font-medium text-white'
                          variant='paragraph'
                        >
                          Figma
                        </Typography>
                        <Typography className='text-white' variant='h6'>
                          85%
                        </Typography>
                      </div>
                      <Progress
                        data-aos='fade-up'
                        data-aos-delay='300'
                        value={85}
                        size='lg'
                        className='progress border border-theme/20 bg-theme/10 p-1'
                      />
                    </div>
                  </div>
                  <div>
                    <p
                      className='text-text'
                      data-aos='fade-up'
                      data-aos-delay='100'
                    >
                      2016 - 2020
                    </p>
                    <h3
                      className='mt-[10px] text-[20px] font-medium text-white md:text-[25px]'
                      data-aos='fade-up'
                      data-aos-delay='150'
                    >
                      NEXT Prisma Application
                    </h3>
                    <p
                      className='mt-[5px] text-[18px] font-medium text-text'
                      data-aos='fade-up'
                      data-aos-delay='200'
                    >
                      Web Application Developer
                    </p>
                    <div className='mt-[20px] w-full'>
                      <div
                        className='mb-2 flex items-center justify-between gap-4'
                        data-aos='fade-up'
                        data-aos-delay='250'
                      >
                        <Typography
                          className='text-[16px] font-medium text-white'
                          variant='paragraph'
                        >
                          NEXT-JS
                        </Typography>
                        <Typography className='text-white' variant='h6'>
                          95%
                        </Typography>
                      </div>
                      <Progress
                        data-aos='fade-up'
                        data-aos-delay='300'
                        value={95}
                        size='lg'
                        className='progress border border-theme/20 bg-theme/10 p-1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
