//While advancing to the right, every bar on the left is sorted
//for every new bar, insert it into the right place on the left
export function getInsertionSortAnimations(array) {
  const animations = [];
  insertionSort(array, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        animations.push([j, j - 1]);
        animations.push([j, j - 1]);
        animations.push([j - 1, array[j]]);
        animations.push([j, array[j - 1]]);
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
}
