import { motion } from "framer-motion";
import { useState } from "react";

  
  const StaggeredDropDownii = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center"
          >
            <span className="menu">Eats</span>
            <motion.span >
             
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-3 rounded-2xl rounded-tl bg-black bg-opacity-80  absolute top-[120%] left-[50%] overflow-hidden "
          >
            {/* Drink options */}
           <Option setOpen={setOpen} text="Fast Casual" />
            <Option setOpen={setOpen}  text="Casual Dining" />
            <Option setOpen={setOpen}  text="Fine Dining" />
            </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)} // Close the dropdown when an option is clicked
        className="flex items-center gap-2 w-full p-2 text-lg  whitespace-nowrap rounded-md hover:bg-amber-200 text-white hover:text-black transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  // Add your animation variants
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };
  
  export default StaggeredDropDownii;
  