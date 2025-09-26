import { motion } from "framer-motion";
import { feedback } from "../../constants";
import { FeedbackCard } from "./FeedbackCard";

export const Testimonials = () => {
  return (
    <section
      id="clients"
      className="py-6 sm:py-16 px-6 sm:px-16 flex flex-col justify-center items-center relative"
    >
      {/* TODO */}
      <div className="absolute z-0 w-3/5 h-3/5 rounded-full blue__gradient -right-1/2"></div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-1"
      >
        <div className="w-full flex justify-start items-center">
          <h1 className="font-poppins font-semibold text-3xl xs:text-4xl text-white leading-12 xs:leading-16">
            What people are <br className="hidden sm:block" /> saying about us
          </h1>
        </div>

        <div className="w-full mt-6 md:mt-0">
          <p className="font-poppins font-normal text-left text-dimWhite text-base leading-8 max-w-md mt-5">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 justify-center sm:justify-start w-full relative z-1">
        {feedback.map((card, index) => (
          <FeedbackCard
            key={index}
            content={card.content}
            name={card.name}
            title={card.title}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
};
