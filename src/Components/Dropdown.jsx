import { useState } from "react";

const Dropdown = ({content, defaultState = false, title}) => {

    const [open, setOpen] = useState(defaultState)

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className="flex flex-col items-start gap-[14px] w-full">
      <button onClick={handleOpen}
      className="flex justify-between w-full items-center gap-[5px] bg-[#333333] py-[4px] px-[20px] rounded-lg">
        <h2>{title}</h2>
        <svg
          className={open ? "rotate-[90deg]" : 'rotate-0'}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <mask
            id="mask0_2500_28748"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="15"
            height="16"
          >
            <rect y="0.5" width="15" height="15" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_2500_28748)">
            <path
              d="M8.09082 8.00003L5.21582 5.12502L5.87441 4.46643L9.40801 8.00003L5.87441 11.5336L5.21582 10.875L8.09082 8.00003Z"
              fill="#8C8C8C"
            />
          </g>
        </svg>
      </button>

      <div className={open ? "transition-all duration-1000 h-fit" : "h-0 overflow-hidden transition-all duration-1000"}>{content}</div>
    </div>
  );
};

export default Dropdown;
