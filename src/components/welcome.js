import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const Welcome = () => {
  const [displayWelcome, setDisplayWelcome] = useState(true);
  const handleWelcome = () => {
    setDisplayWelcome(!displayWelcome);
  };
  return (
    <React.Fragment>
      {displayWelcome && (
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={handleWelcome}
            />
            <div className="p-4">Welcome!</div>
          </div>
        </div>
      )}  
    </React.Fragment>
  );
};
export default Welcome;
