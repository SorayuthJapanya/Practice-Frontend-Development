import { motion } from "framer-motion";
import qoutes from "../../assets/quotes.svg";

interface FeedBackCardProps {
  key: number;
  content: string;
  name: string;
  title: string;
  img: string;
}

export const FeedbackCard: React.FC<FeedBackCardProps> = ({
  key,
  content,
  name,
  title,
  img,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 + (key * 1) / 10 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between items-start px-10 py-12 rounded-xl max-w-sm my-5 feature-card"
    >
      <div>
        <img
          src={qoutes}
          alt={`quotes_${key}`}
          className="w-11 h-6 object-contain"
        />
        <p className="font-poppins font-normal text-base leading-8 text-white my-10">
          {content}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-normal text-base leading-8 text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-sm text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
