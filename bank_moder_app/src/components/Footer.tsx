import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { footerLinks, socialMedia } from "../constants";

export const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center p-6 sm:p-16">
      <div className="flex items-start justify-center flex-col md:flex-row w-full">
        <div className="w-full flex-1 flex flex-col md:flex-row justify-start pb-4 sm:pb-8 border-[0.5px] border-b-dimWhite">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mr-0 md:mr-10"
          >
            <img
              src={logo}
              alt="hoobank"
              className="w-64 h-20 object-contain"
            />
            <p className="font-poppins font-normal text-center sm:text-left text-dimWhite text-base leading-8 max-w-xs mt-4">
              A new way to make the payments easy, reliable and secure.
            </p>
          </motion.div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 ">
            {footerLinks.map((footerLink, index) => (
              <div
                key={index}
                className="flex flex-col my-4 ss:my-0 min-w-[150px]"
              >
                <motion.h4
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="font-poppins font-medium text-base leading-4 text-white"
                >
                  {footerLink.title}
                </motion.h4>
                <ul className="space-y-4 mt-6">
                  {footerLink.links.map((link, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        color: "white",
                        textShadow: "0_0_10px_rgba(255,255,255,0.8)",
                      }}
                      transition={{ duration: 0.8, delay: 0.4 + index / 10 }}
                      viewport={{ once: true }}
                      key={link.name}
                      className="font-poppins font-normal text-xs text-dimWhite 
                      cursor-pointer"
                    >
                      {link.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Write */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-4"
      >
        <div className="w-max flex items-center gap-2 text-dimWhite text-xs sm:text-sm leading-7">
          <p>Copyright &copy;</p>
          <p className="font-poppins font-normal   ">
            2021 HooBank. All Rights Reserved - Eurocode
          </p>
        </div>

        <div className="flex mt-2 sm:mt-0 items-center gap-2">
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt={social.id}
              className="w-5 h-5 object-contain last:mr-0 mr-6"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
