//Always selecting the last element as pivot
export function getQuickSortLastAnimations(array) {
  const animations = [];
  let start = 0;
  let end = array.length - 1;
  quickSortLast(array, start, end, animations);
  return animations;
}

function quickSortLast(array, start, end, animations) {
  if (start >= end) {
    return;
  }
  let pivotIdx = partition(array, start, end, animations);
  quickSortLast(array, start, pivotIdx - 1, animations);
  quickSortLast(array, pivotIdx + 1, end, animations);
}

function partition(array, start, end, animations) {
  let pivotValue = array[end];
  let currentSmaller = start - 1;
  while (start < end) {
    animations.push([start, end]);
    animations.push([start, end]);
    if (array[start] <= pivotValue) {
      currentSmaller += 1;
      animations.push([start, array[currentSmaller]]);
      animations.push([currentSmaller, array[start]]);
      let tempx = array[currentSmaller];
      array[currentSmaller] = array[start];
      array[start] = tempx;
    } else {
      animations.push([0, array[0]]);
      animations.push([0, array[0]]);
    }
    start += 1;
  }
  animations.push([end, currentSmaller + 1]);
  animations.push([end, currentSmaller + 1]);
  animations.push([end, array[currentSmaller + 1]]);
  animations.push([currentSmaller + 1, array[end]]);
  let temp = array[currentSmaller + 1];
  array[currentSmaller + 1] = pivotValue;
  array[end] = temp;
  return currentSmaller + 1;
}
