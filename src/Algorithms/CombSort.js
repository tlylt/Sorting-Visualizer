//improves on bubble sort
export function getCombSortAnimations(array) {
  const animations = [];
  combSort(array, animations);
  console.log(animations);
  return animations;
}

function combSort(array, animations) {
  let gap = array.length;
  let swapped = true;
  while (swapped) {
    //different from shell sort as it does not guarentee
    //that array will be completely sorted when gap reaches one
    //after the gap reaches one, keep on bubble sort till the array is sorted
    gap <= 1 ? (gap = 1) : (gap = Math.floor(gap / 1.3));
    swapped = false;
    for (let i = 0; i < array.length - gap; i++) {
      if (array[i] > array[i + gap]) {
        animations.push([i, i + gap]);
        animations.push([i, i + gap]);
        animations.push([i + gap, array[i]]);
        animations.push([i, array[i + gap]]);
        let temp = array[i + gap];
        array[i + gap] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  }
}
