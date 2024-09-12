const NeighborhoodProperty = () => {
  return (
    <main className="container mx-auto px-3 lg:pt-24">
      <h1 className="lg:text-4xl text-3xl text-[#660000] font-medium capitalize pt-3 pb-12">
        Neighborhood Properties
      </h1>
      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
        <div className="relative md:col-span-2">
          <img
            src="/assets/neighborhood/kado.jpg"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              Kado
            </p>
            {/* <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p> */}
          </span>
        </div>
        <div className="relative md:col-span-2">
          <img
            src="/assets/neighborhood/maitama.jpg"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              Maitama
            </p>
            {/* <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p> */}
          </span>
        </div>
        <div className="relative md:col-span-3">
          <img
            src="/assets/neighborhood/asokoro.jpg"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              Asokoro
            </p>
            {/* <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p> */}
          </span>
        </div>
        <div className="relative md:col-span-3">
          <img
            src="/assets/neighborhood/kubwa.jpg"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              Kubwa
            </p>
            {/* <p className="text-white lg:text-xl md:text-base text-sm">Kubwa</p> */}
          </span>
        </div>
        <div className="relative md:col-span-4">
          <img
            src="/assets/neighborhood/guzape.jpg"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              Guzape
            </p>
            {/* <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p> */}
          </span>
        </div>
      </section>
    </main>
  );
};

export default NeighborhoodProperty;
