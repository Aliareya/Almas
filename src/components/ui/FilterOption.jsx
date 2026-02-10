import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Check from "../../components/ui/Check";

function FilterOption({ filtername, options, selectedOptions, onSelectionChange }) {
  const [openFAQ, setOpenFAQ] = useState(false);

  const handleCheckboxChange = (option) => {
    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    onSelectionChange(newSelected);
  };

  return (
    <div className="w-full border-t border-[#4d260cc9] flex flex-col">
      
      {/* Title */}
      <div
        className="min-h-11 w-full flex justify-between items-center cursor-pointer"
        onClick={() => setOpenFAQ(!openFAQ)}
      >
        <p className="text-base font-semibold">{filtername}</p>

        <motion.div
          animate={{ rotate: openFAQ ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            icon="icon-park-outline:down-c"
            width="20"
            height="20"
            color="#532b10eb"
          />
        </motion.div>
      </div>

      {/* Animated Options */}
      <AnimatePresence initial={false}>
        {openFAQ && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 min-h-20 max-h-32 overflow-y-scroll">
              {options?.map((option, index) => (
                <Check
                  key={index}
                  option={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FilterOption;
