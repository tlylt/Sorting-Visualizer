import React, { Component } from "react";
import { getMergeSortAnimations } from "./Algorithms/MergeSort";
import { getBubbleSortAnimations } from "./Algorithms/BubbleSort";
import { getSelectionSortAnimations } from "./Algorithms/SelectionSort";
import { getInsertionSortAnimations } from "./Algorithms/InsertionSort";
import { getCombSortAnimations } from "./Algorithms/CombSort";
import { getShellSortAnimations } from "./Algorithms/ShellSort";
import { getCocktailSortAnimations } from "./Algorithms/CocktailSort";
import { getSlowSortAnimations } from "./Algorithms/SlowSort";
import { getQuickSortFirstAnimations } from "./Algorithms/QuickSortFirst";
import { getQuickSortLastAnimations } from "./Algorithms/QuickSortLast";
import { getStrandSortAnimations } from "./Algorithms/StrandSort";
import { getHeapSortAnimations } from "./Algorithms/HeapSort";

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
    switch (sortingAlgo) {
      case "heapSort": {
        const animatingArray = getHeapSortAnimations(OriginalArray);
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
        break;
      }
      case "strandSort": {
        console.log(OriginalArray);
        const animatingArray = getStrandSortAnimations(OriginalArray);
        console.log(animatingArray);
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
        break;
      }
      case "quickSortFirst": {
        const animatingArray = getQuickSortFirstAnimations(OriginalArray);
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
        break;
      }
      case "quickSortLast": {
        const animatingArray = getQuickSortLastAnimations(OriginalArray);
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
        break;
      }
      case "slowSort": {
        const animatingArray = getSlowSortAnimations(OriginalArray);
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
        break;
      }
      case "cocktailSort": {
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
        break;
      }
      case "shellSort": {
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
        break;
      }
      case "combSort": {
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
        break;
      }
      case "insertionSort": {
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
        break;
      }
      case "selectionSort": {
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
        break;
      }
      case "bubbleSort": {
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
        break;
      }
      case "mergeSort": {
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
        break;
      }
    }
  }
  render() {
    return (
      <div className="container mb-3">
        <div className="row shadow-sm justify-content-center pb-2">
          <div className="col-md-2">
            <div className="row justify-content-center">
              <label>Array Size</label>
              <input
                className="custom-range"
                name="numInArray"
                type="range"
                min="5"
                max="150"
                value={this.props.numInArray}
                onChange={e => this.props.handleSetting(e)}
              />
            </div>
            <div className="row justify-content-center">
              <label>Animation Speed</label>
              <input
                className="custom-range"
                name="speed"
                type="range"
                min="1"
                max="100"
                value={this.props.speed}
                onChange={e => this.props.handleSetting(e)}
              />
            </div>
            <div className="row justify-content-center">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={this.props.handleReset}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="col-auto">
            <div className="row align-items-start justify-content-center ml-2 my-4">
              <div className="btn-group-sm btn-group-vertical">
                <button
                  type="button"
                  className="btn btn-outline-secondary "
                  value="mergeSort"
                  onClick={e => this.handleSort(e)}
                >
                  Merge Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="heapSort"
                  onClick={e => this.handleSort(e)}
                >
                  Heap Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="selectionSort"
                  onClick={e => this.handleSort(e)}
                >
                  Selection Sort
                </button>
              </div>
              <div className="btn-group-sm btn-group-vertical" role="group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="bubbleSort"
                  onClick={e => this.handleSort(e)}
                >
                  Bubble Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="cocktailSort"
                  onClick={e => this.handleSort(e)}
                >
                  Cocktail Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="combSort"
                  onClick={e => this.handleSort(e)}
                >
                  Comb Sort
                </button>
              </div>
              <div className="btn-group-sm btn-group-vertical" role="group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="insertionSort"
                  onClick={e => this.handleSort(e)}
                >
                  Insertion Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="shellSort"
                  onClick={e => this.handleSort(e)}
                >
                  Shell Sort
                </button>
                {/* <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="strandSort"
                  onClick={e => this.handleSort(e)}
                >
                  Strand Sort
                </button> */}
              </div>
              <div className="btn-group-sm btn-group-vertical" role="group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="slowSort"
                  onClick={e => this.handleSort(e)}
                >
                  Slow Sort
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="quickSortFirst"
                  onClick={e => this.handleSort(e)}
                >
                  Quick Sort(FirstIdx)
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  value="quickSortLast"
                  onClick={e => this.handleSort(e)}
                >
                  Quick Sort(LastIdx)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SortingPanel;
