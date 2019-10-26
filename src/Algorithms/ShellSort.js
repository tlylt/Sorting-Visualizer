//improves on insertion sort, which is a gap=1 shell sort

export function getShellSortAnimations(array) {
  let animations = [];
  shellSort(array, animations);
  return animations;
}

function shellSort(array, animations) {
  //initialize a gap and decreases it until 1, which will then perform an insertion sort
  // every pass shell sort will ensure the pattern is completely sorted
  let gap = array.length;
  while (gap >= 1) {
    for (let i = 0; i < array.length; i += gap) {
      for (let j = i; j > 0; j -= gap) {
        if (array[j] < array[j - gap]) {
          //animation of swapping the bars to their correct order
          //to stimulate inserting the bar into the right place
          //and shifting every bar on its right to the right by one
          animations.push([j, j - gap]);
          animations.push([j, j - gap]);
          animations.push([j, array[j - gap]]);
          animations.push([j - gap, array[j]]);
          let temp = array[j];
          array[j] = array[j - gap];
          array[j - gap] = temp;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
}
