import { motion } from "framer-motion";
import { features } from "../../constants";
import { Button } from "../commons/Button";
import { FeatureCard } from "../FeatureCard";

export const Business = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row py-6 sm:py-16 px-6 sm:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-start flex-col"
      >
        <h2 className="font-poppins font-semibold text-3xl xs:text-4xl text-white leading-12 xs:leading-16">
          You do the business, <br />
          we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-base leading-8 max-w-md mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </motion.div>

      {/* features */}
      <div className="flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
