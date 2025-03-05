import { useEffect } from "react";
import { FaCodeMerge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PortfolioCardSkeleton from "../skeleton/PortfolioCardSkeleton";
import portfolioStore from "../store/portfolioStore";

const PortfolioComponent = () => {
  let { getAllPortfolioRequest, allPortfolio } = portfolioStore();

  useEffect(() => {
    (async () => {
      await getAllPortfolioRequest();
    })();
  }, []);

  return (
    <section className='py-[30px] md:py-[80px]'>
      <div className='container'>
        <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
          <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
            <div className='flex items-center gap-[6px]'>
              <span>
                <FaCodeMerge className='fa-light fa-user text-[14px] text-white' />
              </span>
              <span className='pl-[6px] text-[14px] text-white'>Portfolio</span>
            </div>
          </div>
        </div>
        <br />
        <div className=' mt-[10px] md:mt-[20px]'>
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
            {allPortfolio === null ? (
              <>
                {[...Array(6)].map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    <PortfolioCardSkeleton />
                  </div>
                ))}
              </>
            ) : (
              <>
                {allPortfolio.map((item, index) => (
                  <div
                    key={index}
                    className='col-span-12 md:col-span-6 lg:col-span-4'
                    data-aos='fade-up'
                    data-aos-delay='300'
                  >
                    <div className='group rounded-2xl bg-btn p-[30px] '>
                      <div className='overflow-hidden rounded-2xl w-full h-[250px]'>
                        <img
                          src={`/api/v1/get-single-file/${item?.img}`}
                          alt='Lariv - React Portfolio Template'
                          className='w-full h-full object-cover transition-all duration-500 group-hover:scale-[110%]'
                        />
                      </div>
                      <div>
                        <p className='mt-[16px] text-[14px] text-text'>
                          {item?.category}
                        </p>
                        <div className='portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme'>
                          <Link
                            to={item?.link}
                            target='_blank'
                            className='mt-[15px] text-[20px] font-medium capitalize md:text-[20px]'
                          >
                            {item?.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
