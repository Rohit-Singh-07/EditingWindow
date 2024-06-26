const SelectFont = () => {
  return (
    <div>
      <div className="flex flex-col gap-[18px] px-[10px]">
        <div className="flex flex-col gap-[14px]">
          <div className="relative w-full max-w-md mx-auto">
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_2572_29439)">
                <path
                  d="M13.2125 12.3535L9.15469 8.29564C9.78438 7.48158 10.125 6.48627 10.125 5.43939C10.125 4.18627 9.63594 3.01127 8.75156 2.12533C7.86719 1.23939 6.68906 0.751892 5.4375 0.751892C4.18594 0.751892 3.00781 1.24095 2.12344 2.12533C1.2375 3.0097 0.75 4.18627 0.75 5.43939C0.75 6.69095 1.23906 7.86908 2.12344 8.75345C3.00781 9.63939 4.18438 10.1269 5.4375 10.1269C6.48438 10.1269 7.47813 9.78627 8.29219 9.15814L12.35 13.2144C12.3619 13.2263 12.376 13.2357 12.3916 13.2422C12.4071 13.2486 12.4238 13.2519 12.4406 13.2519C12.4575 13.2519 12.4741 13.2486 12.4897 13.2422C12.5052 13.2357 12.5194 13.2263 12.5312 13.2144L13.2125 12.5347C13.2244 12.5228 13.2338 12.5087 13.2403 12.4931C13.2467 12.4776 13.2501 12.4609 13.2501 12.4441C13.2501 12.4272 13.2467 12.4106 13.2403 12.395C13.2338 12.3795 13.2244 12.3654 13.2125 12.3535ZM7.9125 7.91439C7.25 8.57533 6.37187 8.93939 5.4375 8.93939C4.50312 8.93939 3.625 8.57533 2.9625 7.91439C2.30156 7.25189 1.9375 6.37377 1.9375 5.43939C1.9375 4.50502 2.30156 3.62533 2.9625 2.96439C3.625 2.30345 4.50312 1.93939 5.4375 1.93939C6.37187 1.93939 7.25156 2.30189 7.9125 2.96439C8.57344 3.62689 8.9375 4.50502 8.9375 5.43939C8.9375 6.37377 8.57344 7.25346 7.9125 7.91439Z"
                  fill="#262626"
                />
              </g>
              <defs>
                <clipPath id="clip0_2572_29439">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <svg
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M3.77166 9.45703C3.77166 9.69902 3.9658 9.89453 4.20643 9.89453H7.79393C8.03455 9.89453 8.22869 9.69902 8.22869 9.45703V6.77734H3.77166V9.45703ZM11.0328 0.105469H0.967559C0.632598 0.105469 0.423419 0.470508 0.591583 0.761719L3.61717 5.90234H8.38592L11.4115 0.761719C11.5769 0.470508 11.3678 0.105469 11.0328 0.105469Z"
                fill="#262626"
              />
            </svg>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Search fonts"
            />
          </div>

          <div className="w-full flex gap-[8px] overflow-x-auto hidescroll text-[#BFBFBF]">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="py-[6px] px-[8px] rounded-[4px] bg-[#595959] shrink-0"
              >
                <h1>Sans Serif</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[20px] text-[#8C8C8C] text-[20px] h-[70vh]">
          <div className="flex flex-col gap-[14px] pb-[20px] border-b-[1px] border-b-[#4F4F4F]">
            <h1 className="text-[18px] text-[#FAFAFA]">Recommended Fonts</h1>

            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="py-[12px] px-[14px]">
                <h1>HK Grotesk</h1>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[14px] overflow-auto">
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className="py-[12px] px-[14px]">
                <h1>HK Grotesk</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFont;
