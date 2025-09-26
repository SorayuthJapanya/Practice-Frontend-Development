import { motion } from "framer-motion";
import { Button } from "../commons/Button";

export const CTA = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-6 sm:py-16 px-6 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full p-8 sm:p-14 rounded-xl flex flex-col sm:flex-row gap-6 justify-between items-center bg-black-gradient"
      >
        {/* info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center sm:items-start text-center"
        >
          <h1 className="font-poppins font-semibold text-3xl xs:text-4xl text-white">
            Let’s try our service now!
          </h1>
          <p className="font-poppins font-normal text-center sm:text-left text-dimWhite text-base leading-8 max-w-md mt-5">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </motion.div>

        <Button styles="" />
      </motion.div>
    </div>
  );
};
