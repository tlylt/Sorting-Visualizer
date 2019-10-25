export function getBubbleSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
}
