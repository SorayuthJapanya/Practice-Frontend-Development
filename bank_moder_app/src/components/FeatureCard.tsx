import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  content,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 2) / 10 }}
      viewport={{ once: true }}
      className="flex flex-row p-4 rounded-2xl mb-6 last:mb-0 feture-card justify-center items-center duration-300 transition-all"
    >
      <div className="size-16 rounded-full flex justify-center items-center hover:bg-dimBlue duration-300">
        <img
          src={icon}
          alt={`icon${index}`}
          className="size-1/2 object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-base leading-6 mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-sm leading-6 mb-1">
          {content}
        </p>
      </div>
    </motion.div>
  );
};
