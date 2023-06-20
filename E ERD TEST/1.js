// input n = 5
// 1**45678
// 12**5678
// 123**678
// 1234**78
// 12345**8

function test(n) {
  for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= n + 3; j++) {
      if (i + 1 === j || i + 2 === j) {
        res += "*";
      } else {
        res += j;
      }
    }
    console.log(res);
  }
}

test(4);
