import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import decor_left from "../assets/decor_left.svg";
import decor_right from "../assets/decor_right.svg";

const Layout = () => {
  return (
    <section className="bg-red-800 h-[100vh] w-[100vw] flex justify-center items-center relative">
      <div
        style={{ scrollSnapType: "y mandatory" }}
        className="bg-green-200 rotate-[-90deg] border-3 border-solid border-black overflow-x-hidden  h-[100vw]
       min-w-[100vh]"
      >
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          className="h-[100dvw]  min-w-[100vh] bg-blue-300"
        >
          <Home />
        </div>
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          className="h-[100dvw]  min-w-[100vh] bg-red-300"
        >
          <About />
        </div>
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          className="h-[100dvw] min-w-[100vh]  bg-green-300"
        >
          <Contact />
        </div>

        {/* decors */}
      </div>
      <div className="absolute h-full top-0 hidden md:block left-0  w-[10rem]">
        <img src={decor_left} alt="" />
      </div>
      <div className="absolute w-[10rem] h-full right-0 hidden md:block top-0 ">
        <img src={decor_right} alt="" />
      </div>
    </section>
  );
};

export default Layout;
