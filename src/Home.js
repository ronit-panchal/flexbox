import React, { useState } from "react";
import "./styles.css";

const FlexboxGame = () => {
  const [cssInput, setCssInput] = useState("justify-content: flex-start;");
  
  const getJustifyContent = () => {
    const match = cssInput.match(/justify-content:\s*(\w+-?\w*);/);
    return match ? match[1] : "flex-start";
  };

  return (
    <div className="game-container">
      <h1 className="header">Flexbox Froggy Clone</h1>
      
      <div className="main-container">
        <div className="content-container">
          <h2>Instructions</h2>
          <p>Guide the frogs to the lily pads using CSS.</p>
          <ul>
            <li><strong>flex-start:</strong> Aligns items to the start.</li>
            <li><strong>flex-end:</strong> Aligns items to the end.</li>
            <li><strong>center:</strong> Centers items.</li>
            <li><strong>space-between:</strong> Equal spacing between items.</li>
            <li><strong>space-around:</strong> Equal spacing around items.</li>
          </ul>

          <div className="code-editor">
            <textarea
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
              placeholder="Type CSS here..."
            />
          </div>
        </div>

        <div className="pond-container">
          <div className="pond" style={{ justifyContent: getJustifyContent() }}>
            <div className="frog">🐸</div>
            <div className="frog">🐸</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxGame;
