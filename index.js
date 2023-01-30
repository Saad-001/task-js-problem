function rotateLeft(arr, num) {
  let len = arr.length;
  let new_arr = new Array(len);

  let j = 0;

  for (let i = num; i < len; i++) {
    new_arr[j] = arr[i];
    j++;
  }

  for (let i = 0; i < num; i++) {
    new_arr[j] = arr[i];
    j++;
  }

  return new_arr;
}

const result = rotateLeft([1, 2, 3, 4, 5], 4);
console.log(result);
