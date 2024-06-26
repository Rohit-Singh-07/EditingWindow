

const SegmentImages = ({title}) => {
  return (
    <div className="flex flex-col items-start gap-[14px] w-full">
        <button className="flex justify-center items-center gap-[5px]">
          <h2>{title}</h2>
          <svg
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

        <div className="flex justify-start gap-x-[8px] gap-y-[14px] w-full flex-wrap">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="w-[107px] h-[129px] rounded-[8px] bg-[#333333]"
            ></div>
          ))}
        </div>
      </div>
  )
}

export default SegmentImages
