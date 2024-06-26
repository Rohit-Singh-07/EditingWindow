import { useState } from "react";
import Form from "./Form/Form";
import Layout from "./Layout/Layout";

const SideNav = () => {
  const [tabs, setTabs] = useState("Form");
  const [open, setOpen] = useState(true);

  const handleTabs = (tab) => {
    setTabs(tab);
    setOpen(true);
  };

  const handleSideNavTab = () => {
    setOpen(!open);
  };

  

  return (
    <div className="flex">
      <div className="flex items-center justify-center py-[20px] px-[5px] bg-[#141414]">
        <div className="flex flex-col w-[100px] h-full justify-between items-center text-white font-medium">
          <div className="flex flex-col gap-[18px]">
            <button
              onClick={() => handleTabs("Form")}
              className={tabs === "Form" ? "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full bg-[#262626]" : "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full opacity-50"}
            >
              <img src="/assets/Icons/assignment.svg" alt="" />
              <h1>Form</h1>
            </button>

            <button
              onClick={() => handleTabs("Layout")}
              className={tabs === "Layout" ? "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full bg-[#262626]" : "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full opacity-50"}
            >
              <img src="/assets/Icons/layout.svg" alt="" />
              <h1>Layout</h1>
            </button>

            <button
              onClick={() => handleTabs("Heading")}
              className={tabs === "Heading" ? "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full bg-[#262626]" : "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full opacity-50"}
            >
              <img src="/assets/Icons/heading.svg" alt="" />
              <h1>Heading</h1>
            </button>

            <button
              onClick={() => handleTabs("Extras")}
              className={tabs === "Extras" ? "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full bg-[#262626]" : "flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full opacity-50"}
            >
              <img src="/assets/Icons/widgets.svg" alt="" />
              <h1>Extras</h1>
            </button>
          </div>

          <button onClick={handleSideNavTab} className="flex flex-col justify-center items-center gap-[4px] py-[4px] px-[10px] h-[86px] w-[86px] rounded-full">
            <img src="/assets/Icons/menu_open.svg" alt="" />
          </button>
        </div>
      </div>

      <div className={`bg-[#1F1F1F] flex flex-col gap-[18px] text-[14px] font-medium transition-all duration-500 overflow-hidden p-[10px] ${open ? "w-[377px]" : "w-0 px-[0px]"}`}>{ tabs === "Form" ? <Form /> : tabs === "Layout" ? <Layout/> : ""}</div>
    </div>
  );
};

export default SideNav;
