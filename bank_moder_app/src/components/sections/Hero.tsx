import { motion } from "framer-motion";
import discount from "../../assets/Discount.svg";
import robot from "../../assets/robot.png";
import { GetStarted } from "../GetStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row py-6 sm:py-16 mt-18 sm:mt-16 px-6 px:16"
    >
      {/* Info section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative flex-1 flex items-start justify-center flex-col px-6 sm:px-16"
      >
        <div className="absolute z-1 w-[40%] h-[80%] bottom-40 top-1/6 -left-40 rounded-full pink__gradient"></div>

        <div className="flex flexrow items-center py-1.5 px-4 bg-discount-gradient rounded-lg mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className="font-poppins font-normal text-dimWhite text-sm leading-8 ml-2">
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row gap-8 justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white ss:leading-[100px] leading-[75px] ">
            The Next <br />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold text-5xl ss:text-6xl text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-sm leading-8 max-w-md mt-5">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </motion.div>

      {/* image section */}
      <div className="mt-8 md:my-0 overflow-x-hidden">
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          src={robot}
          alt="billing"
          className="w-full h-full relative z-10"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-1 w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 rounded-full blue__gradient"></div>
      </div>

      <div className="flex justify-center items-center sm:hidden">
        <GetStarted />
      </div>
    </section>
  );
};
