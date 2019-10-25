export function getSelectionSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let smallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        smallestIdx = j;
      }
      animations.push([smallestIdx, j]);
      animations.push([smallestIdx, j]);
      animations.push([i, array[i]]);
      animations.push([j, array[j]]);
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
