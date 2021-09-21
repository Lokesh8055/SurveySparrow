import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalStateContext } from "context/globalStateContext";

const Body = () => {
  const { show, setShow, subtitle } = useGlobalStateContext();
  return (
    <div className="body">
      <h4>Start a Conversation</h4>
      <p>{subtitle}</p>
      <button>
        New Conversation <FaArrowRight onClick={() => setShow(!show)} />
      </button>
    </div>
  );
};

export default Body;
