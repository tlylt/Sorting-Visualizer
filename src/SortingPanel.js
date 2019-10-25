import React, { Component } from "react";
import { getMergeSortAnimations } from "./Algorithms/MergeSort";
import { getBubbleSortAnimations } from "./Algorithms/BubbleSort";
import { getSelectionSortAnimations } from "./Algorithms/SelectionSort";
import { getInsertionSortAnimations } from "./Algorithms/InsertionSort";
import { getCombSortAnimations } from "./Algorithms/CombSort";
import { getShellSortAnimations } from "./Algorithms/ShellSort";
import { getCocktailSortAnimations } from "./Algorithms/CocktailSort";

class SortingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingAlgo: ""
    };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    const sortingAlgo = e.target.value;
    this.setState({
      sortingAlgo: sortingAlgo
    });
    const { onCompareColor, initialColor, speed, OriginalArray } = this.props;
    const arrayBars = document.getElementsByClassName("array-bar");
    if (sortingAlgo === "cocktailSort") {
      const animatingArray = getCocktailSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else if (sortingAlgo === "shellSort") {
      const animatingArray = getShellSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else if (sortingAlgo === "combSort") {
      const animatingArray = getCombSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else if (sortingAlgo === "insertionSort") {
      const animatingArray = getInsertionSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else if (sortingAlgo === "selectionSort") {
      const animatingArray = getSelectionSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else if (sortingAlgo === "bubbleSort") {
      const animatingArray = getBubbleSortAnimations(OriginalArray);
      for (let i = 0; i < animatingArray.length; i++) {
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? onCompareColor : initialColor;
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
    } else {
      const animatingArray = getMergeSortAnimations(OriginalArray);
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
  }
  render() {
    return (
      <div className="container">
        <div className="row flex-column">
          <div className="form-group col-2">
            <label className=" d-flex justify-content-center">Array Size</label>
            <input
              className="form-control-range"
              name="numInArray"
              type="range"
              value={this.props.numInArray}
              onChange={e => this.props.handleSetting(e)}
            />
          </div>
          <div className="form-group col-2">
            <label className=" d-flex justify-content-center">
              Animation Speed
            </label>
            <input
              className="form-control-range"
              name="speed"
              type="range"
              value={this.props.speed}
              onChange={e => this.props.handleSetting(e)}
            />
          </div>
          <div className="btn-group-sm col-8" role="group">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.props.handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="mergeSort"
              onClick={e => this.handleSort(e)}
            >
              Merge Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="bubbleSort"
              onClick={e => this.handleSort(e)}
            >
              Bubble Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="selectionSort"
              onClick={e => this.handleSort(e)}
            >
              Selection Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="insertionSort"
              onClick={e => this.handleSort(e)}
            >
              Insertion Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="combSort"
              onClick={e => this.handleSort(e)}
            >
              Comb Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="shellSort"
              onClick={e => this.handleSort(e)}
            >
              Shell Sort
            </button>
            <button
              type="button"
              className="btn btn-primary"
              value="cocktailSort"
              onClick={e => this.handleSort(e)}
            >
              Cocktail Sort
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleTest}
            >
              Test
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SortingPanel;
