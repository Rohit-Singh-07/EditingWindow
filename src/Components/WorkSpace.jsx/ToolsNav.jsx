import BasicTools from "./Tools/BasicTools";
import ImageTools from "./Tools/ImageTools";
import TextTools from "./Tools/TextTools";

const ToolsNav = () => {
  return (
    <div className="flex justify-center items-center w-full py-[14px] px-[20px] absolute top-0 bg-[#262626]">
      {/* <BasicTools/> */}
      <TextTools/>
      {/* <ImageTools/> */}
    </div>
  );
};

export default ToolsNav;
