export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  mergeSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(mainArray, startIdx, middleIdx, animations);
  mergeSortHelper(mainArray, middleIdx + 1, endIdx, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  const tempArray = mainArray.slice();
  for (k; k < endIdx + 1; k++) {
    if (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (tempArray[i] <= tempArray[j]) {
        animations.push([k, tempArray[i]]);
        mainArray[k] = tempArray[i++];
      } else {
        animations.push([k, tempArray[j]]);
        mainArray[k] = tempArray[j++];
      }
    } else if (i <= middleIdx) {
      animations.push([k, i]);
      animations.push([k, i]);
      animations.push([k, tempArray[i]]);
      mainArray[k] = tempArray[i++];
    } else {
      animations.push([k, j]);
      animations.push([k, j]);
      animations.push([k, tempArray[j]]);
      mainArray[k] = tempArray[j++];
    }
  }
}
