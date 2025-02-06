import React from "react";
import {
  FaBlackberry,
  FaCodeMerge,
  FaDeezer,
  FaDigitalOcean,
  FaHtml5,
  FaMobileScreen,
  FaUikit,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const ServiceComponent = () => {
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="menuBox" data-aos="fade-up" data-aos-delay="50">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaCodeMerge className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">
                All Service
              </span>
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
            All the general services that
            <br className="hidden md:block" />I provide to
            <span className="text-theme"> clients!</span>
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
          <div className="grid  gap-y-[60px] md:grid-cols-12  md:gap-x-[30px]">
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaBlackberry className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  Good Business Stratagy
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaHtml5 className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  Website Development
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaDeezer className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  Marketing & Reporting
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaMobileScreen className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  Mobile App Development
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaDigitalOcean className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  Digital Marketing
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group rounded-2xl bg-btn p-[30px]">
                <div>
                  <FaUikit className="text-[60px] text-theme" />
                </div>
                <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                  UI/UX Design
                </h2>
                <p className="mt-[10px] text-text">
                  Counseled for new companies, and teamed up with capable
                  individuals to make computerized items for both business and
                  purchaser use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Review Information */}
        <div className="mt-[100px]">
          <h2
            className="text-[32px] font-semibold"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            What People Says?:
          </h2>

          {/* Slider */}
          <div className="mt-[30px]" data-aos="fade-up" data-aos-delay="150">
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
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img
                        src="assets/images/user/user-1.png"
                        alt="Lariv - React Portfolio Template"
                      />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-base font-semibold text-white  lg:text-[24px]">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img
                        src="assets/images/user/user-2.png"
                        alt="Lariv - React Portfolio Template"
                      />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-base font-semibold text-white  lg:text-[24px]">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img
                        src="assets/images/user/user-3.png"
                        alt="Lariv - React Portfolio Template"
                      />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-base font-semibold text-white  lg:text-[24px]">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img
                        src="assets/images/user/user-4.png"
                        alt="Lariv - React Portfolio Template"
                      />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-base font-semibold text-white  lg:text-[24px]">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img
                        src="assets/images/user/user-5.png"
                        alt="Lariv - React Portfolio Template"
                      />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-base font-semibold text-white  lg:text-[24px]">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
