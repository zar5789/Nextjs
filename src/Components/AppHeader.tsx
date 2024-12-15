
import Link from "next/link";

const Appheader = () => {
  return (
    <header className="bg-white text-black border shadow py-4 px-6 flex items-center justify-between">
      <div>
        <Link href="/">
          <img src="./next.svg" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div>
        <img

          src="./Me.jpg"
          alt="user"
          className="w-11 h-11 rounded-full object-cover"
        ></img>
      </div>
    </header>
  );
};

export default Appheader;
