export function getInsertionSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  insertionSort(array, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        animations.push([j, array[j - 1]]);
        array[j - 1] = temp;
        animations.push([j - 1, temp]);
      } else {
        animations.push([j, array[j]]);
        animations.push([j, array[j]]);
      }
    }
  }
}
