export function getMergeSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  //if array size is 1, it is sorted, return array without doing merge sort
  if (array.length <= 1) return array;
  //sort the array using merge sort and return a animation array
  mergeSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, animations) {
  // if starting and end is the same, array is sorted, return array
  if (startIdx === endIdx) return;
  //find out the middle index
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  //calling recursively with first part of the array
  mergeSortHelper(mainArray, startIdx, middleIdx, animations);
  //calling recursively with second part of the array
  mergeSortHelper(mainArray, middleIdx + 1, endIdx, animations);
  //once two smaller pieces are ready, merge them
  doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  const tempArray = mainArray.slice();
  while (i <= middleIdx && j <= endIdx) {
    //comparing i and j, both the start of each array
    //record it in animation array
    animations.push([i, j]);
    animations.push([i, j]);
    if (tempArray[i] <= tempArray[j]) {
      animations.push([k, tempArray[i]]);
      //following is equivalent to mainArray[k]=auxiliaryArray[i]; k++, i++
      //adjusts the true mainArray
      mainArray[k++] = tempArray[i++];
    } else {
      animations.push([k, tempArray[j]]);
      mainArray[k++] = tempArray[j++];
    }
  }
  //for cases that one side is smaller than the other side
  //just move the sorted items on that side over to mainArray
  while (i <= middleIdx) {
    animations.push([k, i]);
    animations.push([k, i]);
    animations.push([k, tempArray[i]]);
    mainArray[k++] = tempArray[i++];
  }
  while (j <= endIdx) {
    animations.push([k, j]);
    animations.push([k, j]);
    animations.push([k, tempArray[j]]);
    mainArray[k++] = tempArray[j++];
  }
}
