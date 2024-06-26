import BottomPages from "./BottomPages"
import EditPage from "./EditPage"
import ToolsNav from "./ToolsNav"


const WorksSpace = () => {
  return (
    <div className="h-full w-full bg-[#434343] relative">
      <ToolsNav/>
      <BottomPages/>
      <EditPage/>
    </div>
  )
}

export default WorksSpace
