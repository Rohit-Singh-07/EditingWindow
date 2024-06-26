import { useState } from "react";

const BottomPages = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" absolute w-full bottom-0 bg-slate-100">
      <div
        className={`w-full flex flex-col gap-[10px] justify-center items-center px-[20px] bg-[#262626] transition-all duration-300 overflow-hidden ${
          open ? "py-[14px] h-fit" : "py-0 h-0"
        }`}
      >
        <div className="flex justify-between items-center self-stretch text-[14px]">
          <h2 className="text-[#F0F0F0]">Pages</h2>

          <div className="flex justify-end items-center gap-[12px] text-[#8C8C8C]">
            <button className="text-[12px] underline font-sans">
              View All pages
            </button>
            <h2>100%</h2>
          </div>
        </div>

        <div className="flex justify-start gap-[20px] overflow-auto w-full hidescroll">
          {Array.from({ length: 16 }, (_, index) => (
            <div
              key={index}
              className="w-[83px] h-[83px] rounded-[8px] bg-[#333333] shrink-0"
            ></div>
          ))}
        </div>
      </div>

      <button
        onClick={handleOpen}
        className="absolute top-[-18px] right-[30px]"
      >
        <img src="/assets/Icons/BottomToggle.svg" alt="" />
      </button>
    </div>
  );
};

export default BottomPages;
