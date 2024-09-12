import { FaDollarSign, FaFire, FaHouseUser } from "react-icons/fa";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 3.2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  mini: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1.7,
  },
  module: {
    breakpoint: { max: 640, min: 0 },
    items: 0,
  },
};

const LatestPackage = () => {
  return (
    <main className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#660000] lg:text-xl uppercase">
            Check out Our New
          </h1>
          <h1 className="lg:text-4xl text-2xl font-medium capitaliz py-3e">
            Latest Listed Properties
          </h1>
        </div>
      </div>
      <section className="mt-8">
        <Carousel
          className="z-20"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_two.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-4">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 400,000,000</p>
              <p className="text-lg font-medium">For sale</p>
              <p className="text-sm">Kado</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 3 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_three.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-4">
                <FaHouseUser />
                New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 5,000,000</p>
              <p className="text-lg font-medium">For rent</p>
              <p className="text-sm">Jabi</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 3 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 2 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_one.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#00ce3a] bg-[#f1fff1] rounded-full absolute bottom-10 left-4">
                <FaDollarSign />
                Discounted Price
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 550,000,000</p>
              <p className="text-lg font-medium">For sale</p>
              <p className="text-sm">Katampe</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_four.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-4">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 150,000,000</p>
              <p className="text-lg font-medium">For rent</p>
              <p className="text-sm">Life Camp</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
        </Carousel>

        <div className="sm:hidden block">
          <div className="pt-8">
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_four.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-4">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 6,000,0000</p>
              <p className="text-lg font-medium">For rent</p>
              <p className="text-sm">Bengkulu</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-4 text-sm">
                  <PiBed className="text-2xl font-medium" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-4 text-sm">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
          <div className="pt-8">
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_two.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-4">
                <FaHouseUser />
                New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 400,000,000</p>
              <p className="text-lg font-medium">For sale</p>
              <p className="text-sm">Bengkulu</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-4 text-sm">
                  <PiBed className="text-2xl font-medium" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-4 text-sm">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
          <div className="pt-8">
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_three.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#00ce3a] bg-[#f1fff1] rounded-full absolute bottom-10 left-4">
                <FaDollarSign />
                Discounted Price
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 5,000,000</p>
              <p className="text-lg font-medium">For rent</p>
              <p className="text-sm">Bengkulu</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-4 text-sm">
                  <PiBed className="text-2xl font-medium" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-4 text-sm">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
          <div className="pt-8">
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/listings/sale_one.webp"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 flex py-2 gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-4">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">₦ 550,000,000</p>
              <p className="text-lg font-medium">For sale</p>
              <p className="text-sm">Katampe</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-4 text-sm">
                  <PiBed className="text-2xl font-medium" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-4 text-sm">
                  <LuBath className="text-xl" /> 4 Bath
                </span>
              </div>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LatestPackage;
