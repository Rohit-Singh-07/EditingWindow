import SideNav from "../Components/SideNav";

const Home = () => {
  return (
    <div className="flex h-[calc(100vh - 63px)] overflow-hidden" style={{ height: 'calc(100vh - 67px)' }}>
      <SideNav />
    </div>
  );
};

export default Home;
