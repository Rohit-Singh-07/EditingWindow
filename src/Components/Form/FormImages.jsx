import SegmentImages from "./SegmentImages";

const FormImages = () => {
  return (
    <div className="felx flex-col items-start gap-[20px] flex-1 text-[#8C8C8C] p-[5px] h-[75vh] overflow-auto">
      <SegmentImages title={"Segment One"}/>
      <SegmentImages title={"Segment Two"}/>
    </div>
  );
};

export default FormImages;
