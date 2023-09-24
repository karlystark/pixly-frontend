import React from "react";
import "./AltCard.css";


function AltCard({closeCard}) {

  return (
    < div className="altTextInstructions" >
      <div className="altTextInstructionsTitle">
        <h2>How do I write good alt-text?</h2>
        <i className="close-icon bi bi-x" onClick={() => closeCard()}></i>
        <ul>
          <li>
            alt-text is a short, concise, and clear description of your
            image that will provide a textual alternative for folks who use
            screen readers
          </li>
          <li>
            be sure not to include "image of" in your alt-text - this is
            repetitive for users <i className="bi bi-emoji-smile"></i>
          </li>
        </ul>
      </div>
      <div className="altTextInstructionsDemo">
        <div className="exampleText">
          <p>a nice example:</p>
        </div>
        <img src="/21.jpg" alt="five cats sit on cement in front of a blue painted backyard garage" />
        <p>
          alt-text: five cats gather in front of a blue-painted
          backyard garage.
        </p>
      </div>
    </div >
  );

};


export default AltCard;