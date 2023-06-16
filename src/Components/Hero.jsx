import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Bottom = () => {
  return (
    <div>
      <motion.div
        className="flex justify-between mt-2 p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <button className="font-semibold">GET STARTED</button>
        </div>
        <motion.div
          className="text-xl font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsArrowRight />
        </motion.div>
      </motion.div>
    </div>
  );
};

function Hero() {
  return (
    <div className="bg-[#1a1c19] text-[#302013] p-4 md:p-8 lg:p-8 xl:p-16">
      <div className="grid lg:flex gap-3">
        <div className="w-full lg:w-2/5 rounded-lg bg-[#e1d6c4]">
          <motion.div
            className="p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-md">CONGREVE STREET</h2>
            <h1 className="text-2xl font-bold">Main Heading</h1>
            <div className="mt-3">
              <motion.img
                src="https://w0.peakpx.com/wallpaper/920/323/HD-wallpaper-vintage-water-carrier-vintage-classic-vintage-vintage-oil-painting-vintage-thumbnail.jpg"
                alt=""
                className="rounded-lg w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <Bottom />
          </motion.div>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="grid gap-2">
            <div className="bg-[#b5a18a]  rounded-lg">
              <motion.div
                className="p-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid lg:flex md:flex justify-between p-3">
                  <div className="grid gap-2 w-80 ">
                    <h2 className="text-3xl font-semibold">
                      Women Slicing Bread
                    </h2>
                    <p className="">
                      Consectetur consequat commodo occaecat culpa ex. Et quis
                      exercitation qui fugiat irure velit dolore aliquip culpa
                      cillum ipsum mollit. Sint culpa eiusmod do non velit
                      dolore. Elit mollit elit id adipisicing est ut deserunt
                      adipisicing adipisicing ut tempor.
                    </p>
                  </div>
                  <div>
                    <motion.img
                      src="https://w0.peakpx.com/wallpaper/354/625/HD-wallpaper-vintage-christmas-christmas-room-painting-vintage-thumbnail.jpg"
                      alt=""
                      className="rounded-lg shadow-lg mt-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <Bottom />
              </motion.div>
            </div>
            <div className="grid lg:flex md:flex gap-2">
              <div className="bg-[#986b54] w-full lg:w-1/2 rounded-lg">
                <motion.div
                  className="p-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <img
                      src="https://ychef.files.bbci.co.uk/1600x900/p04cffrr.webp"
                      className="rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <div>
                      <h2 className="text-3xl font-semibold">Portrait</h2>
                    </div>
                    <div className="flex">
                      <div className="h-8 w-8  bg-[#302013] rounded-full"></div>
                      <div className="h-8 w-8  bg-[#302013] rounded-full"></div>
                      <div className="h-8 w-8  bg-[#302013] rounded-full"></div>
                    </div>
                  </div>
                  <p>
                    Non excepteur exercitation officia Lorem minim adipisicing Lorem. Ut laborum Lorem dolor deserunt nisi commodo fugiat. Ex cillum ex Lorem in id do eu nisi velit minim duis culpa. Sit ipsum in labore ipsum.
                  </p>
                  <Bottom/>
                </motion.div>
              </div>
              <div className="bg-[#b3a38a]  w-full lg:w-1/2 rounded-lg">
                <motion.div
                  className="p-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between mb-6 p-3">
                    <div>
                      <button className="border rounded-full border-[#302013] px-2">
                        European
                      </button>
                    </div>
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/William_Shakespeare_by_John_Taylor.jpg/220px-William_Shakespeare_by_John_Taylor.jpg"
                        className="rounded-full h-12 w-12"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Vintage Painting</h2>
                    <p className="mt-2">
                      Non excepteur exercitation officia Lorem minim adipisicing Lorem. Ut laborum Lorem dolor deserunt nisi commodo fugiat. Ex cillum ex Lorem in id do eu nisi velit minim duis culpa. Sit ipsum in labore ipsum.
                    </p>
                  </div>
                  <hr className="border-t-2 border-[#302013] my-4" />

                  <div className=" flex justify-between">
                    <span className="font-semibold">PUBLIC DOMAIN</span>
                    <span className="font-semibold">NETHERLAND</span>
                  </div>
                  <hr className="border-t-2 border-[#302013] my-2" />
                  <hr className="border-t-2 border-[#302013] my-2" />
                  <Bottom />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
