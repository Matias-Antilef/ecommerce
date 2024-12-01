import Image from "next/image";

const GridMain = () => {
  return (
    <div className="grid  grid-cols-5 grid-rows-6 gap-4 min-h-[60vh] ">
      <div className="relative col-span-3 row-span-6 rounded-3xl overflow-hidden">
        <Image
          src={"/test.png"}
          alt="/test.png"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative col-span-2 row-span-3 col-start-4 rounded-3xl overflow-hidden ">
        <Image
          src={"/test.png"}
          alt="/test.png"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative col-span-2 row-span-3 col-start-4 row-start-4 rounded-3xl overflow-hidden">
        <Image
          src={"/test.png"}
          alt="/test.png"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default GridMain;
