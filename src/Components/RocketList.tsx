"use client";
import { Table } from "antd";
import { getRockets, RocketData } from "@/serveractions/getRockets";
import { useEffect, useState } from "react";

export default function RocketList() {
  const [rockets, setRockets] = useState<RocketData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const setData = async () => {
    try {
      const data = await getRockets();

      if (data) {
        console.log("Data received:", data);
        setRockets(data);
      } else {
        console.error("No data received.");
      }
    } catch (error) {
      console.error("Error fetching rocket data:", error);
    } finally {
      setLoading(false); // Step 3: Set loading to false after fetching or error
    }
  };

  useEffect(() => {
    setData();
  }, []);

  // const rockets = await getRockets()

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Success Rate (%)",
      dataIndex: "success_rate_pct",
      key: "success_rate_pct",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Mass (kg)",
      key: "mass",
      render: (record: RocketData) => <span>{record.mass?.kg || "N/A"}</span>,
    },
    {
      title: "Height (m)",
      key: "height",
      render: (record: RocketData) => <span>{record.height?.meters || "N/A"}</span>,
    },
  ];

  return (
    <div>
      <div className="text-blue-500 font-extrabold text-2xl py-5">
        SpaceX Rocket Data
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-10">Loading...</div>
      ) : (
        <Table dataSource={rockets} columns={columns} rowKey="name"></Table>
      )}
    </div>
  );
}
