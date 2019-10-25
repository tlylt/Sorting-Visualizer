export function getShellSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  shellSort(array, animations);
  return animations;
}

function shellSort(array, animations) {
  let gap = array.length;
  while (gap >= 1) {
    for (let i = 0; i < array.length; i += gap) {
      for (let j = i; j > 0; j -= gap) {
        animations.push([j, j - gap]);
        animations.push([j, j - gap]);
        if (array[j] < array[j - gap]) {
          animations.push([j, array[j - gap]]);
          animations.push([j - gap, array[j]]);
          let temp = array[j];
          array[j] = array[j - gap];
          array[j - gap] = temp;
        } else {
          animations.push([j, array[j]]);
          animations.push([i, array[i]]);
        }
      }
    }
    gap = Math.floor(gap / 2.2);
  }
}
