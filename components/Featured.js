import Image from "next/image";
function Featured({ img, title, subtitle }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 space-x-7 ml-3 mt-5">
        <Image className="rounded-lg mg-auto" src={img} layout="fill" />
      </div>
      <div className="pt-2">
        <h2 className="font-semibold mt-2 mb-2">{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default Featured;
