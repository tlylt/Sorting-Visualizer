//to be done
export function getStrandSortAnimations(array) {
  const animations = [];
  let workArr = array.slice();
  let subArr = [];
  let finalArr = [];
  strandSort(workArr, subArr, finalArr, animations);
  return finalArr;
}

function strandSort(array, workArr, subArr, finalArr, animations) {
  if (workArr.length === 0) {
    //if workArr is clear, work is done
    return;
  }
  subArr.push(workArr.shift());
  for (let i = 0; i < workArr.length - 1; i++) {
    if (workArr[i] >= subArr[subArr.length - 1]) {
      let wanted = workArr.splice(i, 1);
      subArr.push(wanted.pop());
    }
  }
  finalArr = mergeArr(subArr, finalArr);
  strandSort(array, workArr, (subArr = []), finalArr);
}

function mergeArr(subArr, finalArr, animations) {
  if (finalArr.length === 0) {
    finalArr = subArr.slice();
  }
  let subArrEndIdx = subArr.length() - 1;
  let finalArrStartIdx = 0;
  while (subArr.length !== 0) {
    if (subArr[subArrEndIdx] > finalArr[finalArr]) {
      finalArrStartIdx++;
    } else {
      finalArr.splice(finalArrStartIdx, 0, subArr[subArrEndIdx]);
      subArr.pop();
      subArrEndIdx--;
      finalArrStartIdx = 0;
    }
  }
  return finalArr;
}
