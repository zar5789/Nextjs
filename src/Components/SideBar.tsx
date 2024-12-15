"use client";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd"; // Import Menu from Ant Design
import type { MenuProps } from "antd"; // Import MenuProps for typing

type MenuItem = Required<MenuProps>["items"][number]; // Define type for Menu items

const items: MenuItem[] = [
  {
    type: "divider",
  },
  {
    key: "sub1",
    label: "Navigation Bar",
    icon: <AppstoreOutlined />, // Ant Design Icon
    children: [
      { key: "1", label: "SpaceX" },
      { key: "2", label: "Starwar" },
    ],
  },
];

export const SideBar = () => {
  // Highlighted change: Explicitly typed the onClick handler
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e); // Logging the click event
  };

  return (
    <div className="mt-2">
      <Menu
        onClick={onClick} // Event handler
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items} // Menu items defined above
      />
    </div>
  );
};
