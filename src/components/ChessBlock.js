import React from "react";

const ChessBlock = ({ rowIdx, columnIdx }) => {
  const Color = rowIdx % 2 === 0 ? "white" : "black";
  let newColor = null;
  if (Color === "white") {
    newColor = columnIdx % 2 === 0 ? "white" : "black";
  } else {
    newColor = columnIdx % 2 === 1 ? "white" : "black";
  }

  function handleClick() {
    console.log("rowIndex", rowIdx + 1, "columnIndex", columnIdx + 1);
  }
  return (
    <div
      onClick={handleClick}
      className="block"
      style={{
        backgroundColor: newColor
      }}
    ></div>
  );
};

export default ChessBlock;
