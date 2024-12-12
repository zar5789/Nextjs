"use client";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    type: "divider",
  },

  {
    key: "sub1",
    label: "Navigation Bar",
    icon: <AppstoreOutlined />,
    children: [
      { key: "1", label: "SpaceX" },
      { key: "2", label: "Starwar" },
    ],
  },
];

export const SideBar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="mt-2">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};
