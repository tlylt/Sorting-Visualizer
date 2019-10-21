import React from "react";

function SortingShow(props) {
  const { OriginalArray } = props;
  return (
    <div
      className="array-container d-flex flex-row justify-content-center align-items-end col-auto"
      style={{ height: `400px`, width: "1200px" }}
    >
      {OriginalArray.map((item, index) => (
        <div
          className="array-bar"
          style={{
            height: `${item}px`,
            width: "10px",
            margin: "0 1px",
            backgroundColor: "black"
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default SortingShow;
