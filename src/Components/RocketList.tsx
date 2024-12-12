"use client"
import { Table } from "antd";
import Appheader from "../../Components/AppHeader";
import { getRockets, RocketData } from "@/lib/getRockets";
import { useEffect, useState } from "react";


export default function RocketList() {
  const [rockets, setRockets] =  useState<RocketData[]>([])

  const setData = async ()=>{
    const data = await getRockets()
    setRockets(data)
  }
  
  useEffect(()=>{
    setData()
  },[])

  


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
      dataIndex: "mass",
      key: "mass",
    },
    {
      title: "Height (m)",
      dataIndex: "height",
      key: "height",
    },
  ];

  return (
    <div>
      <div className="text-blue-500 font-extrabold text-2xl py-5">
        SpaceX Rocket Data
      </div>
      <Table dataSource={rockets} columns={columns} rowKey="name"></Table>
    </div>
  );
};
