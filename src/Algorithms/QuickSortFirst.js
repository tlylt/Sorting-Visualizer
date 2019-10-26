//Always selecting the first element as pivot
export function getQuickSortFirstAnimations(array) {
  const animations = [];
  let start = 0;
  let end = array.length - 1;
  quickSortFirst(array, start, end, animations);
  return animations;
}

function quickSortFirst(array, start, end, animations) {
  if (start >= end) {
    return;
  }
  let pivotIdx = partition(array, start, end, animations);
  quickSortFirst(array, start, pivotIdx - 1, animations);
  quickSortFirst(array, pivotIdx + 1, end, animations);
}

function partition(array, start, end, animations) {
  let pivotValue = array[start];
  let lower = start + 1;
  let run = true;
  while (run) {
    while (array[lower] <= pivotValue && lower <= end) {
      animations.push([start, lower]);
      animations.push([start, lower]);
      animations.push([0, array[0]]);
      animations.push([0, array[0]]);
      lower += 1;
    }
    while (array[end] >= pivotValue && lower <= end) {
      animations.push([start, end]);
      animations.push([start, end]);
      animations.push([0, array[0]]);
      animations.push([0, array[0]]);
      end -= 1;
    }
    if (end < lower) {
      run = false;
    } else {
      animations.push([lower, end]);
      animations.push([lower, end]);
      animations.push([lower, array[end]]);
      animations.push([end, array[lower]]);
      let temp = array[lower];
      array[lower] = array[end];
      array[end] = temp;
    }
  }
  animations.push([start, end]);
  animations.push([start, end]);
  animations.push([start, array[end]]);
  animations.push([end, pivotValue]);
  let temp = array[end];
  array[end] = pivotValue;
  array[start] = temp;
  return end;
}
