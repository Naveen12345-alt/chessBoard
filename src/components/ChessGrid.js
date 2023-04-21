import React from "react";
import ChessBlock from "./ChessBlock";

const GRID_DIMENS = 8;

const ChessGrid = () => {
  function createGrid() {
    return Array(GRID_DIMENS)
      .fill(0)
      .map((val, index) => {
        return (
          <div className="parent-grid" key={index}>
            {Array(GRID_DIMENS)
              .fill(0)
              .map((val, secondidx) => {
                return (
                  <div key={index + secondidx}>
                    <ChessBlock
                      rowIdx={index}
                      columnIdx={secondidx}
                    ></ChessBlock>
                  </div>
                );
              })}
          </div>
        );
      });
  }
  return <div>{createGrid()}</div>;
};

export default ChessGrid;
