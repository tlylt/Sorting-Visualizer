import React from "react";

function SortingShow(props) {
  const { OriginalArray, initialColor } = props;
  return (
    <div
      className="array-container d-flex flex-row justify-content-center align-items-end col-auto"
      style={{ height: "400px", width: "1200px" }}
    >
      {OriginalArray.map((item, index) => (
        <div
          className="array-bar"
          style={{
            height: `${item}px`,
            width: "20px",
            margin: "0 1px",
            backgroundColor: `${initialColor}`
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default SortingShow;
