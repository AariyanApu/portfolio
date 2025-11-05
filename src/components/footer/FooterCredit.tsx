const FooterCredit = () => {
  // Add dynamic year
  const year = new Date().getFullYear();
  return (
    <div
      className={
        "text-slate-color mx-auto mt-2 flex w-full max-w-7xl flex-col items-center justify-center px-4 pb-5 text-[11px] sm:items-end sm:justify-end sm:px-6 sm:text-xs lg:px-8"
      }
    >
      <p className="text-center leading-normal">
        @{year} Design & Built by Aariyan
      </p>
      <a
        href="https://github.com/AariyanApu/portfolio"
        className="color_animation hover:text-primary-color"
      >
        No Copyright. Code is free to use & Open-Source
      </a>
    </div>
  );
};

export default FooterCredit;
