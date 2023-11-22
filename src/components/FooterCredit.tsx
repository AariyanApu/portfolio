const FooterCredit = () => {
  return (
    <div
      className={
        'mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pb-5    text-[11px] text-slate-color sm:items-end sm:justify-end sm:px-6   sm:text-xs lg:px-8 mt-2'
      }
    >
      <p className='text-center leading-normal '>
        @2023 Design & Built by Aariyan
      </p>
      <a
        href='https://github.com/AariyanApu/aariyanapu.com'
        className=' color_animation hover:text-primary-color'
      >
        No Copyright. Code is free to use & Open-Source
      </a>
    </div>
  );
};

export default FooterCredit;
