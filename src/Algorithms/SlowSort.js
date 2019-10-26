export function getSlowSortAnimations(array) {
  const animations = [];
  let start = 0;
  let end = array.length - 1;
  slowSort(array, start, end, animations);
  return animations;
}

function slowSort(array, start, end, animations) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  //when recursively split until 2 elements, following 2 statements will just return
  slowSort(array, start, mid, animations);
  slowSort(array, mid + 1, end, animations);
  //with 2 sub array, mid is actually equals to
  //the last element of the first sorted sub array (meaning the largest in the sub array)
  //compares the last elements of both sub array and swapped them if necessary
  if (array[mid] > array[end]) {
    animations.push([mid, end]);
    animations.push([mid, end]);
    animations.push([mid, array[end]]);
    animations.push([end, array[mid]]);
    let temp = array[mid];
    array[mid] = array[end];
    array[end] = temp;
  }
  //above steps will set the largest element to the end of array
  slowSort(array, start, end - 1, animations);
}
