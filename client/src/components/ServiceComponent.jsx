import {
  FaCodeMerge,
  FaDeezer,
  FaDigitalOcean,
  FaHtml5,
  FaMobileScreen,
  FaUikit,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ServiceCardSkeleton from "../skeleton/ServiceCardSkeleton";
import serviceStore from "../store/serviceStore";
import { useEffect } from "react";
import testimonialStore from "../store/testimonialStore";
const ServiceComponent = () => {
  let { getAllServiceRequest, allService } = serviceStore();
  let { getAllTestimonialRequest, allTestimonial } = testimonialStore();

  useEffect(() => {
    (async () => {
      await getAllServiceRequest();
      await getAllTestimonialRequest();
    })();
  }, []);

  console.log(allService);

  return (
    <section className='py-[30px] md:py-[80px]'>
      <div className='container'>
        <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
          <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
            <div className='flex items-center gap-[6px]'>
              <span>
                <FaCodeMerge className='fa-light fa-user text-[14px] text-white' />
              </span>
              <span className='pl-[6px] text-[14px] text-white'>
                All Service
              </span>
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
            All the general services that
            <br className='hidden md:block' />I provide to
            <span className='text-theme'> clients!</span>
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
          <div className='grid  gap-y-[60px] md:grid-cols-12  md:gap-x-[30px]'>
            {allService === null ? (
              <>
                {[...Array(6)].map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4'
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <ServiceCardSkeleton />
                  </div>
                ))}
              </>
            ) : (
              <>
                {allService.map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    <div className='group rounded-2xl bg-btn p-[30px]'>
                      <div>
                        <div className='overflow-hidden rounded-2xl w-full h-[250px]'>
                          <img
                            src={`/api/v1/get-single-file/${item?.img}`}
                            alt='Lariv - React Portfolio Template'
                            className='w-full h-full object-cover transition-all duration-500 group-hover:scale-[110%]'
                          />
                        </div>
                      </div>
                      <h2 className='pt-5 text-[20px] font-medium text-white md:text-[26px] '>
                        {item?.title}
                      </h2>
                      <p className='mt-[10px] text-text text-justify'>
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Review Information */}
        <div className='mt-[100px]'>
          <h2
            className='text-[32px] font-semibold'
            data-aos='fade-up'
            data-aos-delay='50'
          >
            What People Says?:
          </h2>

          {/* Slider */}
          <div className='mt-[30px]' data-aos='fade-up' data-aos-delay='150'>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={2}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                500: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                992: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1400: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
              }}
            >
              {allTestimonial === null ? (
                <>Loading</>
              ) : (
                <>
                  {allTestimonial.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className=' divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none'>
                        <p className='pb-[30px] text-[18px] italic text-text'>
                          {item?.reviewText}
                        </p>

                        <div className='flex items-center gap-4 pt-[30px]'>
                          <div className='inline-block w-[80px] h-[80px] overflow-hidden rounded-full'>
                            <img
                              className='w-full h-full object-cover'
                              src={`/api/v1/get-single-file/${item?.img}`}
                              alt='Lariv - React Portfolio Template'
                            />
                          </div>
                          <div className='grid gap-[10px]'>
                            <p className='text-base font-semibold text-white  lg:text-[24px]'>
                              {item?.clientName}
                            </p>
                            <p>{item?.address}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
