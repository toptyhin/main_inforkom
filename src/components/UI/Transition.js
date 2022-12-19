import { motion } from "framer-motion";
import ScrollToTop from './../scrollToTop'

const Transition = ({children}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
      }}>
      <ScrollToTop/>
      {children}
    </motion.div>
  );
}

export default Transition;