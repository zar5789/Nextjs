
import Appheader from "@/Components/AppHeader";
import RocketList from "@/Components/RocketList";


async function SpaceX() {
  return (
    <div>
      {/* <div className="text-blue-500 font-extrabold text-2xl py-5">
        SpaceX Rocket Data
      </div>
      <Table dataSource={rockets} columns={columns} rowKey="name"></Table> */}
      <Appheader></Appheader>
      <RocketList></RocketList>
    </div>
  );
};

export default SpaceX;
