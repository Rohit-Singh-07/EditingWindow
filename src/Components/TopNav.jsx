const TopNav = () => {
  return (
    <div className="w-full bg-[#141414] flex justify-between px-[20px] py-[14px] text-[#BFBFBF] font-medium">
      <div className="flex items-center gap-[34px]">
        <button className="text-[14px]">File</button>
        <button className="text-[14px]">Edit</button>
        <button className="text-[14px]">View</button>
        <button className="text-[14px]">Settings</button>
      </div>

      <div className="flex justify-between w-full max-w-[701px] items-center">
        <div className="flex justify-start text-[16px]">
          <h1>Magazine</h1> <h1 className="text-white"> / Anuj And Shreya</h1>
        </div>
        <div className="flex justify-end items-center gap-[18px]">
          <button className="flex items-center"><img src="/assets/Icons/ShareAlt.svg" alt="" /></button>

          <button className="flex items-center gap-[4px] py-[6px] px-[10px] border-[#BFBFBF] border-[1px] rounded-[4px]">
            <img src="/assets/Icons/Eye.svg" alt="" />
            <h1>Final Preview</h1>
          </button>
          <button className="flex items-center gap-[4px] py-[6px] px-[10px] bg-[#573CFA] rounded-[4px]">
            <img src="/assets/Icons/save.svg" alt="" />
            <h1 className="text-white">Export</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
