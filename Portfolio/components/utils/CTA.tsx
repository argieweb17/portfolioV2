import React from "react";
import { Button } from "../ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";

const CTA = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Button
      onClick={handleBack}
      className="z-50 flex flex-row items-center my-10"
    >
      <IoMdArrowRoundBack size={24} className="z-50" onClick={handleBack}/>
      <p className="z-50">Back</p>
    </Button>
  );
};

export default CTA;
