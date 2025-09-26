import { motion } from "framer-motion";
import { Button } from "../commons/Button";
import card from "../../assets/card.png";

export const CardDeal = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row py-6 sm:py-16 px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-start flex-col"
      >
        <h2 className="font-poppins font-semibold text-3xl xs:text-4xl text-white leading-12 xs:leading-16">
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-base leading-8 max-w-md mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-10" />
      </motion.div>

      {/* features */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative"
      >
        <img
          src={card}
          alt="card_deal"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};
