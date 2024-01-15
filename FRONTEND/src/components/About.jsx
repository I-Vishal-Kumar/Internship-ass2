import flower_1 from "../assets/flower_1.svg";
const About = () => {
  return (
    <div
      id="About"
      className=" bg-[#DDDCDC] h-[100vw] w-[100vh] flex justify-center overflow-hidden items-center"
    >
      <div className="bg-[#DDDCDC] rotate-[90deg] h-[100vh] w-[100vw]">
        <div className="md:w-[80vw] w-[100vw] mx-0 h-[100vh]">
          {/* header  */}
          <main className="h-full flex  items-center md:flex-row flex-col-reverse  ">
            <div className="md:h-full flex items-center w-full md:flex-[2] flex-[1] h-[30vh] ">
              <div className="p-[1rem]">
                <h2 className="py-[2rem] text-xl font-bold">About us</h2>
                <span>
                  Plantix is a pioneering agricultural technology company that
                  has revolutionized farming practices globally. Founded with a
                  commitment to address the challenges faced by farmers, Plantix
                  leverages cutting-edge technology to provide intelligent
                  solutions for crop monitoring and pest detection. The
                  company&apos;s flagship mobile application, also named
                  Plantix, serves as a powerful tool for farmers, agronomists,
                  and agricultural enthusiasts. Plantix employs advanced image
                  recognition and machine learning algorithms to analyze plant
                  images uploaded by users. This enables farmers to identify
                  crop diseases, nutrient deficiencies, and pest infestations
                  accurately. The app offers real-time insights and personalized
                  recommendations, empowering farmers to make informed decisions
                  about crop management, thereby maximizing yields and
                  minimizing losses. With a mission to make precision
                  agriculture accessible to farmers of all scales, Plantix plays
                </span>
              </div>
            </div>
            <div className=" md:h-full max-h-[30vh] w-full flex items-center justify-center md:flex-[1] flex-[2]">
              <div className=" h-full w-full">
                <img src={flower_1} className="h-full w-full" alt="" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;
