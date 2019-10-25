export function getCocktailSortAnimations(array) {
  //takes a unsorted array
  //initiate a new array for record and animation
  const animations = [];
  CocktailSort(array, animations);
  return animations;
}

function CocktailSort(array, animations) {
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
    for (let k = i - 1; k >= 1; k--) {
      animations.push([k, k - 1]);
      animations.push([k, k - 1]);
      if (array[k] < array[k - 1]) {
        animations.push([k, array[k - 1]]);
        animations.push([k - 1, array[k]]);
        let keep = array[k];
        array[k] = array[k - 1];
        array[k - 1] = keep;
      } else {
        animations.push([k, array[k]]);
        animations.push([k - 1, array[k - 1]]);
      }
    }
  }
}
