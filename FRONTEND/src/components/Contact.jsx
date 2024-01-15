const Contact = () => {
  return (
    <div
      id="Contact"
      className=" bg-[#DDDCDC] h-[100vw] w-[100vh] flex justify-center overflow-hidden items-center"
    >
      <div className="bg-[#DDDCDC] rotate-[90deg] h-[100vh] w-[100vw]">
        <div className="md:w-[80vw] w-[100vw] mx-0 h-[100vh]">
          {/* header  */}
          <main className="h-full flex  items-center md:flex-row flex-col-reverse  ">
            <div className="md:h-full flex items-center w-full md:flex-[2] flex-[1] h-[30vh] ">
              <div className="p-[1rem] w-full">
                <h2 className="py-[2rem] text-xl font-bold">Contact Us</h2>
                <div className="flex items-center gap-x-2 md:gap-x-4 w-full justify-between">
                  <div className=" pb-[1rem] border-t-[0.5rem] border-solid border-[#2eff16] relative mt-[1rem] p-[0.5rem] bg-[#fff7f7] shadow-md rounded-[0.4rem] flex-1 flex flex-col">
                    <h2 className="text-xl">Reach us</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos hic vero quibusdam quo illum laboriosam. Dolorum fugit
                      a eligendi facere!
                    </span>
                    <button className="bg-[#55ffa1]  bottom-[0.5rem] rounded-sm py-[0.25rem] text-white">
                      Contact us
                    </button>
                  </div>

                  <div className=" pb-[1rem] border-t-[0.5rem] border-solid border-[#2eff16] relative p-[0.5rem] bg-[#fff7f7] shadow-md rounded-[0.4rem] flex-1 flex flex-col">
                    <h2 className="text-xl">Reach us</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos hic vero quibusdam quo illum laboriosam. Dolorum fugit
                      a eligendi facere!
                    </span>
                    <button className="bg-[#5a55f4]  bottom-[0.5rem] rounded-sm py-[0.25rem] text-white">
                      Contact us
                    </button>
                  </div>

                  <div className=" pb-[1rem] border-t-[0.5rem] border-solid border-[#2eff16] relative mt-[1rem] p-[0.5rem] bg-[#fff7f7] shadow-md rounded-[0.4rem] flex-1 flex flex-col">
                    <h2 className="text-xl">Reach us</h2>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos hic vero quibusdam quo illum laboriosam. Dolorum fugit
                      a eligendi facere!
                    </span>
                    <button className="bg-[#ff6a6a]  bottom-[0.5rem] rounded-sm py-[0.25rem] text-white">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
