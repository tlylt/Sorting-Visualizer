export function getHeapSortAnimations(array) {
  const animations = [];
  heapSort(array, animations);
  return animations;
}

function heapSort(arr, animations) {
  var arrLength = arr.length;
  for (var i = Math.floor(arrLength / 2); i >= 0; i--) {
    //builds the max heap by making all parent node bigger than child node
    //this initialize and turns the array into a max heap for the first time
    //i is the index of the item that has child node(for odd num) and therefore worth checking
    //we fills the heap with index from zero to max, from left to right across the levels
    heapify(arr, i, arrLength, animations);
  }

  for (i = arrLength - 1; i > 0; i--) {
    //now that we have a max heap, we continually exchanges the root node with the last node
    //and removes the last node which contains the max value and therefore considered sorted
    swap(arr, 0, i, animations);
    //after the swap, the root node may no longer be the biggest value, hence required heapify.
    //since last node is sorted, reduce the array length by one
    arrLength--;
    heapify(arr, 0, arrLength, animations);
  }
}

function heapify(arr, idx, arrLength, animations) {
  var leftIdx = 2 * idx + 1;
  var rightIdx = 2 * idx + 2;
  //check if the parent node is bigger than child node
  var max = idx;
  if (leftIdx < arrLength && arr[leftIdx] > arr[max]) {
    animations.push([leftIdx, max]);
    animations.push([leftIdx, max]);
    animations.push([0, arr[0]]);
    animations.push([0, arr[0]]);
    max = leftIdx; // if left exists and bigger
  }
  if (rightIdx < arrLength && arr[rightIdx] > arr[max]) {
    animations.push([rightIdx, max]);
    animations.push([rightIdx, max]);
    animations.push([0, arr[0]]);
    animations.push([0, arr[0]]);
    max = rightIdx; // if right exists and bigger
  }
  if (max !== idx) {
    // if needs to change
    swap(arr, idx, max, animations);
    heapify(arr, max, arrLength, animations); // recursive to the end for the root node
  }
}

function swap(arr, firstIdx, lastIdx, animations) {
  animations.push([firstIdx, lastIdx]);
  animations.push([firstIdx, lastIdx]);
  animations.push([firstIdx, arr[lastIdx]]);
  animations.push([lastIdx, arr[firstIdx]]);
  var temp = arr[firstIdx];
  arr[firstIdx] = arr[lastIdx];
  arr[lastIdx] = temp;
}
