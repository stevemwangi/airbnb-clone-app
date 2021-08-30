import Image from "next/image";

function LargeCard() {
  return (
    <div className="relative object-contain h-80 w-full mb-6">
      <Image
        src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
        layout="fill"
        className="rounded-xl"
      />
      <div className="absolute top-20 left-10 max-w-md">
        <h2 className="text-white font-bold	mt-3 text-3xl">Try hosting</h2>
        <p className="text-white mt-4">
          Earn extra income and unlock new opportunities by sharing your space.
        </p>
        <button className="bg-white rounded-md p-2 mt-5 hover:bg-gray-250">
          <span className="font-normal">Learn more</span>
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
