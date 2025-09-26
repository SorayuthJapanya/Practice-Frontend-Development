import { motion } from "framer-motion";
import arrowUp from "../assets/arrow-up.svg";

export const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer "
    >
      <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-primary">
        <div className="flex items-start justify-center flex-row">
          <p className="flex gap-1 font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
            <img
              src={arrowUp}
              alt="arrow"
              className="size-[23px] object-contain"
            />
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
};
