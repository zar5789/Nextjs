import { Table } from "antd";
import Appheader from "../../Components/AppHeader";
import { getRockets } from "@/lib/getRockets";
import RocketList from "@/Components/RocketList";


const SpaceX = async () => {
  return (
    <div>
      {/* <div className="text-blue-500 font-extrabold text-2xl py-5">
        SpaceX Rocket Data
      </div>
      <Table dataSource={rockets} columns={columns} rowKey="name"></Table> */}
      <RocketList></RocketList>
    </div>
  );
};

export default SpaceX;
