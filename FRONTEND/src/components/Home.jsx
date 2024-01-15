import { useEffect, useState } from "react";
import LOGO from "../assets/LOGO.svg";
import flower_1 from "../assets/flower_1.svg";
import flower_2 from "../assets/flower_2.svg";
import flower_3 from "../assets/flower_3.svg";
import { Carousel as Crousels } from "flowbite-react";

const Home = () => {
  const [data, update_data] = useState([
    {
      image: flower_1,
      name: "Daisy",
      origin: "India , Columbia",
      description:
        "alf;d s;lf ad lfj;as fdfja j;dfjlasd fs df;s af;ks f;asdjf ;",
    },
  ]);
  const [activeIndex, updateActive] = useState(0);
  useEffect(() => {
    update_data([
      {
        image: flower_1,
        name: "Daisy",
        origin: "India , Columbia",
        description:
          "alf;d s;lf ad lfj;as fdfja j;dfjlasd fs df;s af;ks f;asdjf ;",
      },
      {
        image: flower_2,
        name: "Tulip",
        origin: "Persia, Turkey",
        description:
          "Elegant and graceful, tulips come in various colors and are a sign of spring's arrival",
      },
      {
        image: flower_3,
        name: "Orchid",
        origin: "Tropical regions worldwide",
        description:
          "Exotic and diverse, orchids showcase intricate patterns and a wide range of colors",
      },
    ]);
  }, []);
  function test(index) {
    updateActive(index);
  }

  return (
    <div
      id="Home"
      className=" bg-[#DDDCDC] h-[100vw] w-[100vh] flex justify-center overflow-hidden items-center"
    >
      <div className="bg-[#DDDCDC] rotate-[90deg] h-[100vh] w-[100vw]">
        <div className="md:w-[80vw] w-[100vw] mx-0 h-[100vh]">
          {/* header  */}
          <div className="w-[100vw] max-h-[15%] my-0 mx-auto md:w-[80vw] border-b-[1.23px] pt-[2rem] pb-[0.5rem] border-solid border-black flex justify-between px-[1rem] items-end">
            <div
              style={{ fontFamily: "cursive" }}
              className="flex font-bold text-blue-700 text-xl items-end"
            >
              <span className="h-full">
                <img src={LOGO} alt="" />
              </span>
              Plantix
            </div>
            <div
              style={{ fontFamily: "cursive" }}
              className="flex cursor-pointer gap-x-[0.5rem] justify-between"
            >
              <span
                onClick={() => {
                  document
                    .getElementById("Home")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Home
              </span>
              <span
                onClick={() => {
                  document
                    .getElementById("About")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                About us
              </span>
              <span
                onClick={() => {
                  document
                    .getElementById("Contact")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Contact us
              </span>
            </div>
            <div>
              <button className="bg-white shadow-lg rounded-full py-[0.24rem]">
                Sign up
              </button>
            </div>
          </div>
          <main
            style={{ gridTemplateRows: "2fr 1.5fr" }}
            className="h-[90%] grid "
          >
            <div className=" h-full w-full flex items-center">
              <div
                style={{ gridTemplateColumns: "1.5fr 2fr" }}
                className="grid h-full w-full"
              >
                {/* images */}
                <div className="h-full  w-full flex justify-center items-center">
                  <img
                    src={data[activeIndex].image || flower_1}
                    className="md:h-[80%]"
                    alt=""
                  />
                </div>
                {/* descriptions */}
                <div>
                  <span className=" text-end pb-[0.5rem] pt-[0.5rem] text-lg font-semibold border-b-[1.2px] border-solid border-black w-full block">
                    {data[activeIndex].name}
                  </span>
                  <div className="pl-[1rem]">
                    <div className="py-[1rem] ">Origin</div>
                    <div className="ml-[1rem] ">{data[activeIndex].origin}</div>
                    <div className="py-[1rem]">Description</div>
                    <div className="ml-[1rem] ">
                      {data[activeIndex].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center pb-[2rem] h-full w-full">
              <div className="h-full sm:h-full w-full md:w-[80%] xl:h-80 2xl:h-96">
                <Crousels onSlideChange={test} leftControl="" rightControl="">
                  <div className="flex h-full">
                    <div className="flex-[1]">
                      <img src={data[0]?.image} className="h-full" alt="..." />
                    </div>
                    <div className="flex-[2] flex items-center">
                      <div>
                        <h2 className="text-xl">{data[0]?.name}</h2>
                        <span>Origin</span>
                        <span className="ml-[1rem]">{data[0]?.origin}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full">
                    <div className="flex-[1]">
                      <img src={data[1]?.image} className="h-full" alt="..." />
                    </div>
                    <div className="flex-[2] flex items-center">
                      <div>
                        <h2 className="text-xl">{data[1]?.name}</h2>
                        <span>Origin</span>
                        <span className="ml-[1rem]">{data[1]?.origin}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full">
                    <div className="flex-[1]">
                      <img src={data[2]?.image} className="h-full" alt="..." />
                    </div>
                    <div className="flex-[2] flex items-center">
                      <div>
                        <h2 className="text-xl">{data[2]?.name}</h2>
                        <span>Origin</span>
                        <span className="ml-[1rem]">{data[2]?.origin}</span>
                      </div>
                    </div>
                  </div>
                </Crousels>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
