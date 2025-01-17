const Layout = () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
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
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Search images, texts"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[6px] px-[12px] py-[8px] text-[#8C8C8C] text-[14px] font-normal bg-[#333333]">
            <input className="w-full bg-[#333333] outline-none" type="text" placeholder="Select No of Images" />

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99975 5.859L4.41427 8.44449C4.02374 8.83501 3.46972 8.91416 3.17683 8.62127C2.88394 8.32837 2.96308 7.77435 3.35361 7.38383L6.18203 4.5554C6.42532 4.31211 6.73207 4.18967 6.9996 4.20274C7.2672 4.18957 7.57408 4.31201 7.81746 4.55539L10.6459 7.38381C11.0364 7.77434 11.1156 8.32836 10.8227 8.62125C10.5298 8.91414 9.97575 8.835 9.58522 8.44447L6.99975 5.859Z"
                  fill="#8C8C8C"
                />
              </svg>
            </span>
          </div>
          <div className="h-[75vh] overflow-auto">
            <div className="flex justify-start gap-x-[8px] gap-y-[14px] w-full flex-wrap">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="w-[163px] h-[197px] rounded-[8px] bg-[#333333]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
