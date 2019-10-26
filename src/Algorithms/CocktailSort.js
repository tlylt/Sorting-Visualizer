//unidirectional bubble sort
//moving the largest to the end and moving the smallest to the start
export function getCocktailSortAnimations(array) {
  const animations = [];
  CocktailSort(array, animations);
  return animations;
}

function CocktailSort(array, animations) {
  let start = 0;
  let end = array.length - 1;
  let swap = true;
  while (start !== end && swap) {
    swap = false;
    for (let j = start; j < end; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
    }
    start++;
    for (let k = end - 1; k >= start; k--) {
      if (array[k] < array[k - 1]) {
        animations.push([k, k - 1]);
        animations.push([k, k - 1]);
        animations.push([k, array[k - 1]]);
        animations.push([k - 1, array[k]]);
        let keep = array[k];
        array[k] = array[k - 1];
        array[k - 1] = keep;
        swap = true;
      }
    }
    end--;
  }
}
