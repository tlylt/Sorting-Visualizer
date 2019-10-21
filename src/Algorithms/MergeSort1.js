//From Clement Mihailescu

export function getMergeSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  //if array size is 1, it is sorted, return array without doing merge sort
  if (array.length <= 1) return array;
  //make a copy of array for merge sort
  const auxiliaryArray = array.slice();
  //sort the array using merge sort and return a animation array
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  // if starting and end is the same, array is sorted, return array
  if (startIdx === endIdx) return;
  //find out the middle index
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  //calling recursively with first part of the array
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  //calling recursively with second part of the array
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  //once two smaller pieces are ready, merge them
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    //comparing i and j, both the start of each array
    //record it in animation array
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      //following is equivalent to mainArray[k]=auxiliaryArray[i]; k++, i++
      //adjusts the true mainArray
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  //for cases that one side is smaller than the other side
  //just move the sorted items on that side over to mainArray
  while (i <= middleIdx) {
    animations.push([k, i]);
    animations.push([k, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([k, j]);
    animations.push([k, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
