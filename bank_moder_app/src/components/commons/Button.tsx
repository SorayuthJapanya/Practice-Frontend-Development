import { motion } from "framer-motion";

interface ButtonProps {
  styles: string;
}

export const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-base text-primary outline-none rounded-xl cursor-pointer`}
    >
      Get Started
    </motion.button>
  );
};
