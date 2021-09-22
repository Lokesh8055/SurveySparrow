import React, { useEffect } from "react";
import close from "assets/close.svg";
import { useGlobalStateContext } from "context/globalStateContext";

const Header = ({ toggleChat, showCloseButton }) => {
  const { subtitle, setSubtitle } = useGlobalStateContext();
  const title = `Hello Ask us anything.
  Share Your feedback
  `;

  useEffect(() => {
    setSubtitle(title);
  }, [setSubtitle, title]);

  return (
    <div className="header">
      {showCloseButton && (
        <button className="close-button" onClick={toggleChat}>
          <img src={close} className="close" alt="close" />
        </button>
      )}
      <h3 className="title">Hi There</h3>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
