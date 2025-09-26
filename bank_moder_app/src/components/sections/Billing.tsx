import { motion } from "framer-motion";
import apple from "../../assets/apple.svg";
import bill from "../../assets/bill.png";
import google from "../../assets/google.svg";

export const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse py-6 sm:py-16 px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative"
      >
        <img src={bill} alt="billing" className="w-full h-full object-contain reative z-10" />

        <div className="absolute z-3 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-3 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-start flex-col"
      >
        <h2 className="font-poppins font-semibold text-3xl xs:text-4xl text-white leading-12 xs:leading-16">
          Easily control your <br className="hidden xs:block" /> billing &
          invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-base leading-8 max-w-md mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="apple_store"
            className="w-32 h-11 object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-32 h-11 object-contain mr-5 cursor-pointer"
          />
        </div>
      </motion.div>
    </section>
  );
};
