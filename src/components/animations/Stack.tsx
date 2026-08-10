import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StackSection({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index: number;
  className: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  //   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
   <section
  ref={ref}
  className="relative"
  style={{ zIndex: index }}
>
  <motion.div
    style={{ y }}
    className={`sticky top-0 ${className}`}
  >
    {children}
  </motion.div>
</section>
  );
}
