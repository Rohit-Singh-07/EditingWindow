import { useState } from "react";

const EditPage = () => {
    const [aiPopUp, setAiPopUp] = useState(false);

    const handleAiPopUp = () => {
        setAiPopUp(!aiPopUp);
    };

  return (
    <div className="w-full h-full max-w-[60vw] max-h-[55vh] bg-white absolute top-[12vh] left-[50%] translate-x-[-50%]">
      <span className="absolute top-0 right-[-40px] cursor-pointer" onClick={handleAiPopUp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <rect
            x="1.25"
            y="1.25"
            width="28.5"
            height="28.5"
            rx="14.25"
            fill="white"
          />
          <rect
            x="1.25"
            y="1.25"
            width="28.5"
            height="28.5"
            rx="14.25"
            stroke="#573CFA"
            strokeWidth="1.5"
          />
          <path
            d="M15.2246 8L15.2266 8.09297C15.3203 12.4559 18.861 15.9564 23.2247 16.0001C18.777 16.2202 15.2206 19.7766 15.0006 24.2243C14.9568 19.8606 11.4564 16.3198 7.0934 16.2262L7.00043 16.2242C11.4715 16.0572 15.0576 12.4711 15.2246 8Z"
            fill="#573CFA"
          />
          <path
            d="M20.084 6L20.0847 6.03486C20.1199 7.67093 21.4476 8.98357 23.084 8.99998C21.4161 9.08249 20.0825 10.4161 20 12.084C19.9836 10.4476 18.6709 9.11986 17.0349 9.08474L17 9.08399C18.6766 9.02136 20.0214 7.67662 20.084 6Z"
            fill="#573CFA"
          />
        </svg>

        {aiPopUp && <div className="flex flex-col justify-stretch items-start gap-[4px] p-[10px] rounded-lg absolute top-[120%] right-0 text-nowrap text-[#8C8C8C] bg-[#1F1F1F]">
            <div className="flex justify-start px-[8px] py-[2px] self-stretch hover:text-[#FFFFFF] cursor-pointer">Regenerate Color</div>
            <div className="flex justify-start px-[8px] py-[2px] self-stretch hover:text-[#FFFFFF] cursor-pointer">Regenerate Layout</div>
            <div className="flex justify-start px-[8px] py-[2px] self-stretch hover:text-[#FFFFFF] cursor-pointer">Regenerate Heading</div>
        </div>}
      </span>
    </div>
  );
};

export default EditPage;
