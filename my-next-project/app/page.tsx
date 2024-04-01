import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/zx1itjA.jpg')",
      }}
    >
      <div className="flex flex-col gap-5">
        <Link href={"/light"}>
          <div className="bg-blue-500 p-5 text-2xl rounded-lg cursor-pointer">
            Light
          </div>
        </Link>

        <Link href={"/dark"}>
          <div className="bg-blue-500 p-5 text-2xl rounded-lg cursor-pointer">
            Dark
          </div>
        </Link>
      </div>
    </div>
  );
}
