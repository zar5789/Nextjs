import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import Appheader from "./Components/AppHeader";
import { SideBar } from "./Components/SideBar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto mt-5 " style={{ width: "50%" }}>
        <div className="p-10 space-y-8 border-2 rounded-lg shadow-md">
          <h1 className="text-lime-500 font-extrabold text-2xl">
            Next JS. Demo for Testing
          </h1>
          <p className="italic font-serif text-sm">
            The button below will navigate you to the page that display the data
            related to that page.
          </p>
          <div>
            <nav className="flex justify-evenly w-full">
              <Button
                type="primary"
                href="/SpaceX"
                className="text-2xl font-semibold py-8 px-8 rounded-2xl"
              >
                SpaceX
              </Button>
              <Button
                type="primary"
                href="/starwar"
                className="text-2xl font-semibold py-8 px-8 rounded-2xl"
              >
                Starwar
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto border-2 shadow-lg p-10 space-y-8 rounded-md"
        style={{ width: "50%" }}
      >
        <p className="italic font-serif text-sm">
          I notice that navigate with a button does reload all the page so I
          also create a seperate link down here.
        </p>
        <nav className="flex justify-evenly pt-5 w-full">
          <Link href="/SpaceX" className=" text-blue-500">
            SpaceX create with Link
          </Link>
          <Link href="/starwar" className=" text-blue-500">
            Starwar create with Link
          </Link>
        </nav>
      </div>
    </div>
  );
}
