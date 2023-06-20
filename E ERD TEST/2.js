// harga = [10, 7, 5, 8, 11, 9, 1]
// selisih(harga)
// # returns 6 (5 dan 11)

function selisih(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        res.push(arr[j] - arr[i]);
      }
    }
  }

  return Math.max(...res);
}

const harga = [10, 7, 5, 8, 11, 9, 1];

console.log(selisih(harga));
