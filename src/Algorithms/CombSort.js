export function getCombSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  combSort(array, animations);

  return animations;
}

function combSort(array, animations) {
  let gap = array.length;
  while (gap >= 1) {
    gap = Math.floor((gap * 10) / 13);
    for (let i = 0; i < array.length - gap; i++) {
      let j = i + gap;
      animations.push([i, j]);
      animations.push([i, j]);
      if (array[j] < array[i]) {
        animations.push([j, array[i]]);
        animations.push([i, array[j]]);
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      } else {
        animations.push([j, array[j]]);
        animations.push([i, array[i]]);
      }
    }
  }
}
