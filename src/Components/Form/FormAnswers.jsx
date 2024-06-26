import Dropdown from "../Dropdown";

const content1 = <div className="flex justify-start gap-x-[8px] gap-y-[14px] w-full flex-wrap">
{Array.from({ length: 6 }, (_, index) => (
  <div
    key={index}
    className="w-full flex flex-col gap-[10px] p-[20px] rounded-[8px] bg-[#333333]"
  >
    <h1 className="text-[#F0F0F0]">
      How do you guys got to know each other?
    </h1>

    <p>
      Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      vulputate libero et velit interdum, ac aliquet odio mattis. Nunc
      vulputate libero et velit interdum, ac aliquet odio mattis.
    </p>
  </div>
))}
</div>

const FormAnswers = () => {
  return (
    <div className="felx flex-col items-start gap-[20px] flex-1 text-[#8C8C8C] w-full h-[75vh] overflow-auto p-[10px]">
      <Dropdown content={content1} defaultState={true} title={'Segment One'}/>
      <Dropdown content={content1} title={'Segment Two'}/>
      <Dropdown content={content1} title={'Segment Three'}/>
    </div>
  );
};

export default FormAnswers;
