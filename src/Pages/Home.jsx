import SideNav from "../Components/SideNav";
import WorksSpace from "../Components/WorkSpace.jsx/WorksSpace";

const Home = () => {
  return (
    <div className="flex h-[calc(100vh - 63px)] overflow-hidden" style={{ height: 'calc(100vh - 67px)' }}>
      <SideNav />
      <WorksSpace/>
    </div>
  );
};

export default Home;
