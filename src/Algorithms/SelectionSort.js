//loop through and places the smallest element at the start
export function getSelectionSortAnimations(array) {
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let smallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([smallestIdx, j]);
      animations.push([smallestIdx, j]);
      animations.push([0, array[0]]);
      animations.push([0, array[0]]);
      if (array[j] < smallest) {
        //updates the smallest element and its index
        smallest = array[j];
        smallestIdx = j;
      }
    }
    animations.push([i, smallestIdx]);
    animations.push([i, smallestIdx]);
    animations.push([i, smallest]);
    animations.push([smallestIdx, array[i]]);
    let temp = array[i];
    array[i] = smallest;
    array[smallestIdx] = temp;
  }
}
