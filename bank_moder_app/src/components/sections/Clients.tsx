import { motion } from "framer-motion";
import { clients } from "../../constants";

export const Clients = () => {
  const logos = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-12"
        whileInView={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {logos.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-[120px] sm:min-w-48"
          >
            <img
              src={client.logo}
              alt="client"
              className="w-24 sm:w-36 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
