import React from "react";
import { getMergeSortAnimations } from "./Algorithms/MergeSort";
function SortingPanel(props) {
  function handleSort() {
    const { onCompareColor, initialColor, speed, OriginalArray } = props;
    //numInArray is not equal to animating array length
    const animatingArray = getMergeSortAnimations(OriginalArray);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animatingArray.length; i++) {
      const colorChange = i % 3 !== 2;

      if (colorChange) {
        const [barOneIdx, barTwoIdx] = animatingArray[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? onCompareColor : initialColor;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * speed);
      }
    }
  }
  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.handleReset}
      >
        Reset
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleSort}>
        Sort
      </button>
      <button type="button" className="btn btn-secondary">
        Test
      </button>
    </div>
  );
}

export default SortingPanel;
