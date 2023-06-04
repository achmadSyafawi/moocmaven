let n = 4;
let k = 10;

let relo = [-3, 10, -10, -1, -3, -2, 10];

// function tambahan
function solution(n, k) {
  let array = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;
  for (let i = 0; i < n; i++) {
    let result = array[i];
    let j = 0;
    while (result !== k && j < n) {
      if (j !== i) {
        result = result + array[j];
      }
      if (result === k) {
        count += 1;
      }
      j++;
    }
    console.log(`idx-${i}`, result);
  }
  return count === 0 ? -1 : count;
}

let second = [-1, -1, -1, 1, 1, 1, 1];
[1, 1, 1, 1, -1, -1, -1];

function numberRelocation(a) {
  let b = [...a];
  let c = [...a];
  let swapCount = 0;
  let sum = c[0];
  let i = 0;
  let j = 0;

  while (i < b.length) {
    while (j < c.length && sum <= 0) {
      sum = sum + c[j];
      j++;
    }

    if (b[i] < 0 && sum <= 0) {
      let removed = c.splice(i, 1);
      c.push(...removed);
      swapCount++;
    }
    i++;
  }

  return { array: b, count: swapCount };
}

console.log("result", numberRelocation(second));

// console.log("result1", solution(5, 10));
// console.log("result2", solution(4, 10));
// console.log("result3", solution(1, 2));
