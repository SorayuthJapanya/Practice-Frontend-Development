import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface NumCountProps {
  value: number;
}

export const NumCount: React.FC<NumCountProps> = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2, ease: "easeOut" });
      return () => animation.stop();
    }
  }, [value, count, isInView]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
    >
      {rounded}
    </motion.div>
  );
};
