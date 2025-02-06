import { FaRegEnvelope } from "react-icons/fa6";
const ContactComponent = () => {
  return (
    <section className='py-[30px] md:py-[80px]'>
      <div className='container'>
        <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
          <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
            <div className='flex items-center gap-[6px]'>
              <span>
                <FaRegEnvelope className='fa-light fa-user text-[14px] text-white' />
              </span>
              <span className='pl-[6px] text-[14px] text-white'>Contact</span>
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
            Let’s discuss about <br className='hidden md:block' />
            an
            <span className='text-theme'> project!</span>
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
          <div>
            <h2
              className='text-[32px] font-semibold'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Let Work Together!
            </h2>
          </div>
          <div className='grid grid-cols-12 gap-[30px]'>
            <div className='col-span-12 mt-[30px] lg:col-span-7'>
              <form
                id='contact-form'
                className='contact-form'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='grid gap-[30px] md:flex'>
                  <input
                    className='inputBox'
                    type='text'
                    placeholder='Enter Your Name'
                    id='name'
                    name='name'
                    required='required'
                  />
                  <input
                    className='inputBox'
                    type='email'
                    id='email'
                    name='email'
                    required='required'
                    placeholder='Enter Your Email'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    className='inputBox'
                    placeholder='Website Link:'
                    type='url'
                    id='website'
                    name='website'
                    required='required'
                  />
                </div>
                <div className='mt-[30px]'>
                  <textarea
                    name='message'
                    id='massage'
                    placeholder='Enter Your Massage'
                    required=''
                    rows={10}
                    cols={50}
                    className='w-full rounded-lg border bg-transparent p-[15px] pl-[10px] text-text focus:outline-none dark:border-btn'
                    defaultValue={""}
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>SEND MESSAGE</button>
                </div>
              </form>
            </div>
            <div
              className='col-span-12 lg:col-span-5'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='mt-[30px] rounded-xl bg-card p-[10px]'>
                <div className='contact-map'>
                  <iframe
                    title='map'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29487.110529660204!2d91.78233825630927!3d22.50835433721081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd66e0fc1fe75%3A0x1a5fa83776c97924!2sHathazari!5e0!3m2!1sen!2sbd!4v1689738975067!5m2!1sen!2sbd'
                    height={390}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
